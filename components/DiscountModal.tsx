'use client';
import { useState, useEffect } from 'react';
import { X, ArrowUpRight, Zap, Eye, Globe } from 'lucide-react';

export function DiscountModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (document.cookie.includes('ck_discount_dismissed=1')) return;
    const t = setTimeout(() => setVisible(true), 25000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setVisible(false);
    document.cookie = 'ck_discount_dismissed=1; max-age=' + 60 * 60 * 24 * 7 + '; path=/';
  }

  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div onClick={dismiss} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 999, backdropFilter: 'blur(4px)' }} />

      {/* Modal */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000, width: '92%', maxWidth: '520px',
        background: '#0f172a',
        borderRadius: '8px', overflow: 'hidden',
        boxShadow: '0 32px 100px rgba(0,0,0,0.7)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>

        {/* Header bar */}
        <div style={{ background: '#8b2c3e', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px' }}>
            EXCLUSIVE OFFER FOR CHRISTOPHER'S COMMUNITY
          </span>
          <button onClick={dismiss} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', display: 'flex', padding: 0 }} aria-label="Close">
            <X size={15} />
          </button>
        </div>

        <div style={{ padding: '32px 32px 28px' }}>

          {/* Logo + badge row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/wdp365-logo.png" alt="Web Design Pros 365" style={{ height: '36px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
            <div style={{ background: 'rgba(139,44,62,0.2)', border: '1px solid rgba(139,44,62,0.4)', borderRadius: '20px', padding: '4px 12px' }}>
              <span style={{ color: '#f87171', fontSize: '11px', fontWeight: 700, letterSpacing: '1px' }}>25% OFF</span>
            </div>
          </div>

          {/* Headline */}
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(22px,4vw,28px)', color: '#f8fafc', letterSpacing: '-0.5px', lineHeight: 1.2, margin: '0 0 10px' }}>
            Your website should work<em style={{ color: '#f87171' }}> as hard as you do.</em>
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: '0 0 24px' }}>
            Web Design Pros 365 builds modern, conversion-focused websites — and engineers them to be found by both Google <em>and AI</em>. When ChatGPT, Perplexity, or Google AI recommend businesses in your space, we make sure yours shows up.
          </p>

          {/* Feature pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {[
              { icon: <Globe size={12} />, label: 'Modern Next.js builds' },
              { icon: <Eye size={12} />, label: 'AI search visibility' },
              { icon: <Zap size={12} />, label: 'Built to convert' },
            ].map(f => (
              <span key={f.label} style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px', padding: '5px 12px',
                color: 'rgba(255,255,255,0.65)', fontSize: '11px', fontWeight: 500,
              }}>
                {f.icon} {f.label}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '20px' }} />

          {/* Offer callout */}
          <div style={{ background: 'rgba(139,44,62,0.12)', border: '1px solid rgba(139,44,62,0.25)', borderRadius: '6px', padding: '14px 16px', marginBottom: '20px' }}>
            <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              <strong style={{ color: '#f87171' }}>Christopher Key's community gets 25% off</strong> any new website project. Mention Christopher when you reach out.
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://webdesignpros365.com?ref=christiskey"
            target="_blank" rel="noopener noreferrer" onClick={dismiss}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              padding: '14px 24px', background: '#8b2c3e', color: '#fff',
              borderRadius: '4px', textDecoration: 'none',
              fontWeight: 700, fontSize: '11px', letterSpacing: '1.5px',
              width: '100%', boxSizing: 'border-box',
            }}
          >
            GET STARTED — CLAIM 25% OFF <ArrowUpRight size={14} />
          </a>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px' }}>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>webdesignpros365.com</span>
            <button onClick={dismiss} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', fontSize: '11px', cursor: 'pointer', padding: 0 }}>
              No thanks
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
