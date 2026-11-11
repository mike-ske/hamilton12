import React,{useEffect,useState} from 'react';
import {img} from '../data/images.js';
import SupportInterestForm from './SupportInterestForm.jsx';

const navigation=[
  ['Products','/products'],['Services','/services'],['Academy','/academy'],['Resources','/resources'],['e-Catalog','/e-catalog'],['About us','/about-us'],['Jobs','/jobs'],['News','/news-events'],['Donate','/support-patient-care']
];

function SearchIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/></svg>}
function MenuIcon({open}){return open?<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 6 12 12M18 6 6 18"/></svg>:<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16"/></svg>}

function Header({active}){
  const [open,setOpen]=useState(false),[search,setSearch]=useState(false),[query,setQuery]=useState('');
  const submit=(event)=>{event.preventDefault();window.location.href=`/resources?q=${encodeURIComponent(query)}`};
  return <>
    <div className="topline"><span>Intelligent ventilation since 1983</span><div><a href="/services">Need support?</a><span className="top-sep">·</span><a href="/news-events">News</a><button className="icon-button topline-search" onClick={()=>setSearch(!search)} aria-label="Open search" aria-expanded={search}><SearchIcon/></button><button className="language" aria-label="Language">EN⌄</button></div></div>
    <header className="header"><a className="brand" href="/" aria-label="Hamilton Medical home"><img src={img.logo} alt="Hamilton Medical"/></a><button className="mobile-toggle icon-button" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open}><MenuIcon open={open}/></button><nav className={open?'nav nav-open':'nav'} aria-label="Main navigation">{navigation.map(([name,path])=><a className={active===name?'nav-active':''} href={path} key={name}>{name}</a>)}</nav><div className="header-actions"><a href="/contact-us" className="contact-link">Contact</a><button className="search-button icon-button" onClick={()=>setSearch(!search)} aria-label="Search" aria-expanded={search}><SearchIcon/></button></div></header>
    {search&&<form className="search-panel" onSubmit={submit}><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products and resources" aria-label="Search Hamilton Medical"/><button className="button button-blue">Search</button></form>}
  </>;
}

function Footer(){
  const socials=[['Facebook','https://www.facebook.com/HamiltonMedical','M12 2a10 10 0 1 0 2 19.8v-7h2.4l.5-2.8H14V10c0-.8.3-1.4 1.4-1.4H17V6.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V12H9v2.8h2.1v7A10 10 0 0 0 12 2Z'],['Instagram','https://www.instagram.com/hamiltonmedical/','M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z'],['X / Twitter','https://twitter.com/HamiltonMedical','M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.5L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20Z'],['TikTok','https://www.tiktok.com/@hamiltonmedical','M19.6 7.4a7.2 7.2 0 0 1-4.3-1.5v8.2a6 6 0 1 1-6-6c.4 0 .8 0 1.2.1v3.4a2.7 2.7 0 1 0 1.8 2.6V2h3.4a7.3 7.3 0 0 0 3.9 4.1v1.3Z'],['LinkedIn','https://www.linkedin.com/company/hamilton-medical/','M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.3 8.5h3.4V21H3.3V8.5Zm5.5 0H12v1.7h.1a4 4 0 0 1 3.6-2c3.8 0 4.5 2.5 4.5 5.7V21h-3.5v-6.3c0-1.5 0-3.5-2.1-3.5s-2.4 1.6-2.4 3.4V21H8.8V8.5Z']];
  return <footer className="site-footer"><div className="footer-top"><a className="brand footer-brand" href="/"><img src={img.logo} alt="Hamilton Medical"/></a><p>Intelligent ventilation.<br/>Since 1983.</p><div className="footer-columns"><div><b>Explore</b>{navigation.slice(0,5).map(([name,path])=><a href={path} key={name}>{name}</a>)}</div><div><b>Hamilton Medical</b>{navigation.slice(5).map(([name,path])=><a href={path} key={name}>{name}</a>)}</div><div><b>Support</b><a href="/contact-us">Contact us</a><a href="/services">Service and support</a><a href="/resources">Resource Center</a><a href="/e-catalog">Product catalog</a><a href="/services#feedback">Product feedback</a></div></div><div className="footer-social"><b>Follow Hamilton Medical</b><div>{socials.map(([name,url,path])=><a href={url} key={name} target="_blank" rel="noreferrer" aria-label={name} title={name}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={path}/></svg><span>{name}</span></a>)}</div></div></div><div className="footer-medical-note">The products shown here are not available for purchase by the general public. Information is intended for healthcare professionals only. Always read product labels and instructions for use. Product features and availability vary by market.</div><div className="footer-bottom"><span>© Hamilton Medical. All rights reserved.</span><div><a href="/legal-information">Legal information</a><a href="/privacy-and-cookies">Privacy &amp; cookies</a><a href="/imprint">Imprint</a></div><span className="medical-note">For healthcare professionals only.</span></div></footer>;
}

