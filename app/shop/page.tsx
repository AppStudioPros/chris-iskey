import type {Metadata} from 'next';
import {Heart, ArrowUpRight} from 'lucide-react';
import {pageMetadata} from '@/lib/seo';
import {PageHero} from '@/components/PageHero';
import {ShopTabs} from '@/components/ShopTabs';

export const metadata:Metadata=pageMetadata(
  'Shop — Christopher\'s Recommendations',
  'Products Christopher personally uses and recommends. Every purchase supports the Vaccine Police mission.',
  '/shop'
);

export default function Shop(){
  return <>
    {/* Alert banner */}
    <div style={{background:'#1a1a1a',borderBottom:'1px solid #333',padding:'10px 0',textAlign:'center'}}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'8px'}}>
        <span style={{color:'#f5a623',fontSize:'15px'}}>⚠</span>
        <p style={{margin:0,fontSize:'13px',color:'#ccc',letterSpacing:'0.02em'}}>We don&apos;t ship any products to the state of Alabama.</p>
      </div>
    </div>

    {/* Hero */}
    <PageHero
      dark
      kicker="CHRISTOPHER'S RECOMMENDATIONS"
      title="Products he stands behind."
      description="Products Christopher personally uses and recommends. Every affiliate purchase helps fund the Vaccine Police mission."
    />

    {/* Tabbed shop sections */}
    <ShopTabs/>

    {/* Pain & Energy Chips — Mission CTA */}
    <section className="chips-section" style={{background:'#14213d',padding:'90px 0'}}>
      <div className="container">
        <div className="chips-layout">
          <div>
            <div className="section-index light"><span>04</span><span>SUPPORT THE MISSION</span></div>
            <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(36px,4.5vw,62px)',letterSpacing:'-2px',lineHeight:1.05,color:'#f0ede4',margin:'16px 0 20px'}}>
              Free Pain &amp;<br/><em style={{color:'#8b2c3e'}}>Energy Chips.</em>
            </h2>
            <p style={{color:'#9aaac8',lineHeight:'1.85',maxWidth:'440px',marginBottom:'32px'}}>
              Donate to the Vaccine Police and receive MasterpeAce Pain &amp; Energy Chips — on the house. Every dollar keeps the fight going.
            </p>
            <a href="/donations-pain-energy"
              style={{display:'inline-flex',alignItems:'center',gap:'14px',background:'#8b2c3e',color:'#fff',padding:'16px 24px',fontWeight:800,fontSize:'11px',letterSpacing:'1.5px'}}>
              <Heart size={16}/> DONATE &amp; CLAIM YOUR CHIPS <ArrowUpRight size={15}/>
            </a>
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.12)',padding:'40px',textAlign:'center',maxWidth:'300px'}}>
              <p style={{color:'#8b2c3e',fontSize:'10px',letterSpacing:'2.5px',fontWeight:800,marginBottom:'16px'}}>MASTERPEACE</p>
              <p style={{fontFamily:'Georgia,serif',fontSize:'32px',color:'#f0ede4',letterSpacing:'-1px',lineHeight:1.1,margin:'0 0 16px'}}>Pain &amp; Energy<br/>Chips</p>
              <p style={{color:'#7a8aaa',fontSize:'13px',lineHeight:'1.7'}}>Frequency-based wearable chips. Received free with any donation to the Vaccine Police mission.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}
