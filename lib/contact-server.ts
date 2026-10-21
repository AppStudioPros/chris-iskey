import { createHmac } from 'node:crypto';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

export function getAdminDb(): SupabaseClient | null {
  const {SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY} = process.env;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return null;
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth:{autoRefreshToken:false,persistSession:false},
  });
}

export function getIpHash(req: Request) {
  // On Vercel, request IP comes from the platform proxy. Never store raw IP.
  const forwarded = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '';
  const ip = req.headers.get('x-real-ip')?.trim() || forwarded || 'unknown';
  const secret = process.env.RATE_LIMIT_SECRET;
  if (!secret) throw new Error('IP hash secret not configured');
  return createHmac('sha256',secret).update(ip).digest('hex');
}

export async function verifyTurnstile(token:string,req:Request):Promise<boolean>{
  const secret=process.env.TURNSTILE_SECRET_KEY;
  if(!secret || !token) return false;
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),8000);
  try{
    const body=new URLSearchParams({secret,response:token});
    const result=await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{
      method:'POST',body,signal:controller.signal,cache:'no-store',
    });
    if(!result.ok) return false;
    const reply=await result.json() as {success?:boolean,hostname?:string};
    // Cloudflare validates token and expiry. Constrain origin for production.
    const host=new URL(req.url).hostname;
    return reply.success===true && (reply.hostname===host || (host==='localhost' && reply.hostname==='localhost'));
  }catch{return false;}finally{clearTimeout(timeout);}
}

export function allContactSettingsPresent():boolean {
  return ['SUPABASE_URL','SUPABASE_SERVICE_ROLE_KEY','RESEND_API_KEY',
    'RESEND_FROM','LEAD_NOTIFICATION_TO','TURNSTILE_SECRET_KEY','RATE_LIMIT_SECRET']
    .every(k=>Boolean(process.env[k]));
}
