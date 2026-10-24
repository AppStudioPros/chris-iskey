import {pageMetadata} from '@/lib/seo';
import type {Metadata} from 'next';
export const metadata:Metadata=pageMetadata('Blog & Media Archive','Articles, interviews, and recorded appearances from Christopher Key\u2019s archive.','/blog');
export default function BlogLayout({children}:{children:React.ReactNode}){return <>{children}</>;}
