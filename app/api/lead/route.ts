import {NextResponse} from 'next/server';
import {z} from 'zod';
import {allContactSettingsPresent,getAdminDb,getIpHash,verifyTurnstile} from '@/lib/contact-server';
import {dispatchOutbox} from '@/lib/mail';

export const runtime='nodejs';

const LeadSchema=z.object({
  submissionId:z.string().uuid(),
  name:z.string().trim().min(2).max(120),
  email:z.email().max(200),
  phone:z.string().trim().max(40).default(''),
  topic:z.enum(['General question','Media or interview','Event inquiry','His work','Other']),
  preferredContact:z.enum(['email','phone']).default('email'),
  message:z.string().trim().max(5000).default(''),
  sourcePath:z.string().max(160).regex(/^\/[a-zA-Z0-9\-/?=&]*$/).default('/contact'),
  privacy:z.literal(true),
  website:z.string().max(180).default(''),
  turnstileToken:z.string().min(1).max(2048)
});
const outputHeaders={'Cache-Control':'no-store'};
export async function POST(req:Request){
  // Always fail closed if protection/storage are not connected.
  if(!allContactSettingsPresent())return NextResponse.json({error:'The contact form is not available yet. Please try again later.'},{status:503,headers:outputHeaders});
  try {
    const size=Number(req.headers.get('content-length')||0);
    if(size>14000)return NextResponse.json({error:'Your message is too long.'},{status:413,headers:outputHeaders});
    const raw=await req.text();
    if(raw.length>14000)return NextResponse.json({error:'Your message is too long.'},{status:413,headers:outputHeaders});
    const result=LeadSchema.safeParse(JSON.parse(raw));
    if(!result.success)return NextResponse.json({error:'Check the form fields and try again.'},{status:400,headers:outputHeaders});
    const p=result.data;
    if(p.website){return NextResponse.json({accepted:true},{status:200,headers:outputHeaders});}
    if(!await verifyTurnstile(p.turnstileToken,req))return NextResponse.json({error:'Please complete the security check and try again.'},{status:400,headers:outputHeaders});
    const db=getAdminDb();if(!db)throw new Error('DB unavailable');
    const ipHash=getIpHash(req);
    const {data,error}=await db.rpc('ck_accept_lead',{
      p_submission_id:p.submissionId,p_ip_hash:ipHash,
      p_name:p.name,p_email:p.email,p_phone:p.phone,p_topic:p.topic,
      p_preferred_contact:p.preferredContact,p_message:p.message,p_source_path:p.sourcePath,
    });
    if(error){
      if(error.code==='P0001')return NextResponse.json({error:'Too many requests. Please try again later.'},{status:429,headers:outputHeaders});
      throw error;
    }
    const payload=data as {lead_id?:string,outbox_id?:string}|null;
    if(!payload?.lead_id)return NextResponse.json({error:'Unable to save your message right now.'},{status:503,headers:outputHeaders});
    // Lead receipt is durable before email. Email failures are retried by cron.
    if(payload.outbox_id)await dispatchOutbox(payload.outbox_id).catch(()=>false);
    return NextResponse.json({accepted:true,receiptId:payload.lead_id},{headers:outputHeaders});
  }catch(e){console.error('contact_submit_error',e instanceof Error?e.name:'unknown');return NextResponse.json({error:'Unable to save your message right now.'},{status:503,headers:outputHeaders});}
}
