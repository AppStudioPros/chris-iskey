'use client';
import { useState, useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export function WelcomeModal() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  useEffect(() => {
    if (document.cookie.includes('ck_modal_dismissed=1')) return;
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setVisible(false);
    document.cookie = 'ck_modal_dismissed=1; max-age=' + 60 * 60 * 24 * 7 + '; path=/';
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={dismiss}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.72)',
          zIndex: 999, backdropFilter: 'blur(4px)',
        }}
      />

      {/* Modal — two columns */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        width: '92%', maxWidth: '860px',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        borderRadius: '6px',
        overflow: 'hidden',
        boxShadow: '0 32px 100px rgba(0,0,0,0.7)',
      }} className="welcome-modal-grid">

        {/* LEFT — Content */}
        <div style={{
          background: '#14213d',
          padding: '48px 40px 40px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          {/* Close button */}
          <button
            onClick={dismiss}
            style={{
              position: 'absolute', top: '16px', right: '16px',
              background: 'rgba(255,255,255,0.08)', border: 'none', cursor: 'pointer',
              color: 'rgba(255,255,255,0.5)', padding: '6px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '50%',
            }}
            aria-label="Close"
          >
            <X size={16} />
          </button>

          <p style={{ fontSize: '10px', letterSpacing: '2.5px', fontWeight: 700, color: '#8b2c3e', margin: '0 0 10px' }}>
            VACCINE POLICE
          </p>
          <h2 style={{
            fontFamily: 'Georgia, serif', fontSize: 'clamp(26px,3vw,34px)', color: '#f0ede4',
            letterSpacing: '-1px', lineHeight: 1.1, margin: '0 0 10px',
          }}>
            Stay in<em> the fight.</em>
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: '0 0 24px' }}>
            Get Christopher&apos;s latest updates, health insights, and advocacy work — straight to your inbox.
          </p>

          {/* Newsletter */}
          {status === 'done' ? (
            <p style={{ color: '#74c69d', fontSize: '14px', fontWeight: 600, margin: '0 0 24px' }}>✓ You&apos;re subscribed. Thank you.</p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              <input
                type="email" required value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                style={{
                  padding: '11px 14px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '3px', color: '#fff',
                  fontSize: '13px', fontFamily: 'inherit', outline: 'none',
                }}
              />
              <button
                type="submit" disabled={status === 'loading'}
                style={{
                  padding: '12px', background: '#8b2c3e', color: '#fff',
                  border: 'none', borderRadius: '3px', fontWeight: 700,
                  fontSize: '10px', letterSpacing: '1.5px', cursor: 'pointer',
                  opacity: status === 'loading' ? 0.7 : 1,
                }}
              >
                {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE TO THE NEWSLETTER'}
              </button>
              {status === 'error' && <p style={{ color: '#8b2c3e', fontSize: '12px', margin: 0 }}>Something went wrong. Try again.</p>}
            </form>
          )}

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '20px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a
              href="https://masterpeacebyhcs.com/?ref_code=christiskey"
              target="_blank" rel="noopener noreferrer" onClick={dismiss}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 14px', background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)', borderRadius: '3px',
                textDecoration: 'none', color: '#f0ede4', transition: 'background 0.15s',
              }}
            >
              <div>
                <p style={{ margin: 0, fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px', fontWeight: 700 }}>MASTERPEACE BY HCS</p>
                <p style={{ margin: '2px 0 0', fontSize: '13px', fontWeight: 600 }}>Purchase MasterPeace Now</p>
              </div>
              <ArrowUpRight size={15} color="rgba(255,255,255,0.4)" />
            </a>
            <a
              href="https://www.getigf1.com/"
              target="_blank" rel="noopener noreferrer" onClick={dismiss}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 14px', background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)', borderRadius: '3px',
                textDecoration: 'none', color: '#f0ede4', transition: 'background 0.15s',
              }}
            >
              <div>
                <p style={{ margin: 0, fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px', fontWeight: 700 }}>NUTRONICS LABS</p>
                <p style={{ margin: '2px 0 0', fontSize: '13px', fontWeight: 600 }}>Purchase IGF-1 Now</p>
              </div>
              <ArrowUpRight size={15} color="rgba(255,255,255,0.4)" />
            </a>
          </div>

          <button onClick={dismiss} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.25)', fontSize: '11px', cursor: 'pointer', marginTop: '20px', textAlign: 'left', padding: 0 }}>
            No thanks, close this
          </button>
        </div>

        {/* RIGHT — Graphic */}
        <div style={{ position: 'relative', minHeight: '500px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/modal-promo.png"
            alt="MasterPeace and IGF-1 products"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .welcome-modal-grid {
            grid-template-columns: 1fr !important;
            max-height: 90vh;
            overflow-y: auto;
          }
          .welcome-modal-grid > div:last-child {
            min-height: 220px !important;
          }
        }
      `}</style>
    </>
  );
}
