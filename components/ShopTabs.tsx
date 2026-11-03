'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const supplements = [
  {
    name: 'IGF-1 / Deer Antler Velvet',
    brand: 'NutronicsLabs',
    desc: "The spray that launched a movement. IGF-1 derived from deer antler velvet — used by athletes and health advocates worldwide. Christopher's flagship recommendation.",
    image: '/images/shop/igf1.png',
    url: 'https://www.getigf1.com/',
    tag: 'FEATURED',
    cta: 'SHOP NOW',
  },
  {
    name: 'Cardio Miracle',
    brand: 'Cardio Miracle',
    desc: 'Nitric oxide supplement widely regarded as one of the most respected heart and cardiovascular support products on the market. You are shopping directly with Christopher Key.',
    image: '/images/shop/cardio-miracle.png',
    url: 'https://cardiomiracle.com/?ref=WVpPSrvlhhF92D',
    cta: 'SHOP NOW',
  },
  {
    name: 'Mega SporeBiotic',
    brand: 'Microbiome Labs',
    desc: 'An all-spore, broad-spectrum probiotic clinically shown to recondition the gut. Christopher partnered with Microbiome Labs to bring this to the Vaccine Police community.',
    image: '/images/shop/rnc-seeds-site.png',
    url: 'https://microbiomelabs.com/en-US/vaccine-police-trust',
    cta: 'SHOP NOW',
  },
  {
    name: 'Organic Supplements',
    brand: 'Global Healing',
    desc: 'A full line of USDA certified organic supplements and cleanses. Real food, real herbs, real nutrients — no synthetic fillers.',
    image: '/images/shop/global-healing.png',
    url: 'https://globalhealing.com/?oid=26&affid=3231152',
    cta: 'SHOP NOW',
  },
  {
    name: 'Bitter Raw Apricot Seeds',
    brand: 'RNC Store',
    desc: 'Fresh bitter apricot seeds and apricot seed meal — natural, non-GMO, and straight from the source. A longtime staple in the natural health community.',
    image: '/images/shop/b3-bands-site.png',
    url: 'https://rncstore.com/?utm_source=simple-affiliate&utm_medium=referral&utm_campaign=Jennifer+%285274143522876%29&sacode=tdeanq',
    cta: 'SHOP NOW',
  },
  {
    name: "Nesa's Hemp",
    brand: "Nesa's Hemp",
    desc: "The world's first living CBDa hemp extract. Never dried, never heated — cold pressed to preserve CBDa and the full spectrum of compounds naturally found in the plant. USDA certified organic.",
    image: '/images/shop/nesas-hemp.png',
    url: 'https://www.nesashemp.com/#key',
    cta: 'SHOP NOW',
  },
];

const devices = [
  {
    name: 'KLOUD + BUBBLE — NextGen Combo',
    brand: 'Centropix',
    desc: 'PEMF therapy mat and gold pendant — frequency-based regeneration technology. The NextGen Combo includes both the KLOUD mat and the BUBBLE wearable. High-end investment in your health.',
    image: '/images/shop/microbiome-labs.png',
    url: 'https://www.centropix.us/christiskey/en',
    tag: 'PREMIUM',
    cta: 'LEARN MORE',
  },
  {
    name: 'Echo Hydrogen Water Flask',
    brand: 'Echo Water',
    desc: 'Molecular hydrogen water bottle delivering up to 16X therapeutic hydrogen levels. Echo is the most advanced hydrogen water technology on the market.',
    image: '/images/shop/echo-water-site.png',
    url: 'https://echowater.com/shop?afmc=10w',
    cta: 'LEARN MORE',
  },
  {
    name: 'Water & Air Purification',
    brand: 'H2O Air Water Americas',
    desc: 'Whole-home water and air purification systems. Clean water, clean air — two of the fundamentals Christopher speaks about in his health advocacy.',
    image: '/images/shop/h2o-air-water.png',
    url: 'https://www.h2oairwateramericas.com/?affid=vaccine-police',
    cta: 'LEARN MORE',
  },
  {
    name: 'pH Prescription Water',
    brand: 'PHP Prescription',
    desc: 'Alkaline prescription-grade water system. Real hydration with the right pH balance your body is designed to receive.',
    image: '/images/shop/php-water.png',
    url: 'https://www.phprescription.com/?ref=CKey',
    cta: 'LEARN MORE',
  },
  {
    name: 'B3 Blood Flow Restriction Bands',
    brand: 'B3 Sciences',
    desc: 'Revolutionary workout bands that use blood flow restriction to produce the same hormonal and cardiovascular benefits as intense exercise — in far less time.',
    image: '/images/shop/b3-bands.png',
    url: 'https://keys2life.b3sciences.com/',
    cta: 'LEARN MORE',
  },
];

