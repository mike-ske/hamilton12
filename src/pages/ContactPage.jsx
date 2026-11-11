import React,{useState} from 'react';
import {Breadcrumb} from '../components/PagePrimitives.jsx';

export default function ContactPage(){
  const [sent,setSent]=useState(''),[error,setError]=useState(''),[busy,setBusy]=useState(false);
  async function submit(event){event.preventDefault();const form=event.currentTarget;setBusy(true);setError('');setSent('');const data=new FormData(form);try{const response=await fetch(`${import.meta.env.VITE_API_BASE_URL||''}/api/contact`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:data.get('name'),email:data.get('email'),phone:data.get('phone'),country:data.get('country'),topic:data.get('topic'),message:data.get('message'),consent:data.get('consent')?'1':'0'})});const result=await response.json();if(!response.ok)throw new Error(result.message||Object.values(result.errors||{}).flat().join(' ')||'Unable to send your message. Please try again.');setSent(result.contact.reference);form.reset()}catch(issue){setError(issue.message)}finally{setBusy(false)}}
  return <main className="legal-page contact-page">
    <Breadcrumb label="Contact us"/>
    <section className="legal-hero"><span className="eyebrow">WE’RE HERE TO HELP</span><h1>Contact us</h1><p>Questions about our products, services, training, or resources? Send us a message and we’ll help you find the right team.</p></section>
    <section className="contact-layout section-pad" id="page-content">
      <div className="contact-details"><span className="eyebrow blue-eyebrow">GET IN TOUCH</span><h2>How can we help?</h2><p>Send your message to Hamilton Medical’s executive office. Our team will route your request to the right people.</p>
        <div className="contact-detail-card"><span>Hamilton Medical executive office</span><a href="mailto:info@hamilton-medical.com">info@hamilton-medical.com</a><a href="tel:+41586101020">+41 58 610 10 20</a></div>
        <a className="under-link" href="/services">Find service and support</a>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <h2>Send us a message</h2><p>Your inquiry will be added to our support team’s inbox. We’ll follow up by email.</p>
        <div className="form-grid"><label>Full name<input name="name" required autoComplete="name"/></label><label>Email address<input type="email" name="email" required autoComplete="email"/></label><label>Phone number<input name="phone" type="tel" autoComplete="tel"/></label><label>Country or region<input name="country" autoComplete="country-name"/></label><label className="form-wide">How can we help?<select name="topic" defaultValue="General inquiry"><option>General inquiry</option><option>Product information</option><option>Service and support</option><option>Training and Academy</option><option>Careers</option><option>Media inquiry</option></select></label><label className="form-wide">Message<textarea name="message" rows="5" required/></label></div>
        <label className="consent-check"><input name="consent" type="checkbox" required/> I have read the <a href="/privacy-and-cookies">Privacy &amp; cookies information</a>.</label>
        <button type="submit" className="button button-blue" disabled={busy}>{busy?'Sending…':'Send message'}</button>{error&&<p className="application-error" role="alert">{error}</p>}{sent&&<p className="form-note" role="status">Your message was received. Reference: {sent}. Our team will reply to your email.</p>}
      </form>
    </section>
  </main>;
}
