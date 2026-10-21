import {pageMetadata} from '@/lib/seo';
import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight,Play,ExternalLink} from 'lucide-react';
import {PageHero} from '@/components/PageHero';
import {posts,dateLabel} from '@/lib/content';
export const metadata:Metadata=pageMetadata('Media','Explore original Christopher Key interviews, recordings, and historical appearances.','/media');
export default function Media(){return <>
 <PageHero kicker="03 / MEDIA" title="On the record." description="Interviews and recordings from Christopher’s public archive, with original dates and sources clearly labeled."/>
 <section className="section"><div className="container"><div className="media-catalog-top"><div className="media-placeholder"><Play size={42}/><div>DOCUMENTARY ARCHIVE</div></div><div><span className="small-label">DOCUMENTARY / HISTORICAL COLLECTION</span><h2>COVENOM-19 Series Vol. 1</h2><p>This documentary appears on the previous site as an embedded Rumble video. Rumble currently shows the recording as premium-only; availability is controlled by the original host.</p><a className="text-link" href="https://rumble.com/embed/v2kfkcc/?pub=4" target="_blank" rel="noopener noreferrer">OPEN VIDEO ON ORIGINAL HOST <ExternalLink size={17}/></a></div></div>
 <h2 className="media-list-title">Recorded conversations</h2><div className="article-list">{[posts[1],posts[0],posts[6]].map((p,i)=><Link href={'/blog-posts/'+p.slug} className="article-row" key={p.slug}><div className="article-num">0{i+1}</div><div><span className="article-date">{dateLabel(p.date)} / {p.label}</span><h3>{p.title}</h3></div><ArrowUpRight size={25}/></Link>)}</div>
 <p className="editorial-note">Some historic media is hosted by independent platforms and may require an account or subscription to view. These are archived publications, not medical advice.</p></div></section>
 </>}
