import fs from 'node:fs';import path from 'node:path';
const root=process.cwd();
const routes=['app/page.tsx','app/about/page.tsx','app/work/page.tsx','app/media/page.tsx','app/blog/page.tsx','app/resources/page.tsx','app/book/page.tsx','app/contact/page.tsx','app/privacy-policy/page.tsx','app/terms-of-service/page.tsx','app/blog-posts/[slug]/page.tsx'];
const errors=[];
for(const file of routes)if(!fs.existsSync(path.join(root,file)))errors.push('Missing page: '+file);
const sources=fs.readFileSync(path.join(root,'lib/content.ts'),'utf8');
const slugs=[...sources.matchAll(/slug:'([^']+)'/g)].map(x=>x[1]);
if(slugs.length!==7)errors.push('Expected seven preserved article URLs; found '+slugs.length);
if(new Set(slugs).size!==slugs.length)errors.push('Duplicate article slugs');
const env=fs.readFileSync(path.join(root,'.env.example'),'utf8');
for(const secret of ['SUPABASE_SERVICE_ROLE_KEY','RESEND_API_KEY','TURNSTILE_SECRET_KEY','RATE_LIMIT_SECRET','CRON_SECRET'])if(!env.includes(secret+'='))errors.push('Missing env documentation: '+secret);
for(const file of ['app/page.tsx','app/about/page.tsx','app/work/page.tsx','app/media/page.tsx']){
  const text=fs.readFileSync(path.join(root,file),'utf8');
  if(/Keys 2 Life Ministry Mission|God.given Temple|Christ Is Key/.test(text))errors.push('Ministry marketing copy in '+file);
}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`Content/route checks passed: ${routes.length} pages, ${slugs.length} archive URLs.`);
