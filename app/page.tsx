import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Iskey — Coming Soon',
  description: 'Something new is on the way. Stay tuned.',
}

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
      color: '#f5f5f5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <p style={{
        fontSize: '0.75rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#888',
        marginBottom: '1.5rem',
      }}>
        christiskey.life
      </p>

      <h1 style={{
        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        marginBottom: '1.25rem',
        color: '#f5f5f5',
      }}>
        Something is coming.
      </h1>

      <p style={{
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        color: '#888',
        maxWidth: '420px',
        lineHeight: 1.7,
        marginBottom: '2.5rem',
      }}>
        We&apos;re working on something new. Check back soon.
      </p>

      <div style={{
        width: '40px',
        height: '2px',
        backgroundColor: '#f5f5f5',
        opacity: 0.3,
      }} />
    </main>
  )
}
