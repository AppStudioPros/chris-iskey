import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft,ArrowUpRight,Film,FileText} from 'lucide-react';
import {posts,dateLabel,site} from '@/lib/content';
export async function generateStaticParams(){return posts.map(p=>({slug:p.slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const p=posts.find(x=>x.slug===slug);
 if(!p)return {title:'Article not found',robots:{index:false}};
 const description=`Archived ${p.label.toLowerCase()} from ${dateLabel(p.date)}. ${p.summary}`;
 return {title:p.title,description,alternates:{canonical:'/blog-posts/'+slug},
 openGraph:{type:'article',title:p.title,description,publishedTime:`${p.date}T12:00:00Z`,url:site.url+'/blog-posts/'+slug,images:['/opengraph-image.png']},
 twitter:{card:'summary_large_image',title:p.title,description,images:['/opengraph-image.png']}};
}
export default async function Article({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const p=posts.find(x=>x.slug===slug);if(!p)notFound();
 const ld={"@context":"https://schema.org","@type":"BlogPosting",headline:p.title,datePublished:p.date,
   mainEntityOfPage:site.url+'/blog-posts/'+p.slug,description:p.summary};
 return <>
  <section className="page-hero article-hero"><div className="container"><Link href="/blog" className="back-link"><ArrowLeft size={18}/> BACK TO ARTICLES</Link><div className="eyebrow"><span className="eyebrow-line"/> ARCHIVE / {dateLabel(p.date).toUpperCase()}</div><h1>{p.title}</h1><p>Originally published {dateLabel(p.date)}. Preserved from Christopher Key’s former website.</p></div></section>
  <section className="section"><div className="container reading-column"><div className="archive-callout"><b>ORIGINAL PUBLICATION / HISTORICAL CONTEXT</b><p>Title and original date are retained as a record of the publication. The statements, opinions, and subject matter are those of the original source, not independently verified claims or current professional advice.</p></div>
   <div className="section-index"><span>{p.originalType==='video'?<Film size={24}/>:<FileText size={24}/>}</span><span>{p.originalType==='video'?'RECORDED APPEARANCE':'ARCHIVE ENTRY'}</span></div>
   <h2>About this entry</h2><p>{p.summary}</p>
   {p.archiveNote&&<p className="editorial-note">{p.archiveNote}</p>}
   {p.sourceUrl&&<a className="button button-dark" href={p.sourceUrl} target="_blank" rel="noopener noreferrer">OPEN ORIGINAL RECORDING <ArrowUpRight size={16}/></a>}
   <div className="archive-source"><strong>Archive information</strong><p>First published: {dateLabel(p.date)}<br/>Entry type: {p.label}<br/>{p.sourceName?`Original media host: ${p.sourceName}`:'Media host: not identified in the publicly available page'}</p>
    <p>Older articles without recoverable text have been retained as accurate publication records, not replaced with fabricated text. If an original CMS export is supplied, the approved source material can be restored here.</p></div>
  </div></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld).replace(/</g,'\\u003c')}}/>
 </>;
}
