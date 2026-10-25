import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import MadeByWDP365 from '@/components/MadeByWDP365';

const socials = [
  {
    label: 'Brighteon',
    url: 'https://www.brighteon.com/channels/vaccinepolice/home',
    icon: (
      /* Brighteon brand icon — red rounded square with their lightning-B mark */
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Brighteon">
        <rect width="32" height="32" rx="7" fill="#E0203C"/>
        <path d="M8 7h7.5c2.2 0 3.8.8 4.5 2.2.6 1.1.5 2.5-.2 3.5L8 24V7z" fill="white"/>
        <path d="M13.5 15.5H18c1.8 0 3.2.8 3.8 2.1.6 1.2.4 2.6-.4 3.5-.9 1-2.2 1.4-4 1.4h-3.9v-7z" fill="white"/>
      </svg>
    ),
  },
  {
    label: 'Rumble',
    url: 'https://rumble.com/user/VaccinePolice',
    icon: (
      /* Rumble official icon — SimpleIcons path, brand green */
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#85C742" xmlns="http://www.w3.org/2000/svg" aria-label="Rumble">
        <path d="M14.4528 13.5458c.8064-.6542.9297-1.8381.2756-2.6445a1.8802 1.8802 0 0 0-.2756-.2756 21.2127 21.2127 0 0 0-4.3121-2.776c-1.066-.51-2.256.2-2.4261 1.414a23.5226 23.5226 0 0 0-.14 5.5021c.116 1.23 1.292 1.964 2.372 1.492a19.6285 19.6285 0 0 0 4.5062-2.704v-.008zm6.9322-5.4002c2.0335 2.228 2.0396 5.637.014 7.8723A26.1487 26.1487 0 0 1 8.2946 23.846c-2.6848.6713-5.4168-.914-6.1662-3.5781-1.524-5.2002-1.3-11.0803.17-16.3045.772-2.744 3.3521-4.4661 6.0102-3.832 4.9242 1.174 9.5443 4.196 13.0764 8.0121v.002z"/>
      </svg>
    ),
  },
  {
    label: 'Telegram',
    url: 'https://t.me/vaccinepolice',
    icon: (
      /* Telegram official icon — SimpleIcons path, brand blue */
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#2AABEE" xmlns="http://www.w3.org/2000/svg" aria-label="Telegram">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
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
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="footer-social-icon">
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
