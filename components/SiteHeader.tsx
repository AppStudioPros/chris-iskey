'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Heart, Menu, X } from 'lucide-react';

const links: [string, string][] = [
  ['Home', '/'],
  ['About', '/about'],
  ['Blog', '/blog'],
  ['Shop', '/shop'],
  ['Resources', '/resources'],
  ['Contact', '/contact'],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  function close() { setOpen(false); }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="vp-main-logo" aria-label="Christopher Key home">
          <img src="/images/vaccine-police-logo.png" alt="Vaccine Police" height={64} />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([n, u]) => <Link href={u} key={u}>{n}</Link>)}
        </nav>

        <a href="https://masterpeacebyhcs.com/christiskey" target="_blank" rel="noopener noreferrer" className="header-cta" style={{ background: 'transparent', border: '2px solid #8b2c3e', color: '#8b2c3e' }}>MASTERPEACE</a>
        <Link href="/donate" className="header-cta">DONATE <Heart size={16} /></Link>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', padding: '4px' }}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {open && (
        <>
          <div onClick={close} style={{ position: 'fixed', inset: 0, zIndex: 49, background: 'rgba(0,0,0,0.3)' }} />
          <nav
            aria-label="Mobile navigation"
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 50,
              width: '75%', maxWidth: '300px',
              background: '#f0ede4', borderLeft: '1px solid #d4cfc8',
              display: 'flex', flexDirection: 'column',
              paddingTop: '72px',
              boxShadow: '-8px 0 32px rgba(0,0,0,0.15)',
            }}
          >
            <button onClick={close} aria-label="Close menu" style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: '#576070' }}>
              <X size={22} />
            </button>
            {links.map(([n, u]) => (
              <Link
                key={u} href={u}
                onClick={close}
                style={{ padding: '16px 28px', fontSize: '1rem', fontWeight: 600, color: '#14213d', borderBottom: '1px solid #e0dbd4', textDecoration: 'none' }}
              >
                {n}
              </Link>
            ))}
            <Link href="/donate" onClick={close} style={{ margin: '20px 20px 0', padding: '14px 20px', background: '#8b2c3e', color: '#fff', textAlign: 'center', fontWeight: 700, fontSize: '.85rem', letterSpacing: '1.5px', textDecoration: 'none' }}>
              DONATE
            </Link>
          </nav>
        </>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
          .desktop-nav, .header-cta { display: none !important; }
        }
      `}</style>
    </header>
  );
}
