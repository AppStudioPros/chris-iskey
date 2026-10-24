import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Donate — Christopher Key',
  description: 'Support Christopher Key\'s mission to hold the nation accountable, defend freedom, and protect children.',
  alternates: { canonical: '/donate' },
};

export default function Donate() {
  return (
    <>
      <PageHero
        kicker="SUPPORT THE MISSION"
        title="Please consider donating."
        description="Help hold the nation accountable, defend freedom, and protect children around the world."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">

          {/* Two-column: video + donate box */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start', marginBottom: '48px' }}>

            {/* Left: Video + mission text */}
            <div>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '6px', background: '#111d35', marginBottom: '32px' }}>
                <iframe
                  src="https://rumble.com/embed/v1w9rpk/?pub=4"
                  title="Christopher Key — Stew Peters Show"
                  allowFullScreen
                  allow="autoplay"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                />
              </div>

              <h2 style={{ fontFamily: 'var(--font-editorial, Georgia, serif)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.04em', lineHeight: 1.15, marginBottom: '16px' }}>
                Why Christopher is asking<br /> for <em>your support.</em>
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#576070', marginBottom: '16px' }}>
                My name is Christopher Key and I recently got terminated from my job for standing up for all the people around the world. The purpose is to raise money to hold the nation accountable, defend the right of freedom, and protect the children around the world from mask mandates, forced vaccines, and child trafficking.
              </p>

              <div style={{ borderLeft: '3px solid #8b2c3e', paddingLeft: '20px', marginTop: '24px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8b2c3e', display: 'block', marginBottom: '10px' }}>KEYS 2 LIFE MINISTRY MISSION</span>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#576070' }}>
                  Our Mission is to learn and share our knowledge on how to take back our God given Temple so we can do God's work. We are all in this together — since evil forces are coming for all of us corrupting our environment and bodies, our temples — we have to come together and work together loving ourselves, loving all others as we love ourselves, and taking in real air, real water, real food, real supplements, real herbs and real frequencies. In a frequency fellowship we must all align in resonance to do God's will, to help God's people and, most importantly, to help God's children.
                </p>
              </div>
            </div>

            {/* Right: Donorbox */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <h3 style={{ fontFamily: 'var(--font-editorial, Georgia, serif)', fontSize: '1.5rem', letterSpacing: '-0.03em', marginBottom: '8px' }}>Make a donation</h3>
              <p style={{ fontSize: '0.9rem', color: '#576070', marginBottom: '20px' }}>Every contribution helps Christopher continue the fight.</p>
              <iframe
                src="https://donorbox.org/embed/support-christopher-key"
                title="Donate to Christopher Key"
                allowFullScreen
                seamless
                name="donorbox"
                scrolling="no"
                style={{ width: '100%', maxWidth: '500px', minWidth: '250px', height: '900px', border: 0, display: 'block' }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 760px) {
          .donate-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
