import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
export function PageHero({kicker,title,description,linkLabel,linkHref,dark}:{kicker:string,title:string,description:string,linkLabel?:string,linkHref?:string,dark?:boolean}){
  return <section className="page-hero" style={dark?{background:'#14213d'}:undefined}>
    <div className="container">
      <div className="eyebrow" style={dark?{color:'#c04060'}:undefined}><span className="eyebrow-line" style={dark?{background:'#c04060'}:undefined}/>{kicker}</div>
      <h1 style={dark?{color:'#f0ede4'}:undefined}>{title}</h1>
      <p style={dark?{color:'#9aaac8'}:undefined}>{description}</p>
      {linkLabel&&linkHref&&<Link className="text-link" href={linkHref} style={dark?{color:'#f0ede4',borderColor:'#c04060'}:undefined}>{linkLabel}<ArrowUpRight size={17}/></Link>}
    </div>
  </section>
}
