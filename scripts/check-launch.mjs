import fs from 'node:fs';
// Local helper: read .env.local for presence checks without printing secret values.
if(fs.existsSync('.env.local')){
  for(const line of fs.readFileSync('.env.local','utf8').split(/\r?\n/)){
    const match=line.match(/^([A-Z][A-Z0-9_]*)=(.*)$/);
    if(match && !process.env[match[1]])process.env[match[1]]=match[2].trim().replace(/^['\"]|['\"]$/g,'');
  }
}
const keys=['SUPABASE_URL','SUPABASE_SERVICE_ROLE_KEY','RESEND_API_KEY','RESEND_FROM','LEAD_NOTIFICATION_TO','TURNSTILE_SECRET_KEY','RATE_LIMIT_SECRET','CRON_SECRET','NEXT_PUBLIC_TURNSTILE_SITE_KEY'];
const missing=keys.filter(k=>!process.env[k]);
if(missing.length){console.error('Cannot declare production integrations ready. Missing:\n'+missing.map(x=>'- '+x).join('\n'));process.exitCode=1;}
else console.log('Contact integration environment variables are present. Still perform real submission, Supabase row, email receipt and rate-limit tests.');
