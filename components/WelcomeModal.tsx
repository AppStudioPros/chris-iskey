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
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)',
          zIndex: 999, backdropFilter: 'blur(3px)',
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000, width: '90%', maxWidth: '480px',
        background: '#14213d',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '4px',
        padding: '48px 40px 40px',
        boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
      }}>
        {/* Close button */}
        <button
          onClick={dismiss}
          style={{
            position: 'absolute', top: '16px', right: '16px',
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'rgba(255,255,255,0.4)', padding: '4px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <p style={{ fontSize: '10px', letterSpacing: '2.5px', fontWeight: 700, color: '#8b2c3e', margin: '0 0 12px' }}>
          VACCINE POLICE
        </p>
        <h2 style={{
          fontFamily: 'Georgia, serif', fontSize: '32px', color: '#f0ede4',
          letterSpacing: '-1px', lineHeight: 1.1, margin: '0 0 12px',
        }}>
          Stay in<em> the fight.</em>
        </h2>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: '0 0 28px' }}>
          Get Christopher&apos;s latest updates, health insights, and advocacy work — straight to your inbox.
        </p>

        {/* Newsletter form */}
        {status === 'done' ? (
          <p style={{ color: '#74c69d', fontSize: '14px', fontWeight: 600, margin: '0 0 28px' }}>
            ✓ You&apos;re subscribed. Thank you.
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
            <input
              type="email" required value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              style={{
                flex: 1, padding: '11px 14px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '3px', color: '#fff',
                fontSize: '13px', fontFamily: 'inherit', outline: 'none',
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                padding: '11px 18px', background: '#8b2c3e', color: '#fff',
                border: 'none', borderRadius: '3px', fontWeight: 700,
                fontSize: '10px', letterSpacing: '1.5px', cursor: 'pointer',
                whiteSpace: 'nowrap', opacity: status === 'loading' ? 0.7 : 1,
              }}
            >
              {status === 'loading' ? '...' : 'SUBSCRIBE'}
            </button>
          </form>
        )}

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '24px' }} />

        {/* Product CTAs */}
        <p style={{ fontSize: '10px', letterSpacing: '2px', fontWeight: 700, color: 'rgba(255,255,255,0.3)', margin: '0 0 14px' }}>
          CHRISTOPHER&apos;S PICKS
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a
            href="https://masterpeacebyhcs.com/?ref_code=christiskey"
            target="_blank" rel="noopener noreferrer"
            onClick={dismiss}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 16px', background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '3px',
              textDecoration: 'none', color: '#f0ede4',
            }}
          >
            <div>
              <p style={{ margin: 0, fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '1.5px', fontWeight: 700 }}>MASTERPEACE BY HCS</p>
              <p style={{ margin: '3px 0 0', fontSize: '14px', fontWeight: 600 }}>Purchase MasterPeace Now</p>
            </div>
            <ArrowUpRight size={16} color="rgba(255,255,255,0.4)" />
          </a>

          <a
            href="https://www.getigf1.com/"
            target="_blank" rel="noopener noreferrer"
            onClick={dismiss}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 16px', background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '3px',
              textDecoration: 'none', color: '#f0ede4',
            }}
          >
            <div>
              <p style={{ margin: 0, fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '1.5px', fontWeight: 700 }}>NUTRONICS LABS</p>
              <p style={{ margin: '3px 0 0', fontSize: '14px', fontWeight: 600 }}>Purchase IGF-1 Now</p>
            </div>
            <ArrowUpRight size={16} color="rgba(255,255,255,0.4)" />
          </a>
        </div>
      </div>
    </>
  );
}
