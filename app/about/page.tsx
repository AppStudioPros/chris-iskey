import {pageMetadata} from '@/lib/seo';
import type {Metadata} from 'next';import Link from 'next/link';import {ArrowUpRight} from 'lucide-react';import {PageHero} from '@/components/PageHero';import {site} from '@/lib/content';
export const metadata:Metadata=pageMetadata('About','Read Christopher Key\u2019s background in fitness, health and wellness businesses, and public advocacy.','/about');

const ventures=[
  {num:'01',name:'Steel City Fitness',role:'Fitness & wellness',desc:'Christopher owned Steel City Fitness, a health club focused on fitness and wellness.'},
  {num:'02',name:'SWATS',role:'Business involvement',desc:'Christopher was a co-owner of SWATS.'},
  {num:'03',name:'Health Management Systems',role:'Business founder',desc:'Christopher founded Health Management Systems, a company built around body-composition measurement technology.'},
  {num:'04',name:'Public advocacy',role:'Public appearances',desc:'Christopher has been active in public advocacy and media appearances on issues he cares deeply about.'},
];

export default function About(){return <><PageHero dark kicker="ABOUT CHRISTOPHER" title="Vaccine Police." description="A closer look at Christopher Key's background, the work he has been involved in, and the public conversations that followed."/><section className="section"><div className="container about-grid"><div className="about-picture"><img src='/images/chris-candid.png' alt="Christopher Key"/></div><div className="about-prose"><h2>Meet <em>Christopher.</em></h2><p>Christopher Key has a background in health, fitness, and wellness businesses, followed by years of public activism and media appearances.</p><p>He owned Steel City Fitness, co-owned SWATS, and founded Health Management Systems — a company built around body-composition measurement technology.</p><p>Christopher has been active in public advocacy and media, speaking out on the issues that matter most to him.</p><Link className="text-link" href="#background">SEE HIS BACKGROUND & WORK <ArrowUpRight size={18}/></Link></div></div></section>

<section id="background" className="section" style={{borderTop:'1px solid rgba(255,255,255,0.07)'}}>
  <div className="container">
    <div className="section-head">
      <div>
        <div className="section-index"><span>02</span><span>BACKGROUND & WORK</span></div>
        <h2>Background &amp; <em>Ventures.</em></h2>
      </div>
    </div>
    <div className="experience-grid">
      {ventures.map(v=>(
        <article key={v.num} className="experience-card">
          <span className="card-num">{v.num} / {v.role.toUpperCase()}</span>
          <div><h3>{v.name}</h3><p>{v.desc}</p></div>
        </article>
      ))}
    </div>

  </div>
</section>
</>}
