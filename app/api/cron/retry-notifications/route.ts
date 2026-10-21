import {NextResponse} from 'next/server';
import {getAdminDb} from '@/lib/contact-server';
import {dispatchOutbox} from '@/lib/mail';
export const runtime='nodejs';
export async function GET(req:Request){
  const secret=process.env.CRON_SECRET;
  if(!secret||req.headers.get('authorization')!==`Bearer ${secret}`)
    return NextResponse.json({error:'Unauthorized'},{status:401});
  const db=getAdminDb();
  if(!db)return NextResponse.json({error:'Not configured'},{status:503});
  const {data,error}=await db.from('ck_notifications').select('id')
    .in('status',['pending','retry']).lte('next_attempt_at',new Date().toISOString()).limit(20);
  if(error)return NextResponse.json({error:'Queue unavailable'},{status:503});
  const days=Math.min(Math.max(Number(process.env.LEAD_RETENTION_DAYS||180),30),3650);
  const cutoff=new Date(Date.now()-days*24*60*60*1000).toISOString();
  const {error:cleanupError}=await db.from('ck_leads').delete().lt('created_at',cutoff);
  if(cleanupError)console.error('lead_retention_cleanup_failed',cleanupError.code);
  const results=await Promise.all((data||[]).map(item=>dispatchOutbox(item.id)));
  return NextResponse.json({attempted:results.length,providerAccepted:results.filter(Boolean).length});
}
