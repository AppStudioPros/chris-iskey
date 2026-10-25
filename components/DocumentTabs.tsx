'use client';
import { useState } from 'react';
import { FileText, BookOpen, ExternalLink, ArrowUpRight } from 'lucide-react';

type Doc = { title: string; label: string; url: string; external?: boolean };
type Tab = { id: string; label: string; docs: Doc[] };

const tabs: Tab[] = [
  {
    id: 'dossier',
    label: 'The Dossier',
    docs: [
      { title: 'David Martin Document', label: 'PDF Document', url: 'https://uploads-ssl.webflow.com/62f6c2ce87ee5b46474b4cf5/62f75221d95bf7724d4a6132_The-Criminal-Conspiracy-of-Coronavirus.pdf' },
      { title: "Doctor's Letter", label: 'PDF Document', url: 'https://uploads-ssl.webflow.com/62f6c2ce87ee5b46474b4cf5/62f75252fd7b9937e0360a3a_doctors-letter.pdf' },
      { title: 'Nuremberg Papers', label: 'PDF Document', url: 'https://uploads-ssl.webflow.com/62f6c2ce87ee5b46474b4cf5/62f752711f5ebf66a12ba42f_nuremberg.pdf' },
      { title: 'The Open VAERS Site', label: 'External resource', url: 'https://openvaers.com/covid-data', external: true },
    ],
  },
  {
    id: 'links',
    label: 'Important Links',
    docs: [
      { title: 'The Affidavit Alliance', label: 'External resource', url: 'https://affidavitalliance.com/stop-the-get-the-jab-or-get-fired-1', external: true },
      { title: 'Bonds for the Win', label: 'External resource', url: 'https://bondsforthewin.com/', external: true },
    ],
  },
  {
    id: 'helpful',
    label: 'Helpful Documents',
    docs: [
      { title: 'The Vaccine Waiver', label: 'PDF Document', url: 'https://uploads-ssl.webflow.com/62f6c2ce87ee5b46474b4cf5/62f7547b992cf445dccc612b_vaccine-waiver.pdf' },
      { title: "Phone Script for CEO's & Superintendents", label: 'PDF Document', url: 'https://uploads-ssl.webflow.com/62f6c2ce87ee5b46474b4cf5/62f7547d39fad206d88696f1_Scripts.pdf' },
      { title: 'Boss Threatening You?', label: 'PDF Document', url: 'https://cdn.prod.website-files.com/62f6c2ce87ee5b46474b4cf5/62fad18b4cb53e231d9d51bb_Letter-for-Boss-Correct-One.pdf' },
      { title: 'Shelly Whitelock Smith vs. HBOE', label: 'PDF Document', url: 'https://cdn.prod.website-files.com/62f6c2ce87ee5b46474b4cf5/62f7547b992cf445dccc612b_vaccine-waiver.pdf' },
    ],
  },
  {
    id: 'letters',
    label: 'Important Letters',
    docs: [
      { title: "Trump's Letter", label: 'PDF Document', url: 'https://uploads-ssl.webflow.com/62f6c2ce87ee5b46474b4cf5/62f754d71068fdc520759b6a_trump_letter.pdf' },
      { title: "A Doctor's Letter", label: 'PDF Document', url: 'https://uploads-ssl.webflow.com/62f6c2ce87ee5b46474b4cf5/62f75252fd7b9937e0360a3a_doctors-letter.pdf' },
    ],
  },
];

export function DocumentTabs() {
  const [active, setActive] = useState('dossier');
  const current = tabs.find(t => t.id === active)!;

  return (
    <div>
      {/* Tab pills */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            style={{
              padding: '9px 20px',
              borderRadius: '999px',
              border: active === tab.id ? '2px solid #8b2c3e' : '2px solid #dde1da',
              background: active === tab.id ? '#8b2c3e' : 'transparent',
              color: active === tab.id ? '#fff' : '#576070',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Document grid */}
      <div className="resource-grid">
        {current.docs.map((doc, i) => (
          <a
            key={doc.title}
            className="resource-card"
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="resource-icon">
              {doc.external ? <ExternalLink size={23} /> : i % 2 ? <BookOpen size={23} /> : <FileText size={23} />}
            </span>
            <span className="small-label">{doc.label}</span>
            <h3>{doc.title}</h3>
            <span className="resource-open">
              {doc.external ? <>VISIT SITE <ArrowUpRight size={15} /></> : <>VIEW DOCUMENT <ExternalLink size={15} /></>}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
