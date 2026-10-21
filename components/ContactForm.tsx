'use client';
import Script from 'next/script';
import { useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const siteKey=process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
export function ContactForm({defaultTopic='General question'}:{defaultTopic?:'General question'|'Media or interview'|'Event inquiry'|'His work'|'Other'}){
  const [status,setStatus]=useState('');
  const [success,setSuccess]=useState(false);
  const [sending,setSending]=useState(false);
  const id=useRef<string | null>(null);
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(sending)return;
    setStatus('');setSending(true);
    const form=e.currentTarget;
    const f=new FormData(form);
    if(!id.current)id.current=crypto.randomUUID();
    const data={
      submissionId:id.current,
      name:String(f.get('name')||''),email:String(f.get('email')||''),
      phone:String(f.get('phone')||''),topic:String(f.get('topic')||''),
      preferredContact:String(f.get('preferredContact')||'email'),
      message:String(f.get('message')||''),privacy:Boolean(f.get('privacy')),
      website:String(f.get('website')||''),sourcePath:window.location.pathname,
      turnstileToken:String(f.get('cf-turnstile-response')||''),
    };
    try{
      const r=await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
      const d=await r.json() as {error?:string,accepted?:boolean,receiptId?:string};
      if(!r.ok || !d.accepted)throw new Error(d.error||'Message could not be sent.');
      setSuccess(true);setStatus('Your message has been received. Thank you for getting in touch.');
      form.reset();id.current=null;
    }catch(error){
      setStatus(error instanceof Error?error.message:'The form is temporarily unavailable.');
    }finally{setSending(false);}
  }
  if(success)return <div className="form-success" role="status"><h3>Message received.</h3><p>{status}</p><button type="button" className="text-link" onClick={()=>{setSuccess(false);setStatus('');}}>SEND ANOTHER MESSAGE <ArrowUpRight size={16}/></button></div>;
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-pair"><label>FULL NAME *<input name="name" required minLength={2} maxLength={120} placeholder="Your full name" autoComplete="name"/></label><label>EMAIL ADDRESS *<input type="email" name="email" required maxLength={200} placeholder="you@example.com" autoComplete="email"/></label></div>
    <div className="form-pair"><label>PHONE <input type="tel" name="phone" maxLength={40} placeholder="Optional" autoComplete="tel"/></label><label>REASON FOR CONTACT <select name="topic" defaultValue={defaultTopic}><option>General question</option><option>Media or interview</option><option>Event inquiry</option><option>His work</option><option>Other</option></select></label></div>
    <div className="form-pair"><label>PREFERRED RESPONSE <select name="preferredContact" defaultValue="email"><option value="email">Email</option><option value="phone">Phone</option></select></label></div>
    <label>YOUR MESSAGE <textarea name="message" rows={5} maxLength={5000} placeholder="Tell us a little about why you're reaching out."/></label>
    <label className="privacy-check"><input type="checkbox" name="privacy" required/> <span>I agree to the use of my information to respond to this message. Read the <Link href="/privacy-policy">privacy notice</Link>.</span></label>
    <div className="website-trap" aria-hidden="true"><label>Leave blank <input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    {siteKey ? <><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive"/><div className="cf-turnstile" data-sitekey={siteKey} data-theme="light" data-response-field="true"/></> : <p className="form-status">The form opens when the website's security keys are configured. Contact details are listed on this page.</p>}
    <button className="button button-dark" type="submit" disabled={!siteKey||sending}>{sending?'SENDING...':'SEND YOUR MESSAGE'} <ArrowUpRight size={17}/></button>
    <p role="status" aria-live="polite" className="form-status">{status}</p>
  </form>;
}
