import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { site } from '@/lib/content';
import { Newsreader, DM_Sans } from 'next/font/google';
const newsreader = Newsreader({subsets:['latin'], variable:'--font-editorial', display:'swap'});
const dmSans = DM_Sans({subsets:['latin'], variable:'--font-sans', display:'swap'});
import './globals.css';
export const metadata: Metadata = {metadataBase:new URL(site.url),title:{default:'Christopher Key | Biography, Work & Media',template:'%s | Christopher Key'},description:'Explore Christopher Key’s background in health and wellness, his ventures, public advocacy, interviews and historical archive.',alternates:{canonical:'/'},openGraph:{type:'website',siteName:site.name,title:'Christopher Key | Biography, Work & Media',description:'His background. His work. His story.',images:[{url:'/opengraph-image.png',width:1200,height:630}]},twitter:{card:'summary_large_image',images:['/opengraph-image.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){const person={"@context":"https://schema.org","@type":"Person",name:"Christopher Key",url:site.url,description:"Public biography and archive of Christopher Key."};return <html lang="en"><body className={`${newsreader.variable} ${dmSans.variable}`}><a className="skip-link" href="#content">Skip to main content</a><SiteHeader/><main id="content">{children}</main><SiteFooter/><Analytics/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(person).replace(/</g,'\\u003c')}}/></body></html>}
