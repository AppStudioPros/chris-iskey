import type {Metadata} from 'next';
import {ArrowUpRight, Heart} from 'lucide-react';
import {pageMetadata} from '@/lib/seo';

export const metadata:Metadata=pageMetadata(
  'Shop — Christopher\'s Recommendations',
  'Products Christopher personally uses and recommends. Every purchase supports the Vaccine Police mission.',
  '/shop'
);

const supplements = [
  {
    name: 'IGF-1 / Deer Antler Velvet',
    brand: 'NutronicsLabs',
    desc: 'The spray that launched a movement. IGF-1 derived from deer antler velvet — used by athletes and health advocates worldwide. Christopher\'s flagship recommendation.',
    image: '/images/shop/igf1.png',
    url: 'https://www.getigf1.com/',
    tag: 'FEATURED',
  },
  {
    name: 'Cardio Miracle',
    brand: 'Cardio Miracle',
    desc: 'Nitric oxide supplement widely regarded as one of the most respected heart and cardiovascular support products on the market. You are shopping directly with Christopher Key.',
    image: '/images/shop/cardio-miracle.png',
    url: 'https://cardiomiracle.com/?ref=WVpPSrvlhhF92D',
  },
  {
    name: 'Mega SporeBiotic',
    brand: 'Microbiome Labs',
    desc: 'An all-spore, broad-spectrum probiotic clinically shown to recondition the gut. Christopher partnered with Microbiome Labs to bring this to the Vaccine Police community.',
    image: '/images/shop/microbiome-labs.png',
    url: 'https://microbiomelabs.com/en-US/vaccine-police-trust',
  },
  {
    name: 'Organic Supplements',
    brand: 'Global Healing',
    desc: 'A full line of USDA certified organic supplements and cleanses. Real food, real herbs, real nutrients — no synthetic fillers.',
    image: '/images/shop/global-healing.png',
    url: 'https://globalhealing.com/?oid=26&affid=3231152',
  },
  {
    name: 'Bitter Raw Apricot Seeds',
    brand: 'RNC Store',
    desc: 'Fresh bitter apricot seeds and apricot seed meal — natural, non-GMO, and straight from the source. A longtime staple in the natural health community.',
    image: '/images/shop/rnc-seeds-site.png',
    url: 'https://rncstore.com/?utm_source=simple-affiliate&utm_medium=referral&utm_campaign=Jennifer+%285274143522876%29&sacode=tdeanq',
  },
];

const devices = [
  {
    name: 'KLOUD + BUBBLE — NextGen Combo',
    brand: 'Centropix',
    desc: 'PEMF therapy mat and gold pendant — frequency-based regeneration technology. The NextGen Combo includes both the KLOUD mat and the BUBBLE wearable. High-end investment in your health.',
    image: '/images/shop/centropix.png',
    url: 'https://www.centropix.us/christiskey/en',
    tag: 'PREMIUM',
  },
  {
    name: 'Echo Hydrogen Water Flask',
    brand: 'Echo Water',
    desc: 'Molecular hydrogen water bottle delivering up to 16X therapeutic hydrogen levels. Echo is the most advanced hydrogen water technology on the market.',
    image: '/images/shop/echo-water-site.png',
    url: 'https://echowater.com/shop?afmc=10w',
  },
  {
    name: 'Water & Air Purification',
    brand: 'H2O Air Water Americas',
    desc: 'Whole-home water and air purification systems. Clean water, clean air — two of the fundamentals Christopher speaks about in his health advocacy.',
    image: '/images/shop/h2o-water.png',
    url: 'https://www.h2oairwateramericas.com/?affid=vaccine-police',
  },
  {
    name: 'pH Prescription Water',
    brand: 'PHP Prescription',
    desc: 'Alkaline prescription-grade water system. Real hydration with the right pH balance your body is designed to receive.',
    image: '/images/shop/php-water.png',
    url: 'https://www.phprescription.com/?ref=CKey',
  },
  {
    name: 'B3 Blood Flow Restriction Bands',
    brand: 'B3 Sciences',
    desc: 'Revolutionary workout bands that use blood flow restriction to produce the same hormonal and cardiovascular benefits as intense exercise — in far less time.',
    image: '/images/shop/b3-bands-site.png',
    url: 'https://keys2life.b3sciences.com/',
  },
];

