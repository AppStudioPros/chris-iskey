import Link from 'next/link';
import { ArrowUpRight, Heart, Menu } from 'lucide-react';
const links = [['Home','/'],['About','/about'],['Blog','/blog'],['Shop','/shop'],['Resources','/resources'],['Contact','/contact']];
export function SiteHeader(){return <header className="site-header"><div className="container header-inner">
  <Link href="/" className="vp-main-logo" aria-label="Christopher Key home">
    <img src="/images/vaccine-police-logo.png" alt="Vaccine Police" height={64} />
  </Link>
  <nav className="desktop-nav" aria-label="Main navigation">{links.map(([n,u])=><Link href={u} key={u}>{n}</Link>)}</nav>
  <a href="https://masterpeacebyhcs.com/christiskey" target="_blank" rel="noopener noreferrer" className="header-cta" style={{background:'transparent',border:'2px solid #8b2c3e',color:'#8b2c3e'}}>MASTERPEACE</a>
  <Link href="/donate" className="header-cta">DONATE <Heart size={16}/></Link>
  <details className="mobile-menu"><summary aria-label="Toggle menu"><Menu size={25}/></summary><nav aria-label="Mobile navigation">{links.map(([n,u])=><Link href={u} key={u}>{n}</Link>)}<Link href="/donate">Donate</Link></nav></details>
</div></header>}
