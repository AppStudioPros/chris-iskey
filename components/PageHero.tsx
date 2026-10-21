import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
export function PageHero({kicker,title,description,linkLabel,linkHref}:{kicker:string,title:string,description:string,linkLabel?:string,linkHref?:string}){return <section className="page-hero"><div className="container"><div className="eyebrow"><span className="eyebrow-line"/>{kicker}</div><h1>{title}</h1><p>{description}</p>{linkLabel&&linkHref&&<Link className="text-link" href={linkHref}>{linkLabel}<ArrowUpRight size={17}/></Link>}</div></section>}
