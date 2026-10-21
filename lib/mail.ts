import {Resend} from 'resend';
import {getAdminDb} from '@/lib/contact-server';

/** Send one claimed outbox notification. A failure stays queued for cron retry. */
export async function dispatchOutbox(id:string):Promise<boolean>{
  const db=getAdminDb();
  if(!db || !process.env.RESEND_API_KEY || !process.env.RESEND_FROM || !process.env.LEAD_NOTIFICATION_TO) return false;
  const {data:claimed,error:claimError}=await db.rpc('ck_claim_one_notification',{p_id:id});
  if(claimError || !claimed || claimed.length===0) return false;
  const entry=claimed[0] as {id:string,lead_id:string};
  const {data:lead,error}=await db.from('ck_leads')
    .select('id,created_at,name,email,phone,topic,message,preferred_contact,source_path')
    .eq('id',entry.lead_id).single();
  if(error || !lead){await db.rpc('ck_finish_notification',{p_id:id,p_success:false,p_error:'Lead record unavailable'});return false;}
  const safe=(value:unknown)=>String(value ?? '').slice(0,5000);
  const body=[
    'New Christopher Key website inquiry',
    `Received: ${safe(lead.created_at)}`,
    `Topic: ${safe(lead.topic)}`,
    `Name: ${safe(lead.name)}`,
    `Email: ${safe(lead.email)}`,
    `Phone: ${safe(lead.phone)}`,
    `Preferred reply: ${safe(lead.preferred_contact)}`,
    `Source page: ${safe(lead.source_path)}`,
    `Message:\n${safe(lead.message)}`,
    `Lead reference: ${safe(lead.id)}`
  ].join('\n\n');
  let sent=false;
  let reason='Email provider error';
  try{
    const resend=new Resend(process.env.RESEND_API_KEY);
    const result=await resend.emails.send({
      from:process.env.RESEND_FROM!,to:[process.env.LEAD_NOTIFICATION_TO!],
      subject:`Christopher Key website: ${safe(lead.topic).slice(0,80)}`,
      text:body,
    },{idempotencyKey:`ck-lead-${entry.lead_id}`});
    sent=Boolean(result.data?.id) && !result.error;
    if(result.error) reason=result.error.message;
  }catch(e){reason=e instanceof Error?e.message:'Email service unavailable';}
  await db.rpc('ck_finish_notification',{p_id:id,p_success:sent,p_error:sent?'':reason.slice(0,300)});
  return sent;
}
