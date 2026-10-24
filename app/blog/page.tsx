'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { posts, dateLabel } from '@/lib/content';
import { useState } from 'react';

type Filter = 'All' | 'Videos' | 'Interviews' | 'Advocacy' | 'Archive';

const filters: Filter[] = ['All', 'Videos', 'Interviews', 'Advocacy', 'Archive'];

function filterPosts(active: Filter) {
  switch (active) {
    case 'Videos':     return posts.filter(p => p.originalType === 'video');
    case 'Interviews': return posts.filter(p => p.label === 'Interview');
    case 'Advocacy':   return posts.filter(p => p.label === 'Public advocacy');
    case 'Archive':    return posts.filter(p => p.label === 'Archive');
    default:           return posts;
  }
}

export default function Blog() {
  const [active, setActive] = useState<Filter>('All');
  const visible = filterPosts(active);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-kicker">BLOG & MEDIA</div>
          <h1>Blog &amp; Media.</h1>
          <p>Articles, interviews, and recorded appearances from Christopher Key.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '2rem 0' }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '999px',
                  border: active === f ? 'none' : '1.5px solid #6b7280',
                  background: active === f ? '#8b2c3e' : 'transparent',
                  color: active === f ? '#fff' : '#9ca3af',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'all 0.15s',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Card grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {visible.map(post => (
              <Link
                key={post.slug}
                href={`/blog-posts/${post.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#1a2640',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                className="blog-card"
              >
                {/* Thumbnail */}
                <div style={{ width: '100%', aspectRatio: '16/9', background: '#111d35', overflow: 'hidden', flexShrink: 0 }}>
                  {post.image
                    ? <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#8b2c3e', fontSize: '2rem', fontWeight: 800 }}>CK</span>
                      </div>
                  }
                </div>

                {/* Body */}
                <div style={{ padding: '1rem 1.1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                  <span style={{
                    display: 'inline-block',
                    background: '#8b2c3e',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    padding: '0.2rem 0.55rem',
                    alignSelf: 'flex-start',
                  }}>
                    {post.label}
                  </span>
                  <span style={{ color: '#9ca3af', fontSize: '0.78rem', marginTop: '0.1rem' }}>{dateLabel(post.date)}</span>
                  <h3 style={{ margin: 0, fontSize: '1rem', lineHeight: 1.35, color: '#f1f5f9', fontWeight: 700 }}>{post.title}</h3>
                  <div style={{ marginTop: 'auto', paddingTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#8b2c3e', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                    READ MORE <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {visible.length === 0 && (
            <p style={{ color: '#9ca3af', textAlign: 'center', marginTop: '3rem' }}>No entries found for this filter.</p>
          )}
        </div>
      </section>
    </>
  );
}
