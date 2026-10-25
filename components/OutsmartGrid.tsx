'use client';
import { useState, useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

type Topic = { title: string; icon: string; desc: string; url?: string; videoId?: string };

const topics: Topic[] = [
  { title: 'GMO', icon: '/images/topic-gmo.png', desc: 'Protecting you and the world from GMOs — and Roundup. Read more about responsible technology.', url: 'https://www.responsibletechnology.org/' },
  { title: 'Vaccines', icon: '/images/topic-vaccines.png', desc: 'Mary Tocco has spent decades in natural health care advocating for informed consent on childhood shots.', url: 'https://marytocco.com/' },
  { title: 'Glyphosate', icon: '/images/topic-glyphosate.png', desc: 'We built an entire economy around healthcare and it\'s failing us. Dr. Bush on chemical farming and human health.', url: 'https://zachbushmd.com/' },
  { title: 'Circumcision', icon: '/images/topic-circumcision.png', desc: 'American Circumcision — a documentary exploring the debate around the most common surgery performed on American males.', videoId: 'JpQDkKF2pyU' },
  { title: 'Hospital Births', icon: '/images/topic-hospital-births.png', desc: '"The Business of Being Born" — a documentary asking whether the U.S. maternity care system is working.', url: 'https://www.thebusinessofbeingborn.com/' },
  { title: 'Fluoride', icon: '/images/topic-fluoride.png', desc: 'Remove fluoride from tap water. Watch the film and learn what\'s actually in the water supply.', url: 'https://fluoridealert.org/' },
  { title: 'Aspartame', icon: '/images/topic-aspartame.png', desc: 'The Dangers of Aspartame — a closer look at what\'s in diet drinks and processed foods.', url: 'https://www.youtube.com/watch?v=_HNhrFV5Gvo' },
  { title: 'Anti-5G', icon: '/images/topic-5g.png', desc: 'Observe the reported effects of 5G radiation. Christopher has covered this topic extensively.', url: 'https://www.saferemr.com/' },
  { title: 'The Need to Grow', icon: '/images/topic-grow.png', desc: 'A 2019 documentary trailer about soil health, food security, and sustainable farming.', url: 'https://www.youtube.com/watch?v=XEPSMBmE7OU' },
];

export function OutsmartGrid() {
  const [videoId, setVideoId] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    if (!videoId) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setVideoId(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [videoId]);

  return (
    <>
      <div className="outsmart-grid">
        {topics.map(t => t.videoId ? (
          <button
            key={t.title}
            onClick={() => setVideoId(t.videoId!)}
            className="outsmart-card"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', textAlign: 'left' }}
          >
            <div className="outsmart-icon-wrap">
              <img src={t.icon} alt={t.title} className="outsmart-icon" />
            </div>
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
            <span className="outsmart-cta">WATCH NOW <ArrowUpRight size={13} /></span>
          </button>
        ) : (
          <a key={t.title} href={t.url} target="_blank" rel="noopener noreferrer" className="outsmart-card">
            <div className="outsmart-icon-wrap">
              <img src={t.icon} alt={t.title} className="outsmart-icon" />
            </div>
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
            <span className="outsmart-cta">READ MORE <ArrowUpRight size={13} /></span>
          </a>
        ))}
      </div>

      {/* Modal */}
      {videoId && (
        <div
          onClick={() => setVideoId(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 999,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ position: 'relative', width: '100%', maxWidth: '800px' }}
          >
            <button
              onClick={() => setVideoId(null)}
              style={{
                position: 'absolute', top: '-44px', right: 0,
                background: 'transparent', border: 'none', color: '#fff',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
                fontSize: '12px', fontWeight: 700, letterSpacing: '1px',
              }}
            >
              <X size={18} /> CLOSE
            </button>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '6px', background: '#000' }}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