const TABS = ['SUPPLEMENTS & NUTRITION', 'DEVICES, WATER & TECH', 'FREEDOM RESOURCES'] as const;
type Tab = typeof TABS[number];

function ProductGrid({ products }: { products: typeof supplements }) {
  return (
    <div className="shop-grid">
      {products.map(p => (
        <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="shop-card">
          {p.tag && <span className="shop-tag">{p.tag}</span>}
          <div className="shop-img-wrap">
            <img src={p.image} alt={p.name} className="shop-img" />
          </div>
          <div className="shop-body">
            <p className="shop-brand">{p.brand}</p>
            <h3 className="shop-name">{p.name}</h3>
            <p className="shop-desc">{p.desc}</p>
            <span className="shop-cta">{p.cta} <ArrowUpRight size={14} /></span>
          </div>
        </a>
      ))}
    </div>
  );
}

export function ShopTabs() {
  const [active, setActive] = useState<Tab>('SUPPLEMENTS & NUTRITION');

  return (
    <div>
      {/* Tab Bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e4e7f0', position: 'sticky', top: '0', zIndex: 10 }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ display: 'flex', overflowX: 'auto' }} className="shop-tab-bar">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                style={{
                  padding: '18px 28px',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  whiteSpace: 'nowrap',
                  background: 'none',
                  border: 'none',
                  borderBottom: active === tab ? '2px solid #8b2c3e' : '2px solid transparent',
                  color: active === tab ? '#8b2c3e' : '#6b7280',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  fontFamily: 'inherit',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {active === 'SUPPLEMENTS & NUTRITION' && (
        <section className="section" style={{ background: '#f5f6f9' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px,4vw,50px)', letterSpacing: '-2px', margin: '0 0 48px' }}>
              What goes<em style={{ color: '#8b2c3e' }}> in.</em>
            </h2>
            <ProductGrid products={supplements} />
          </div>
        </section>
      )}

      {active === 'DEVICES, WATER & TECH' && (
        <section className="section" style={{ background: '#ffffff' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px,4vw,50px)', letterSpacing: '-2px', margin: '0 0 48px' }}>
              What surrounds<em style={{ color: '#8b2c3e' }}> you.</em>
            </h2>
            <ProductGrid products={devices} />
          </div>
        </section>
      )}

      {active === 'FREEDOM RESOURCES' && (
        <section className="section" style={{ background: '#f0f2f8' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(32px,4vw,50px)', letterSpacing: '-2px', margin: '0 0 48px' }}>
              Know your<em style={{ color: '#8b2c3e' }}> rights.</em>
            </h2>
            <a href="https://www.freedomlawschool.org/en-us/affiliate?code=vaccinepolice" target="_blank" rel="noopener noreferrer" className="shop-card-wide">
              <div className="shop-wide-img">
                <img src="/images/shop/freedom-law.jpg" alt="Freedom Law School" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="shop-wide-body">
                <p className="shop-brand">Freedom Law School</p>
                <h3 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-1px', margin: '12px 0 16px', lineHeight: 1.1 }}>
                  99% of Americans are not required to file and pay federal income taxes.
                </h3>
                <p className="shop-desc" style={{ maxWidth: '520px' }}>
                  Freedom Law School teaches you your constitutional rights and how to legally reduce or eliminate your federal income tax liability. Christopher has long supported their mission.
                </p>
                <span className="shop-cta" style={{ marginTop: '24px' }}>VISIT FREEDOM LAW SCHOOL <ArrowUpRight size={14} /></span>
              </div>
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
