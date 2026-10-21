import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft, ArrowUpRight, Film, FileText} from 'lucide-react';
import {posts, dateLabel, site} from '@/lib/content';

export async function generateStaticParams(){return posts.map(p=>({slug:p.slug}));}
export const dynamicParams=false;

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const p=posts.find(x=>x.slug===slug);
  if(!p)return {title:'Article not found',robots:{index:false}};
  const description=`Archived ${p.label.toLowerCase()} from ${dateLabel(p.date)}. ${p.summary}`;
  const ogImage = p.image || '/opengraph-image.png';
  return {
    title:p.title, description,
    alternates:{canonical:'/blog-posts/'+slug},
    openGraph:{type:'article',title:p.title,description,publishedTime:`${p.date}T12:00:00Z`,url:site.url+'/blog-posts/'+slug,images:[ogImage]},
    twitter:{card:'summary_large_image',title:p.title,description,images:[ogImage]}
  };
}

export default async function Article({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const p=posts.find(x=>x.slug===slug); if(!p)notFound();
  const isVideo = p.originalType==='video';
  const hasEmbed = p.sourceUrl && (p.sourceUrl.includes('rumble.com/embed') || p.sourceUrl.includes('youtube.com/embed') || p.sourceUrl.includes('brighteon.com/embed'));

  const ld={"@context":"https://schema.org","@type":"BlogPosting",headline:p.title,datePublished:p.date,
    mainEntityOfPage:site.url+'/blog-posts/'+p.slug,description:p.summary,
    ...(p.image ? {image: site.url+p.image} : {})};

  return <>
    {/* Hero */}
    <section className="page-hero article-hero">
      <div className="container">
        <Link href="/blog" className="back-link"><ArrowLeft size={18}/> BACK TO ARTICLES</Link>
        <div className="eyebrow"><span className="eyebrow-line"/> ARCHIVE / {dateLabel(p.date).toUpperCase()}</div>
        <h1>{p.title}</h1>
        <p>Originally published {dateLabel(p.date)}. Preserved from Christopher Key's archive.</p>
      </div>
    </section>

    <section className="section" style={{paddingTop:'0'}}>
      <div className="container">
        <div className="article-layout">

          {/* Main content column */}
          <div className="article-main">

            {/* Thumbnail image — shown if no embed */}
            {p.image && !hasEmbed && (
              <div className="article-thumb">
                <img src={p.image} alt={p.title} style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center top',display:'block'}}/>
              </div>
            )}

            {/* Video embed */}
            {hasEmbed && (
              <div className="article-embed-wrap">
                <iframe
                  src={p.sourceUrl}
                  className="media-embed"
                  allowFullScreen
                  title={p.title}
                  allow="autoplay; fullscreen"
                  style={{width:'100%',aspectRatio:'16/9',border:'none',display:'block'}}
                />
                {p.sourceName && (
                  <p style={{fontSize:'12px',color:'#7a8aaa',marginTop:'10px',letterSpacing:'1px'}}>
                    SOURCE: {p.sourceName.toUpperCase()}
                  </p>
                )}
              </div>
            )}

            {/* No embed — link to original */}
            {isVideo && !hasEmbed && p.sourceUrl && (
              <a className="button button-dark" style={{marginTop:'24px',display:'inline-flex'}} href={p.sourceUrl} target="_blank" rel="noopener noreferrer">
                WATCH ORIGINAL RECORDING <ArrowUpRight size={16}/>
              </a>
            )}

            {/* Summary */}
            <div style={{marginTop:'36px'}}>
              <div className="section-index" style={{marginBottom:'16px'}}>
                <span>{isVideo ? <Film size={20}/> : <FileText size={20}/>}</span>
                <span>{isVideo ? 'RECORDED APPEARANCE' : 'ARCHIVE ENTRY'}</span>
              </div>
              <p style={{fontSize:'18px',lineHeight:'1.85',color:'#576070',marginBottom:'16px'}}>{p.summary}</p>
              {p.archiveNote && <p className="editorial-note">{p.archiveNote}</p>}
            </div>

            {/* Context callout */}
            <div className="archive-callout" style={{marginTop:'36px'}}>
              <b>HISTORICAL CONTEXT</b>
              <p>Title and original date are retained as a record of the publication. The statements and subject matter reflect the original source and are not independently verified claims or current professional advice.</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="article-sidebar">
            <div className="sidebar-card">
              <p className="sidebar-label">PUBLISHED</p>
              <p className="sidebar-value">{dateLabel(p.date)}</p>
            </div>
            <div className="sidebar-card">
              <p className="sidebar-label">TYPE</p>
              <p className="sidebar-value">{p.label}</p>
            </div>
            {p.sourceName && (
              <div className="sidebar-card">
                <p className="sidebar-label">ORIGINAL HOST</p>
                <p className="sidebar-value">{p.sourceName}</p>
              </div>
            )}
            {p.image && (
              <div className="sidebar-thumb">
                <img src={p.image} alt={p.title} style={{width:'100%',height:'160px',objectFit:'cover'}}/>
              </div>
            )}
            <Link href="/blog" className="button button-outline" style={{display:'flex',marginTop:'8px'}}>
              ALL ARTICLES <ArrowUpRight size={14}/>
            </Link>
            <a href="/contact" className="button button-dark" style={{display:'flex',marginTop:'10px'}}>
              CONTACT CHRISTOPHER <ArrowUpRight size={14}/>
            </a>
          </aside>

        </div>
      </div>
    </section>

    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld).replace(/</g,'\\u003c')}}/>
  </>;
}
