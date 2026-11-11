import {img} from '../data/images.js';
import {Breadcrumb} from '../components/PagePrimitives.jsx';
import SupportInterestForm from '../components/SupportInterestForm.jsx';

export default function DonationPage(){
  return <main className="donation-page">
    <Breadcrumb label="Support patient care"/>
    <section className="donation-hero">
      <div className="donation-hero-copy"><span className="eyebrow blue-eyebrow">A CARING COMMUNITY</span><h1>Support for people who need respiratory care.</h1><p>Share your interest in supporting patient care. This form records a non-binding pledge of interest so our team can follow up with clear, verified information.</p><a href="#donation-interest" className="button button-blue">Share your interest</a></div>
      <div className="donation-hero-image"><img src={img.aboutCare} alt="Healthcare professionals caring for a patient in a hospital bed"/><span>Care teams work together to support patients.</span></div>
    </section>
    <section className="donation-notice" role="note"><strong>This page does not accept or process money.</strong><p>The amount below is an expression of interest only. No payment is taken, no donation is confirmed, and no funds are transferred through this website. We will provide verified program details before any donation is made.</p></section>
    <section className="donation-form-section" id="donation-interest"><div className="donation-form-intro"><span className="eyebrow blue-eyebrow">DONATION INTEREST</span><h2>Tell us how you’d like to help.</h2><p>Leave your contact information and an approximate amount. A superadmin will review your request and may contact you with next steps.</p><div className="donation-points"><span>Non-binding expression of interest</span><span>No payment details collected</span><span>No selfie or identity image required</span></div></div>
      <SupportInterestForm/>
    </section>
  </main>;
}
