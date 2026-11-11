import React,{useState} from 'react';
import {Breadcrumb} from '../components/PagePrimitives.jsx';

export default function ContactPage(){
  const [sent,setSent]=useState(false);
  function submit(event){
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const subject=encodeURIComponent(`Website inquiry: ${data.get('topic')}`);
    const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCountry: ${data.get('country')}\nTopic: ${data.get('topic')}\n\n${data.get('message')}`);
    setSent(true);
    window.location.href=`mailto:info@hamilton-medical.com?subject=${subject}&body=${body}`;
  }
  return <main className="legal-page contact-page">
    <Breadcrumb label="Contact us"/>
    <section className="legal-hero"><span className="eyebrow">WE’RE HERE TO HELP</span><h1>Contact us</h1><p>Questions about our products, services, training, or resources? Send us a message and we’ll help you find the right team.</p></section>
    <section className="contact-layout section-pad" id="page-content">
      <div className="contact-details"><span className="eyebrow blue-eyebrow">GET IN TOUCH</span><h2>How can we help?</h2><p>Choose the topic that best fits your request. For urgent product support, contact your local Hamilton Medical representative or service hotline.</p>
        <div className="contact-detail-card"><span>General inquiries</span><a href="mailto:info@hamilton-medical.com">info@hamilton-medical.com</a><a href="tel:+41586101020">+41 58 610 10 20</a></div>
        <div className="contact-detail-card"><span>Head office</span><p>Hamilton Medical AG<br/>Via Crusch 8<br/>7402 Bonaduz, Switzerland</p></div>
        <a className="under-link" href="/services">Find service and support</a>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <h2>Send us a message</h2><p>Complete the fields below. Your email app will open with your inquiry ready to send.</p>
        <div className="form-grid"><label>Full name<input name="name" required autoComplete="name"/></label><label>Email address<input type="email" name="email" required autoComplete="email"/></label><label>Country or region<input name="country" autoComplete="country-name"/></label><label>How can we help?<select name="topic" defaultValue="General inquiry"><option>General inquiry</option><option>Product information</option><option>Service and support</option><option>Training and Academy</option><option>Careers</option><option>Media inquiry</option></select></label><label className="form-wide">Message<textarea name="message" rows="5" required/></label></div>
        <label className="consent-check"><input type="checkbox" required/> I have read the <a href="/privacy-and-cookies">Privacy &amp; cookies information</a>.</label>
        <button type="submit" className="button button-blue">Prepare email</button>{sent&&<p className="form-note" role="status">Your email app should open with the inquiry details. Send the email there to complete your request.</p>}
      </form>
    </section>
  </main>;
}
