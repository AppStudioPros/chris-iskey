import {pageMetadata} from '@/lib/seo';
import type {Metadata} from 'next';import {ArrowUpRight, FileText,BookOpen,ExternalLink} from 'lucide-react';import {PageHero} from '@/components/PageHero';
export const metadata:Metadata=pageMetadata('Resources','Browse preserved resource links and document references from Christopher Key’s original site.','/resources');
const resources=[
['The Ruby Affidavit','Historic external link','https://vaccine-police.com/'],
['David Martin Document','Historical document','https://cdn.prod.website-files.com/62f6c2ce87ee5b46474b4cf5/62f75221d95bf7724d4a6132_The-Criminal-Conspiracy-of-Coronavirus.pdf'],
['Doctor’s Letter','Archived letter','https://cdn.prod.website-files.com/62f6c2ce87ee5b46474b4cf5/62f75252fd7b9937e0360a3a_doctors-letter.pdf'],
['Nuremberg Papers','Historical document','https://cdn.prod.website-files.com/62f6c2ce87ee5b46474b4cf5/62f752711f5ebf66a12ba42f_nuremberg.pdf'],
['The Vaccine Waiver','Archived document','https://cdn.prod.website-files.com/62f6c2ce87ee5b46474b4cf5/62f7547b992cf445dccc612b_vaccine-waiver.pdf'],
['Phone Script for CEOs and Superintendents','Archived document','https://cdn.prod.website-files.com/62f6c2ce87ee5b46474b4cf5/62f7547d39fad206d88696f1_Scripts.pdf']
];
export default function Resources(){return <><PageHero kicker="05 / RESOURCES" title="A library of references." description="A simpler way to explore documents and links previously collected on Christopher’s site. Links and claims require source and ownership review."/><section className="section"><div className="container"><div className="archive-callout"><b>RESOURCE CONTEXT</b><p>These entries are historic items from the original site, not reviewed guidance or endorsement. Their destinations and permissions need to be verified before publishing a new download library.</p></div><div className="resource-grid">{resources.map(([title,label,url],i)=><a className="resource-card" key={title} href={url} target="_blank" rel="noopener noreferrer"><span className="resource-icon">{i%2?<BookOpen size={23}/>:<FileText size={23}/>}</span><span className="small-label">{label}</span><h3>{title}</h3><span className="resource-open">VIEW ORIGINAL COLLECTION <ExternalLink size={15}/></span></a>)}</div></div></section></>}