function ScrollReveals(){
  useEffect(()=>{
    const nodes=document.querySelectorAll('.page-card,.product-card,.news-card,.catalog-card,.resource-card,.job-card,.portal-job-card');
    if(!('IntersectionObserver' in window)){nodes.forEach(node=>node.classList.add('scroll-visible'));return}
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('scroll-visible');observer.unobserve(entry.target)}
    }),{threshold:.12,rootMargin:'0px 0px -36px 0px'});
    nodes.forEach((node,index)=>{node.classList.add('scroll-reveal');node.style.setProperty('--reveal-delay',`${(index%4)*75}ms`);observer.observe(node)});
    return ()=>observer.disconnect();
  },[]);
  return null;
}

function SupportInterestPrompt(){
  const slides=[{src:img.aboutCare,alt:'Care team supporting a patient in a hospital bed',caption:'Care for patients depends on people working together.'},{src:img.serviceTraining,alt:'Hamilton Medical team supporting clinical care',caption:'Education and support help care teams do their work.'},{src:img.academyWorkshop,alt:'Healthcare professionals learning together',caption:'Stronger care starts with informed clinical teams.'}];
  const[open,setOpen]=useState(false),[slide,setSlide]=useState(0);
  useEffect(()=>{try{if(!sessionStorage.getItem('hamilton-support-interest-prompt-seen')){sessionStorage.setItem('hamilton-support-interest-prompt-seen','1');setOpen(true)}}catch{setOpen(true)}},[]);
  useEffect(()=>{if(!open)return;const previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';const timer=setInterval(()=>setSlide(value=>(value+1)%slides.length),5500);const onKey=e=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',onKey);return()=>{document.body.style.overflow=previousOverflow;clearInterval(timer);window.removeEventListener('keydown',onKey)}},[open,slides.length]);
  if(!open)return null;
  return <div className="support-prompt-backdrop" onMouseDown={event=>{if(event.target===event.currentTarget)setOpen(false)}}><section className="support-prompt" role="dialog" aria-modal="true" aria-labelledby="support-prompt-title"><button className="support-prompt-close" onClick={()=>setOpen(false)} aria-label="Close support information">Close</button><div className="support-prompt-image"><img src={slides[slide].src} alt={slides[slide].alt}/><span>{slides[slide].caption}</span><div className="support-prompt-controls"><button onClick={()=>setSlide(value=>(value+slides.length-1)%slides.length)}>Previous image</button><div>{slides.map((item,index)=><button key={item.src} className={index===slide?'active':''} onClick={()=>setSlide(index)} aria-label={`Show image ${index+1}`} aria-current={index===slide?'true':undefined}/>)}</div><button onClick={()=>setSlide(value=>(value+1)%slides.length)}>Next image</button></div></div><div className="support-prompt-content"><span className="eyebrow blue-eyebrow">A CARING COMMUNITY</span><h2 id="support-prompt-title">Interested in supporting patient care?</h2><p>Share a non-binding expression of interest. A team member can follow up with program information.</p><div className="support-prompt-disclaimer"><strong>No donations are processed here.</strong><span>Your amount is an indication only. This form does not take payment or confirm that funds were received.</span></div><SupportInterestForm compact/><a className="support-prompt-more" href="/support-patient-care">Read support-interest information</a></div></section></div>
}

export default function SiteLayout({active,children}){return <><Header active={active}/><ScrollReveals/>{children}<Footer/><SupportInterestPrompt/></>}
