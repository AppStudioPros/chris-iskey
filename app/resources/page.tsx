import {pageMetadata} from '@/lib/seo';
import type {Metadata} from 'next';
import {ArrowUpRight} from 'lucide-react';
import {OutsmartGrid} from '@/components/OutsmartGrid';
import {DocumentTabs} from '@/components/DocumentTabs';
import {PageHero} from '@/components/PageHero';
export const metadata:Metadata=pageMetadata('Resources','A library of documents, references, and topics Christopher has covered — from vaccine policy to food and environment.', '/resources');





export default function Resources(){return <>
  <PageHero kicker="RESOURCES" title="Know what they don't want you to know." description="Documents, research links, and reference materials — everything Christopher has gathered to help you think for yourself."/>

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
      <OutsmartGrid />
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
