import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import MadeByWDP365 from '@/components/MadeByWDP365';

const socials = [
  {
    label: 'Brighteon',
    url: 'https://www.brighteon.com/channels/vaccinepolice/home',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Brighteon">
        <rect width="32" height="32" rx="8" fill="#c0392b"/>
        <polygon points="11,8 25,16 11,24" fill="#fff"/>
      </svg>
    ),
  },
  {
    label: 'Rumble',
    url: 'https://rumble.com/user/VaccinePolice',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Rumble">
        <rect width="32" height="32" rx="8" fill="#85c742"/>
        <polygon points="11,9 24,16 11,23" fill="#fff"/>
      </svg>
    ),
  },
  {
    label: 'Telegram',
    url: 'https://t.me/vaccinepolice',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Telegram">
        <rect width="32" height="32" rx="16" fill="#2aabee"/>
        <path d="M7 15.5l16-6.5-4 14-4-4.5-4 3 1-5.5z" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M15 18.5l-1.5 4.5 3-3" fill="#fff" opacity="0.7"/>
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">

          {/* Brand + social */}
          <div>
            <div className="footer-kicker">THE PERSONAL WEBSITE OF</div>
            <Link href="/" className="footer-brand">Christopher Key<span>.</span></Link>
            <p>A closer look at the person, the background, and the work.</p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {socials.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ display: 'block', transition: 'opacity .2s', opacity: 0.9 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.9')}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="footer-nav">
            <div>
              <b>EXPLORE</b>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog & Media</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/donate">Donate</Link>
              <a href="https://masterpeacebyhcs.com/christiskey" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: 6, alignItems: 'center' }}>MasterPeace <ArrowUpRight size={13}/></a>
            </div>
            <div>
              <b>GET IN TOUCH</b>
              <Link href="/resources">Resources</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/book">Book a time</Link>
            </div>
          </div>

        </div>

        {/* WDP365 badge */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0 8px' }}>
          <MadeByWDP365 theme="dark" projectCode="chris-iskey" size="compact" />
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© 2026 Christopher Key. All rights reserved.</span>
          <div>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-service">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
