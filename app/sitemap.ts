import type {MetadataRoute} from 'next';import {site,posts} from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap{
 const routes=['','/about','/work','/media','/blog','/resources','/contact','/book','/privacy-policy','/terms-of-service'];
 return [...routes.map(path=>({url:site.url+path,changeFrequency:'monthly' as const,priority:path===''?1:0.7})),...posts.map(p=>({url:`${site.url}/blog-posts/${p.slug}`,lastModified:new Date(`${p.date}T12:00:00Z`),changeFrequency:'yearly' as const,priority:0.35}))];
}