export default function Shop(){
  return <>
    {/* Hero */}
    <section style={{background:'#14213d',padding:'90px 0 72px'}}>
      <div className="container">
        <div className="section-index light"><span>01</span><span>CHRISTOPHER'S RECOMMENDATIONS</span></div>
        <h1 style={{fontFamily:'Georgia,serif',fontSize:'clamp(48px,6vw,82px)',letterSpacing:'-3px',lineHeight:1,color:'#f0ede4',margin:'16px 0 22px'}}>
          Products he<br/><em style={{color:'#8b2c3e'}}>stands behind.</em>
        </h1>
        <p style={{color:'#9aaac8',fontSize:'17px',lineHeight:'1.85',maxWidth:'560px'}}>
          These are products Christopher personally uses and recommends. Every affiliate purchase helps fund the Vaccine Police mission.
        </p>
      </div>
    </section>

    {/* Supplements */}
    <section className="section" style={{background:'#f5f6f9'}}>
      <div className="container">
        <div className="shop-section-head">
          <div className="section-index"><span>01</span><span>SUPPLEMENTS & NUTRITION</span></div>
          <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(36px,4vw,54px)',letterSpacing:'-2px',margin:'12px 0 48px'}}>
            What goes<em style={{color:'#8b2c3e'}}> in.</em>
          </h2>
        </div>
        <div className="shop-grid">
          {supplements.map(p=>(
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="shop-card">
              {p.tag && <span className="shop-tag">{p.tag}</span>}
              <div className="shop-img-wrap">
                <img src={p.image} alt={p.name} className="shop-img"/>
              </div>
              <div className="shop-body">
                <p className="shop-brand">{p.brand}</p>
                <h3 className="shop-name">{p.name}</h3>
                <p className="shop-desc">{p.desc}</p>
                <span className="shop-cta">SHOP NOW <ArrowUpRight size={14}/></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Devices & Water */}
    <section className="section" style={{background:'#ffffff'}}>
      <div className="container">
        <div className="section-index"><span>02</span><span>DEVICES, WATER & TECH</span></div>
        <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(36px,4vw,54px)',letterSpacing:'-2px',margin:'12px 0 48px'}}>
          What surrounds<em style={{color:'#8b2c3e'}}> you.</em>
        </h2>
        <div className="shop-grid">
          {devices.map(p=>(
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="shop-card">
              {p.tag && <span className="shop-tag">{p.tag}</span>}
              <div className="shop-img-wrap">
                <img src={p.image} alt={p.name} className="shop-img"/>
              </div>
              <div className="shop-body">
                <p className="shop-brand">{p.brand}</p>
                <h3 className="shop-name">{p.name}</h3>
                <p className="shop-desc">{p.desc}</p>
                <span className="shop-cta">LEARN MORE <ArrowUpRight size={14}/></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Freedom Law School — wide featured card */}
    <section className="section" style={{background:'#f0f2f8'}}>
      <div className="container">
        <div className="section-index"><span>03</span><span>FREEDOM RESOURCES</span></div>
        <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(36px,4vw,54px)',letterSpacing:'-2px',margin:'12px 0 48px'}}>
          Know your<em style={{color:'#8b2c3e'}}> rights.</em>
        </h2>
        <a href="https://www.freedomlawschool.org/en-us/affiliate?code=vaccinepolice" target="_blank" rel="noopener noreferrer" className="shop-card-wide">
          <div className="shop-wide-img">
            <img src="/images/shop/freedom-law-site.png" alt="Freedom Law School" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          </div>
          <div className="shop-wide-body">
            <p className="shop-brand">Freedom Law School</p>
            <h3 style={{fontFamily:'Georgia,serif',fontSize:'clamp(28px,3vw,42px)',letterSpacing:'-1px',margin:'12px 0 16px',lineHeight:1.1}}>
              99% of Americans are not required to file and pay federal income taxes.
            </h3>
            <p className="shop-desc" style={{maxWidth:'520px'}}>
              Freedom Law School teaches you your constitutional rights and how to legally reduce or eliminate your federal income tax liability. Christopher has long supported their mission.
            </p>
            <span className="shop-cta" style={{marginTop:'24px'}}>VISIT FREEDOM LAW SCHOOL <ArrowUpRight size={14}/></span>
          </div>
        </a>
      </div>
    </section>

    {/* Pain & Energy Chips — Mission CTA */}
    <section style={{background:'#14213d',padding:'90px 0'}}>
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
            <a href="https://www.christiskey.life/donations-pain-energy" target="_blank" rel="noopener noreferrer"
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
