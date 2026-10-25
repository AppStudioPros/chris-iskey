import {pageMetadata} from '@/lib/seo';
import type {Metadata} from 'next';
import {ArrowUpRight} from 'lucide-react';
import {DocumentTabs} from '@/components/DocumentTabs';
import {PageHero} from '@/components/PageHero';
export const metadata:Metadata=pageMetadata('Resources','A library of documents, references, and topics Christopher has covered — from vaccine policy to food and environment.', '/resources');



const topics=[
  {title:'GMO',icon:'/images/topic-gmo.png',desc:'Protecting you and the world from GMOs — and Roundup. Read more about responsible technology.',url:'https://www.responsibletechnology.org/'},
  {title:'Vaccines',icon:'/images/topic-vaccines.png',desc:'Mary Tocco has spent decades in natural health care advocating for informed consent on childhood shots.',url:'https://marytocco.com/'},
  {title:'Glyphosate',icon:'/images/topic-glyphosate.png',desc:'We built an entire economy around healthcare and it\'s failing us. Dr. Bush on chemical farming and human health.',url:'https://zacbushmd.com/'},
  {title:'Circumcision',icon:'/images/topic-circumcision.png',desc:'American Circumcision — a documentary exploring the debate around the most common surgery performed on American males.',url:'https://www.amazon.com/dp/B07MQDMHRD'},
  {title:'Hospital Births',icon:'/images/topic-hospital-births.png',desc:'"The Business of Being Born" — a documentary asking whether the U.S. maternity care system is working.',url:'https://www.thebusinessofbeingborn.com/'},
  {title:'Fluoride',icon:'/images/topic-fluoride.png',desc:'Remove fluoride from tap water. Watch the film and learn what\'s actually in the water supply.',url:'https://fluoridealert.org/'},
  {title:'Aspartame',icon:'/images/topic-aspartame.png',desc:'The Dangers of Aspartame — a closer look at what\'s in diet drinks and processed foods.',url:'https://www.youtube.com/watch?v=_HNhrFV5Gvo'},
  {title:'Anti-5G',icon:'/images/topic-5g.png',desc:'Observe the reported effects of 5G radiation. Christopher has covered this topic extensively.',url:'https://www.saferemr.com/'},
  {title:'The Need to Grow',icon:'/images/topic-grow.png',desc:'A 2019 documentary trailer about soil health, food security, and sustainable farming.',url:'https://www.youtube.com/watch?v=XEPSMBmE7OU'},
];

export default function Resources(){return <>
  <PageHero kicker="RESOURCES" title="Outsmart the news." description="A library of topics, documents, and references Christopher has covered over the years. Do your own research — these are starting points, not conclusions."/>

  {/* Outsmart section */}
  <section className="section" style={{background:'#1d2722'}}>
    <div className="container">
      <div className="section-head" style={{marginBottom:'48px'}}>
        <div>
          <div className="section-index light"><span>01</span><span>TOPICS & RESEARCH</span></div>
          <h2 style={{color:'#f0ede4',fontFamily:'Georgia,serif',fontSize:'clamp(38px,4.5vw,62px)',letterSpacing:'-2px',lineHeight:1.1,marginTop:'12px'}}>
            Outsmart the<br/><em style={{color:'#c4a775'}}>news media.</em>
          </h2>
        </div>
        <p style={{color:'#9baa9d',lineHeight:1.8,maxWidth:'340px',fontSize:'15px'}}>
          Christopher has spent years digging into the topics the mainstream gets wrong. These are the resources that shaped his thinking.
        </p>
      </div>
      <div className="outsmart-grid">
        {topics.map(t=>(
          <a key={t.title} href={t.url} target="_blank" rel="noopener noreferrer" className="outsmart-card">
            <div className="outsmart-icon-wrap">
              <img src={t.icon} alt={t.title} className="outsmart-icon" />
            </div>
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
            <span className="outsmart-cta">READ MORE <ArrowUpRight size={13}/></span>
          </a>
        ))}
      </div>
    </div>
  </section>

  {/* Documents */}
  <section className="section">
    <div className="container">
      <div className="section-head" style={{marginBottom:'32px'}}>
        <div>
          <div className="section-index"><span>02</span><span>DOCUMENTS</span></div>
          <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(36px,4vw,54px)',letterSpacing:'-2px',marginTop:'12px'}}>The documents<em style={{color:'#a18756'}}> you need.</em></h2>
        </div>
      </div>
      <DocumentTabs />
    </div>
  </section>
</>}
