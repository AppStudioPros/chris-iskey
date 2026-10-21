import type {Metadata} from 'next';
import {Heart, ArrowUpRight, Zap} from 'lucide-react';
import {pageMetadata} from '@/lib/seo';

export const metadata:Metadata=pageMetadata(
  'Donate — Free Pain & Energy Chips',
  'Support the Vaccine Police mission and receive MasterpeAce Pain & Energy Chips with your donation.',
  '/donations-pain-energy'
);

const tiers = [
  {
    label: 'Pain & Energy Chips',
    qty: '20 Total (10 Pain + 10 Energy)',
    recurring: '$40',
    onetime: '$55',
    featured: true,
    icon: <Zap size={22}/>,
    desc: 'The complete set — both pain and energy chips. Best value for full-spectrum support.',
  },
  {
    label: 'Pain Chips',
    qty: '10 Total',
    recurring: '$20',
    onetime: '$30',
    featured: false,
    icon: <Heart size={22}/>,
    desc: 'MasterpeAce Pain Chips only — frequency-based wearable technology for pain support.',
  },
  {
    label: 'Energy Chips',
    qty: '10 Total',
    recurring: '$20',
    onetime: '$30',
    featured: false,
    icon: <Zap size={22}/>,
    desc: 'MasterpeAce Energy Chips only — frequency-based wearable technology for energy and vitality.',
  },
];

export default function Donate() {
  return <>
    {/* Hero */}
    <section style={{background:'#14213d', padding:'90px 0 72px'}}>
      <div className="container">
        <div className="section-index light"><span>VP</span><span>VACCINE POLICE DONATIONS</span></div>
        <h1 style={{fontFamily:'Georgia,serif',fontSize:'clamp(48px,6vw,80px)',letterSpacing:'-3px',lineHeight:1,color:'#f0ede4',margin:'16px 0 22px'}}>
          Support the<br/><em style={{color:'#8b2c3e'}}>mission.</em>
        </h1>
        <p style={{color:'#9aaac8',fontSize:'17px',lineHeight:'1.85',maxWidth:'520px'}}>
          Every donation keeps the Vaccine Police fight going. In return, Christopher sends you MasterpeAce Pain &amp; Energy Chips — free of charge.
        </p>
      </div>
    </section>

    {/* Tiers */}
    <section className="section" style={{background:'#f5f6f9'}}>
      <div className="container">
        <div style={{textAlign:'center',marginBottom:'52px'}}>
          <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(32px,4vw,52px)',letterSpacing:'-2px',margin:'0 0 16px'}}>
            Choose your <em style={{color:'#8b2c3e'}}>tier.</em>
          </h2>
          <p style={{color:'#576070',fontSize:'16px',maxWidth:'480px',margin:'0 auto',lineHeight:'1.8'}}>
            Select recurring for ongoing support, or one-time to make a single contribution. Chips ship after your donation is received.
          </p>
        </div>

        <div className="donate-grid">
          {tiers.map(t => (
            <div key={t.label} className={`donate-card${t.featured ? ' donate-featured' : ''}`}>
              {t.featured && <div className="donate-badge">MOST POPULAR</div>}
              <div className="donate-icon">{t.icon}</div>
              <h3 className="donate-name">{t.label}</h3>
              <p className="donate-qty">{t.qty}</p>
              <p className="donate-desc">{t.desc}</p>
              <div className="donate-options">
                <a href="mailto:vaccinepolice@protonmail.com?subject=Donation%20-%20Recurring&body=I%20would%20like%20to%20set%20up%20a%20recurring%20donation%20for%20the%20Vaccine%20Police%20mission."
                  className={`donate-btn${t.featured ? ' donate-btn-featured' : ''}`}>
                  {t.recurring}/mo Recurring
                </a>
                <a href="mailto:vaccinepolice@protonmail.com?subject=Donation%20-%20One%20Time&body=I%20would%20like%20to%20make%20a%20one-time%20donation%20for%20the%20Vaccine%20Police%20mission."
                  className="donate-btn donate-btn-outline">
                  {t.onetime} One-time
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note about payment */}
        <div style={{maxWidth:'600px',margin:'40px auto 0',textAlign:'center'}}>
          <p style={{fontSize:'13px',color:'#7a8aaa',lineHeight:'1.8'}}>
            To complete your donation, reach out directly at{' '}
            <a href="mailto:vaccinepolice@protonmail.com" style={{color:'#8b2c3e',fontWeight:700}}>vaccinepolice@protonmail.com</a>
            {' '}or call <a href="tel:5613298434" style={{color:'#8b2c3e',fontWeight:700}}>561-329-8434</a>.
            Chips are shipped after donation is confirmed. Payment setup via Stripe/GiveSendGo coming soon.
          </p>
        </div>
      </div>
    </section>

    {/* What are the chips */}
    <section className="section" style={{background:'#fff'}}>
      <div className="container" style={{maxWidth:'800px'}}>
        <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(30px,3.5vw,48px)',letterSpacing:'-1.5px',marginBottom:'24px'}}>
          What are MasterpeAce <em style={{color:'#8b2c3e'}}>chips?</em>
        </h2>
        <p style={{color:'#576070',fontSize:'16px',lineHeight:'1.9',marginBottom:'16px'}}>
          MasterpeAce Pain &amp; Energy Chips are frequency-based wearable patches developed to support the body's natural recovery and energy systems. They are worn directly on the skin and work through bio-resonance technology.
        </p>
        <p style={{color:'#576070',fontSize:'16px',lineHeight:'1.9',marginBottom:'32px'}}>
          Christopher has been a long-time advocate of frequency-based health tools and personally uses these chips. They are given free with every donation as a thank-you for your support of the Vaccine Police mission.
        </p>
        <a href="/shop" style={{display:'inline-flex',alignItems:'center',gap:'12px',fontWeight:800,fontSize:'11px',letterSpacing:'1.5px',color:'#8b2c3e',borderBottom:'1px solid #8b2c3e',paddingBottom:'8px'}}>
          SEE ALL CHRISTOPHER'S RECOMMENDATIONS <ArrowUpRight size={14}/>
        </a>
      </div>
    </section>
  </>;
}
