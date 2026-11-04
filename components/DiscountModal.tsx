'use client';
import { useState, useEffect } from 'react';
import { X, ArrowUpRight, Tag } from 'lucide-react';

export function DiscountModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (document.cookie.includes('ck_discount_dismissed=1')) return;
    // Show 25 seconds after page load — well after the first modal
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
      <div
        onClick={dismiss}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)',
          zIndex: 999, backdropFilter: 'blur(4px)',
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000, width: '90%', maxWidth: '460px',
        background: '#fff',
        borderRadius: '6px',
        overflow: 'hidden',
        boxShadow: '0 32px 100px rgba(0,0,0,0.5)',
      }}>
        {/* Top accent bar */}
        <div style={{ background: '#8b2c3e', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Tag size={16} color="#fff" />
          <span style={{ color: '#fff', fontSize: '11px', fontWeight: 700, letterSpacing: '2px' }}>EXCLUSIVE OFFER FOR CHRISTOPHER'S COMMUNITY</span>
        </div>

        <div style={{ padding: '36px 36px 32px', position: 'relative' }}>
          {/* Close */}
          <button
            onClick={dismiss}
            style={{
              position: 'absolute', top: '14px', right: '14px',
              background: 'rgba(0,0,0,0.06)', border: 'none', cursor: 'pointer',
              color: '#6b7280', padding: '5px', borderRadius: '50%',
              display: 'flex', alignItems: 'center',
            }}
            aria-label="Close"
          >
            <X size={15} />
          </button>

          <p style={{ fontSize: '52px', fontWeight: 900, color: '#8b2c3e', margin: '0 0 4px', lineHeight: 1 }}>25%</p>
          <p style={{ fontSize: '11px', letterSpacing: '2px', fontWeight: 700, color: '#8b2c3e', margin: '0 0 16px' }}>OFF YOUR NEW WEBSITE</p>

          <h2 style={{
            fontFamily: 'Georgia, serif', fontSize: '26px', color: '#14213d',
            letterSpacing: '-0.5px', lineHeight: 1.2, margin: '0 0 12px',
          }}>
            Get a professional website built for your business.
          </h2>
          <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.7, margin: '0 0 28px' }}>
            As part of Christopher Key's community, you get 25% off a new digital website design from Web Design Pros 365. Modern, fast, built to convert.
          </p>

          <a
            href="https://webdesignpros365.com?ref=christiskey"
            target="_blank" rel="noopener noreferrer"
            onClick={dismiss}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              padding: '14px 24px', background: '#8b2c3e', color: '#fff',
              borderRadius: '3px', textDecoration: 'none',
              fontWeight: 700, fontSize: '11px', letterSpacing: '1.5px',
              width: '100%', boxSizing: 'border-box',
            }}
          >
            CLAIM 25% OFF NOW <ArrowUpRight size={15} />
          </a>

          <p style={{ fontSize: '11px', color: '#9ca3af', textAlign: 'center', margin: '12px 0 0' }}>
            Mention Christopher Key when you reach out to redeem.
          </p>

          <button onClick={dismiss} style={{ display: 'block', background: 'none', border: 'none', color: '#9ca3af', fontSize: '11px', cursor: 'pointer', margin: '14px auto 0', padding: 0 }}>
            No thanks
          </button>
        </div>
      </div>
    </>
  );
}
