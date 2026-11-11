import React,{useState} from 'react';

export default function SupportInterestForm({compact=false}){
  const [busy,setBusy]=useState(false),[reference,setReference]=useState(''),[error,setError]=useState('');
  async function submit(event){event.preventDefault();const form=event.currentTarget;const data=new FormData(form);setBusy(true);setError('');setReference('');try{const response=await fetch(`${import.meta.env.VITE_API_BASE_URL||''}/api/donation-interests`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:data.get('name'),email:data.get('email'),country:data.get('country'),amount:data.get('amount'),currency:data.get('currency'),message:data.get('message'),consent:data.get('consent')?'1':'0',website:data.get('website')})});const result=await response.json();if(!response.ok)throw new Error(result.message||Object.values(result.errors||{}).flat().join(' ')||'Unable to submit your interest. Please try again.');setReference(result.interest.reference);form.reset()}catch(issue){setError(issue.message)}finally{setBusy(false)}}
  return <form className={`donation-form${compact?' donation-form-compact':''}`} onSubmit={submit}>
    <label>Your name<input name="name" autoComplete="name" required maxLength="160"/></label>
    <label>Email address<input name="email" type="email" autoComplete="email" required maxLength="190"/></label>
    {!compact&&<label>Country or region<input name="country" autoComplete="country-name" maxLength="120"/></label>}
    <div className="donation-amount-row"><label>Intended amount<input name="amount" type="number" min="1" max="10000000" step="0.01" placeholder="100" required/></label><label>Currency<select name="currency" defaultValue="USD"><option>USD</option><option>EUR</option><option>CHF</option><option>GBP</option></select></label></div>
    {!compact&&<label>Message (optional)<textarea name="message" rows="3" maxLength="2000" placeholder="Share what inspired you to get in touch."/></label>}
    {compact&&<label className="donation-country-compact">Country or region<input name="country" autoComplete="country-name" maxLength="120"/></label>}
    <label className="donation-honeypot" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off"/></label>
    <label className="donation-consent"><input type="checkbox" name="consent" required/><span>I understand this is an expression of interest only. No payment is collected or donation confirmed through this form. I have read the <a href="/privacy-and-cookies">Privacy &amp; cookies information</a>.</span></label>
    <button type="submit" className="button button-blue" disabled={busy}>{busy?'Submitting…':'Submit interest'}</button>
    {error&&<p className="application-error" role="alert">{error}</p>}
    {reference&&<p className="donation-success" role="status">Thank you for reaching out. Reference: <strong>{reference}</strong>. This is not a payment receipt; no funds have been received.</p>}
  </form>;
}
