import Link from 'next/link';
import { ArrowUpRight, Menu } from 'lucide-react';
const links = [['Home','/'],['About','/about'],['His Work','/work'],['Media','/media'],['Articles','/blog'],['Resources','/resources'],['Contact','/contact']];
export function SiteHeader(){return <header className="site-header"><div className="container header-inner">
  <Link href="/" className="brand" aria-label="Christopher Key home"><span>CHRISTOPHER</span><span>KEY<span className="brand-dot">.</span></span></Link>
  <nav className="desktop-nav" aria-label="Main navigation">{links.map(([n,u])=><Link href={u} key={u}>{n}</Link>)}</nav>
  <Link href="/book" className="header-cta">REQUEST A TIME <ArrowUpRight size={16}/></Link>
  <details className="mobile-menu"><summary aria-label="Toggle menu"><Menu size={25}/></summary><nav aria-label="Mobile navigation">{links.map(([n,u])=><Link href={u} key={u}>{n}</Link>)}<Link href="/book">Book a time</Link></nav></details>
</div></header>}
