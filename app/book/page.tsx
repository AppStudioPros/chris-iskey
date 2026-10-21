import {pageMetadata} from '@/lib/seo';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';
export const metadata:Metadata=pageMetadata('Book a Time','Request a conversation, event, or media interview with Christopher Key.','/book');
export default function Book(){
  const provided=process.env.NEXT_PUBLIC_BOOKING_URL;
  const bookingUrl=provided?.startsWith('https://')?provided:undefined;
  return <>
    <PageHero kicker="07 / CONNECT" title="Request a time." description="Share what you’d like to discuss. If Christopher has provided a scheduling link, you can use it directly."/>
    <section className="section"><div className="container booking-layout">
      <div className="booking-intro"><CalendarDays size={38}/><h2>Let’s find a time.</h2><p>Have an interview, event, or other request? Send the details using this form. A request does not confirm an appointment.</p>
      {bookingUrl ? <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button button-dark">OPEN BOOKING CALENDAR <ArrowUpRight size={17}/></a> : <p className="editorial-note">A direct calendar is not connected yet. Use the request form.</p>}
      <p><Link href="/contact" className="text-link">OTHER CONTACT OPTIONS <ArrowUpRight size={16}/></Link></p></div>
      <div className="contact-paper"><div className="form-eyebrow">BOOKING & MEDIA REQUESTS</div><h3>Send your request.</h3><ContactForm defaultTopic="Event inquiry"/></div>
    </div></section>
  </>;
}
