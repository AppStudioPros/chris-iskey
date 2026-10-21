import Link from 'next/link';import {ArrowLeft} from 'lucide-react';
export default function NotFound(){return <div className="container not-found"><h1>Page not found.</h1><p>That page may have moved. Try the homepage or the articles archive.</p><Link className="button button-dark" href="/"><ArrowLeft size={18}/> BACK HOME</Link></div>}
