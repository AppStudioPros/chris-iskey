import {pageMetadata} from '@/lib/seo';
import type {Metadata} from 'next';import Link from 'next/link';import {PageHero} from '@/components/PageHero';
export const metadata:Metadata=pageMetadata('Terms of Use','Terms for browsing Christopher Key’s personal website and historical archive.','/terms-of-service');
export default function Terms(){return <><PageHero kicker="SITE INFORMATION" title="Terms of use." description="Information about browsing this personal website and its archive."/>
<section className="section"><div className="container legal-copy"><p><strong>Effective date:</strong> October 21, 2026.</p>
<h2>Purpose of this site</h2><p>This site presents Christopher Key’s biography, previously published content, and ways to make contact. Historical materials are identified by their original dates, and older titles or opinions do not necessarily describe current projects, beliefs, services, or availability.</p>
<h2>Not professional advice</h2><p>Articles, recordings, and linked documents are provided for historical and informational context. They are not medical, legal, financial, or other individualized professional advice. Consult a suitably qualified professional about decisions in those areas.</p>
<h2>Outside links</h2><p>Third-party media hosts and resource sites operate independently. Content, access requirements, and availability may change without notice. External links do not mean the operator endorses every statement on those sites.</p>
<h2>Intellectual property</h2><p>Unless identified otherwise, the site's original writing and design are reserved by their respective rights holders. Recorded appearances and external publications remain the property of their original creators.</p>
<h2>Contact</h2><p>For questions about this site or to report a broken link, use the <Link className="text-link" href="/contact">contact page</Link>.</p>
</div></section></>}
