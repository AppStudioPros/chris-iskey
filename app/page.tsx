'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, MoveDown, Play, BookOpenText, CalendarDays, Heart, ShoppingBag, Zap, Mail, CheckCircle } from 'lucide-react';
import { site,posts,dateLabel } from '@/lib/content';

import {ContactForm} from '@/components/ContactForm';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'done'|'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({email}),
      });
      if (!res.ok) throw new Error();
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'12px',padding:'24px 0'}}>
      <CheckCircle size={36} color="#8b2c3e"/>
      <p style={{fontFamily:'Georgia,serif',fontSize:'22px',color:'#14213d',margin:0}}>You&apos;re subscribed.</p>
      <p style={{color:'#6b7280',fontSize:'14px',margin:0}}>Thank you — expect updates from Christopher soon.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{display:'flex',gap:'10px',maxWidth:'480px',margin:'0 auto',flexWrap:'wrap',justifyContent:'center'}}>
      <input
        type="email" required value={email} onChange={e => setEmail(e.target.value)}
        placeholder="Your email address"
        style={{flex:'1',minWidth:'220px',padding:'13px 16px',border:'1.5px solid #d4d9e4',borderRadius:'3px',fontSize:'0.9rem',fontFamily:'inherit',outline:'none',color:'#14213d'}}
      />
      <button type="submit" disabled={status==='loading'} style={{padding:'13px 24px',background:'#8b2c3e',color:'#fff',border:'none',borderRadius:'3px',fontWeight:700,fontSize:'11px',letterSpacing:'1.5px',cursor:'pointer',opacity:status==='loading'?0.7:1,whiteSpace:'nowrap'}}>
        {status==='loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
      </button>
      {status==='error' && <p style={{width:'100%',color:'#8b2c3e',fontSize:'13px',textAlign:'center',margin:'4px 0 0'}}>Something went wrong. Please try again.</p>}
    </form>
  );
}
export default function Home(){return <>
<section className="hero"><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"/> THE PERSON BEHIND THE HEADLINES</div><h1>Christopher<br/><em>Key.</em></h1><p className="hero-lead">A life shaped by business, health and wellness, and speaking out about the issues that matter to him.</p><p className="hero-sub">Get to know Christopher, explore his work, and find the interviews and writing behind his public story.</p><div className="button-row"><Link className="button button-dark" href="/about">GET TO KNOW CHRISTOPHER <ArrowUpRight size={17}/></Link><Link className="button button-outline" href="/about">EXPLORE HIS WORK <ArrowUpRight size={17}/></Link></div></div><div className="hero-portrait"><div className="portrait-frame"><div className="portrait-fallback"><span>CK</span></div><img src={site.portrait} alt="Christopher Key"/></div></div></div></section>
<div className="chapter-band"><div className="container" style={{justifyContent:'center'}}><a href="https://www.brighteon.com/channels/vaccinepolice/home" target="_blank" rel="noopener noreferrer" className="band-social-link">WATCH ON BRIGHTEON</a><span className="band-divider"/><a href="https://rumble.com/user/VaccinePolice" target="_blank" rel="noopener noreferrer" className="band-social-link">WATCH ON RUMBLE</a><span className="band-divider"/><a href="https://t.me/vaccinepolice" target="_blank" rel="noopener noreferrer" className="band-social-link">JOIN ON TELEGRAM</a></div></div>

{/* ── FEATURED CTAs ── */}
<section style={{background:'#14213d',padding:'64px 0'}}>
  <div className="container">
    <p style={{textAlign:'center',fontSize:'10px',letterSpacing:'2.5px',fontWeight:700,color:'#9aaac8',marginBottom:'40px'}}>TAKE ACTION</p>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px'}} className="cta-action-grid">
      {/* Donate Now */}
      <Link href="/donations-pain-energy" style={{display:'flex',flexDirection:'column',gap:'16px',background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'4px',padding:'32px 28px',textDecoration:'none',transition:'background 0.2s'}} className="cta-action-card">
        <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'rgba(139,44,62,0.2)',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Heart size={18} color="#8b2c3e"/>
        </div>
        <div>
          <p style={{fontSize:'10px',letterSpacing:'2px',fontWeight:700,color:'#9aaac8',margin:'0 0 8px'}}>SUPPORT THE MISSION</p>
          <h3 style={{fontFamily:'Georgia,serif',fontSize:'24px',color:'#f0ede4',margin:'0 0 10px',letterSpacing:'-0.5px',lineHeight:1.2}}>Donate Now</h3>
          <p style={{fontSize:'13px',color:'rgba(255,255,255,0.5)',lineHeight:1.7,margin:0}}>Support the Vaccine Police mission and receive your free MasterpeAce Pain &amp; Energy Chips.</p>
        </div>
        <span style={{display:'inline-flex',alignItems:'center',gap:'6px',color:'#8b2c3e',fontSize:'11px',fontWeight:700,letterSpacing:'1.5px',marginTop:'auto'}}>DONATE &amp; CLAIM CHIPS <ArrowUpRight size={14}/></span>
      </Link>

      {/* Purchase MasterPeace */}
      <a href="https://masterpeacebyhcs.com/?ref_code=christiskey" target="_blank" rel="noopener noreferrer" style={{display:'flex',flexDirection:'column',gap:'16px',background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'4px',padding:'32px 28px',textDecoration:'none',transition:'background 0.2s'}} className="cta-action-card">
        <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'rgba(245,166,35,0.15)',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <ShoppingBag size={18} color="#f5a623"/>
        </div>
        <div>
          <p style={{fontSize:'10px',letterSpacing:'2px',fontWeight:700,color:'#9aaac8',margin:'0 0 8px'}}>FEATURED PRODUCT</p>
          <h3 style={{fontFamily:'Georgia,serif',fontSize:'24px',color:'#f0ede4',margin:'0 0 10px',letterSpacing:'-0.5px',lineHeight:1.2}}>Purchase MasterPeace Now</h3>
          <p style={{fontSize:'13px',color:'rgba(255,255,255,0.5)',lineHeight:1.7,margin:0}}>MasterPeace by HCS — Christopher&apos;s top recommendation for detox and cellular health.</p>
        </div>
        <span style={{display:'inline-flex',alignItems:'center',gap:'6px',color:'#f5a623',fontSize:'11px',fontWeight:700,letterSpacing:'1.5px',marginTop:'auto'}}>SHOP MASTERPEACE <ArrowUpRight size={14}/></span>
      </a>

      {/* Purchase IGF-1 */}
      <a href="https://www.getigf1.com/" target="_blank" rel="noopener noreferrer" style={{display:'flex',flexDirection:'column',gap:'16px',background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'4px',padding:'32px 28px',textDecoration:'none',transition:'background 0.2s'}} className="cta-action-card">
        <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'rgba(45,160,80,0.15)',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Zap size={18} color="#2da050"/>
        </div>
        <div>
          <p style={{fontSize:'10px',letterSpacing:'2px',fontWeight:700,color:'#9aaac8',margin:'0 0 8px'}}>CHRISTOPHER&apos;S FLAGSHIP</p>
          <h3 style={{fontFamily:'Georgia,serif',fontSize:'24px',color:'#f0ede4',margin:'0 0 10px',letterSpacing:'-0.5px',lineHeight:1.2}}>Purchase IGF-1 Now</h3>
          <p style={{fontSize:'13px',color:'rgba(255,255,255,0.5)',lineHeight:1.7,margin:0}}>The IGF-1 deer antler velvet spray that launched a movement. Shop directly at GetIGF1.com.</p>
        </div>
        <span style={{display:'inline-flex',alignItems:'center',gap:'6px',color:'#2da050',fontSize:'11px',fontWeight:700,letterSpacing:'1.5px',marginTop:'auto'}}>SHOP IGF-1 <ArrowUpRight size={14}/></span>
      </a>
    </div>
  </div>
</section>

{/* ── NEWSLETTER SIGN-UP ── */}
<section style={{background:'#f5f4f0',padding:'72px 0',borderTop:'1px solid #e8e4dc'}}>
  <div className="container" style={{maxWidth:'640px',textAlign:'center'}}>
    <div style={{width:'44px',height:'44px',borderRadius:'50%',background:'rgba(139,44,62,0.1)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px'}}>
      <Mail size={20} color="#8b2c3e"/>
    </div>
    <p style={{fontSize:'10px',letterSpacing:'2.5px',fontWeight:700,color:'#8b2c3e',marginBottom:'12px'}}>STAY CONNECTED</p>
    <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(28px,4vw,42px)',letterSpacing:'-1px',marginBottom:'16px',lineHeight:1.1}}>Subscribe to the Newsletter</h2>
    <p style={{color:'#6b7280',lineHeight:'1.8',marginBottom:'32px',fontSize:'0.95rem'}}>Get Christopher&apos;s latest updates, health insights, and advocacy work delivered directly to your inbox.</p>
    <NewsletterForm/>
  </div>
</section>
<section id="story" className="section story-section"><div className="container story-grid"><div><div className="section-index"><span>01</span><span>THE PERSON</span></div><h2>There's more<br/>to <em>the story.</em></h2></div><div className="story-body"><span className="gold-rule"/><p className="large-text">Christopher's path has taken him from the world of fitness and wellness businesses to a very public role in advocacy and media.</p><p>Christopher owned Steel City Fitness, co-owned SWATS, and founded Health Management Systems. His interviews and writing document his views on public policy and health issues.</p><p>This site brings those chapters together in one place, with room for the work and interests that come next.</p><Link href="/about" className="text-link">READ CHRISTOPHER'S BIOGRAPHY <ArrowUpRight size={18}/></Link></div></div></section>
<section className="section experience-section"><div className="container"><div className="section-head"><div><div className="section-index"><span>02</span><span>BACKGROUND & EXPERIENCE</span></div><h2>Work that shaped<br/><em>his path.</em></h2></div></div><div className="experience-grid"><article className="experience-card feature"><span className="card-num">01 / HEALTH & WELLNESS</span><div><h3>Steel City<br/>Fitness</h3><p>Christopher owned a health club focused on fitness and wellness.</p></div></article><article className="experience-card"><span className="card-num">02 / BUSINESS</span><div><h3>SWATS</h3><p>Christopher was a co-owner of SWATS.</p></div></article><article className="experience-card"><span className="card-num">03 / ENTREPRENEURSHIP</span><div><h3>Health Management Systems</h3><p>Christopher founded a company built around body-composition measurement technology.</p></div></article><Link href="/about" className="experience-card" style={{background:'#14213d',color:'#f0ede4',textDecoration:'none',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column',gap:'12px'}}><span style={{fontSize:'10px',letterSpacing:'2px',fontWeight:750,color:'#9aaac8'}}>LEARN MORE</span><h3 style={{color:'#f0ede4',margin:0,fontSize:'30px'}}>His full story.</h3><ArrowUpRight size={20} color="#9aaac8"/></Link></div></div></section>
<section className="media-spotlight"><div className="container media-layout"><div className="media-left"><div className="section-index light"><span>03</span><span>MEDIA & THE PUBLIC RECORD</span></div><h2>Watch.<br/>Listen.<br/><em>Explore.</em></h2><p>Interviews, recorded conversations and published material from Christopher's archive, organized in a way that's easier to discover.</p><Link href="/blog" className="button button-light">EXPLORE MEDIA <ArrowUpRight size={17}/></Link></div><div className="media-right"><Link href="/blog" aria-label="Explore media archive" className="media-art"><div className="media-orbit orbit-one"/><div className="media-orbit orbit-two"/><span className="media-art-small">CHRISTOPHER KEY / MEDIA ARCHIVE</span><div className="media-play"><Play fill="currentColor" size={26}/></div><span className="media-art-bottom">CONVERSATIONS THAT MADE THE RECORD.</span></Link></div></div></section>
<section className="section archive-section"><div className="container"><div className="section-head archive-head"><div><div className="section-index"><span>04</span><span>WRITING & APPEARANCES</span></div><h2>From the <em>blog.</em></h2></div><Link className="text-link" href="/blog">VIEW ALL ARTICLES <ArrowUpRight size={17}/></Link></div><div className="article-list">{[posts[1],posts[2],posts[6]].map((post,i)=><Link className="article-row" href={'/blog-posts/'+post.slug} key={post.slug}><div className="article-num">0{i+1}</div><div><span className="article-date">{dateLabel(post.date)} &nbsp; / &nbsp; {post.label}</span><h3>{post.title}</h3></div><ArrowUpRight className="article-arrow" size={26}/></Link>)}</div></div></section>
<section className="contact-section"><div className="container contact-grid"><div><div className="section-index light"><span>05</span><span>LET'S CONNECT</span></div><h2>Start a<br/><em>conversation.</em></h2><p>Have a question, a media inquiry, or something you'd like to share with Christopher? Get in touch using the form or request a time to connect.</p><div className="contact-choices"><Link href="/donate"><CalendarDays size={20}/> DONATE <ArrowUpRight size={17}/></Link><Link href="/contact"><BookOpenText size={20}/> ALL CONTACT OPTIONS <ArrowUpRight size={17}/></Link></div></div><div className="contact-paper"><div className="form-eyebrow">A DIRECT LINE</div><h3>Leave a message.</h3><p>Tell us why you're getting in touch.</p><ContactForm/></div></div></section>
</>}
