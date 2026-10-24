import {pageMetadata} from '@/lib/seo';
import type {Metadata} from 'next';import Link from 'next/link';import {ArrowUpRight} from 'lucide-react';import {PageHero} from '@/components/PageHero';import {site} from '@/lib/content';
export const metadata:Metadata=pageMetadata('About','Read Christopher Key's background in fitness, health and wellness businesses, and public advocacy.','/about');

const ventures=[
  {num:'01',name:'Steel City Fitness',role:'Fitness & wellness',desc:'Christopher\u2019s published biography describes ownership of Steel City Fitness, a health club specializing in health and wellness.'},
  {num:'02',name:'SWATS',role:'Business involvement',desc:'He describes himself as a former co-owner of SWATS. This is a historical biographical reference, not an endorsement of product claims.'},
  {num:'03',name:'Health Management Systems',role:'Business founder',desc:'Christopher says he started Health Management Systems, a company using a device for body-fat measurement.'},
  {num:'04',name:'Public advocacy',role:'Public appearances',desc:'His original website contains interviews, dated articles and accounts of public activity. These are preserved as historical records and personal viewpoints.'},
];

export default function About(){return <><PageHero kicker="01 / ABOUT CHRISTOPHER" title="The person behind the story." description="A closer look at Christopher Key's background, the work he has been involved in, and the public conversations that followed."/><section className="section"><div className="container about-grid"><div className="about-picture"><img src='/images/chris-candid.png' alt="Portrait taken from Christopher Key's original website"/><span>FROM THE ORIGINAL BIOGRAPHY</span></div><div className="about-prose"><h2>Meet <em>Christopher.</em></h2><p>Christopher Key's published biography describes a background in health, fitness and wellness businesses, followed by years of public activism and media appearances.</p><p>He says he owned Steel City Fitness, a health club, co-owned SWATS, and started Health Management Systems, a business involving body-fat measurement technology.</p><p>The original site also documents Christopher's involvement in advocacy on issues he has spoken about publicly. His views are his own and archived materials should be understood in the context of their original dates.</p><p className="editorial-note">This biography records Christopher's previously published professional background.</p><Link className="text-link" href="#background">SEE HIS BACKGROUND & WORK <ArrowUpRight size={18}/></Link></div></div></section>

<section id="background" className="section" style={{borderTop:'1px solid rgba(255,255,255,0.07)'}}>
  <div className="container">
    <div className="section-head">
      <div>
        <div className="section-index"><span>02</span><span>BACKGROUND & WORK</span></div>
        <h2>Background &amp; <em>Ventures.</em></h2>
      </div>
      <p>Historical roles and chapters drawn from Christopher&apos;s published biography. These are biographical references only.</p>
    </div>
    <div className="experience-grid">
      {ventures.map(v=>(
        <article key={v.num} className="experience-card">
          <span className="card-num">{v.num} / {v.role.toUpperCase()}</span>
          <div><h3>{v.name}</h3><p>{v.desc}</p></div>
        </article>
      ))}
    </div>
    <p className="subtle-note" style={{marginTop:'2rem'}}>Historical ventures drawn from Christopher&apos;s published biography.</p>
  </div>
</section>
</>}
