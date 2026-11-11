import React,{useEffect,useState} from 'react';
import {img} from '../data/images.js';

const navigation=[
  ['Products','/products'],['Services','/services'],['Academy','/academy'],['Resources','/resources'],['e-Catalog','/e-catalog'],['About us','/about-us'],['Jobs','/jobs'],['News','/news-events']
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
  return <footer><div className="footer-top"><a className="brand footer-brand" href="/"><img src={img.logo} alt="Hamilton Medical"/></a><p>Intelligent ventilation.<br/>Since 1983.</p><div className="footer-columns"><div><b>Explore</b>{navigation.slice(0,5).map(([name,path])=><a href={path} key={name}>{name}</a>)}</div><div><b>Hamilton Medical</b>{navigation.slice(5).map(([name,path])=><a href={path} key={name}>{name}</a>)}</div><div><b>Support</b><a href="/contact-us">Contact us</a><a href="/services">Service and support</a><a href="/resources">Resource Center</a><a href="/e-catalog">Product catalog</a><a href="/services#feedback">Product feedback</a></div></div></div><div className="footer-medical-note">The products shown here are not available for purchase by the general public. Information is intended for healthcare professionals only. Always read product labels and instructions for use. Product features and availability vary by market.</div><div className="footer-bottom"><span>© Hamilton Medical. All rights reserved.</span><div><a href="/legal-information">Legal information</a><a href="/privacy-and-cookies">Privacy &amp; cookies</a><a href="/imprint">Imprint</a></div><span className="medical-note">For healthcare professionals only.</span></div></footer>;
}

function ScrollReveals(){
  useEffect(()=>{
    const nodes=document.querySelectorAll('.page-card,.product-card,.news-card,.catalog-card,.resource-card,.job-card');
    if(!('IntersectionObserver' in window)){nodes.forEach(node=>node.classList.add('scroll-visible'));return}
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('scroll-visible');observer.unobserve(entry.target)}
    }),{threshold:.12,rootMargin:'0px 0px -36px 0px'});
    nodes.forEach((node,index)=>{node.classList.add('scroll-reveal');node.style.setProperty('--reveal-delay',`${(index%4)*75}ms`);observer.observe(node)});
    return ()=>observer.disconnect();
  },[]);
  return null;
}

export default function SiteLayout({active,children}){return <><Header active={active}/><ScrollReveals/>{children}<Footer/></>}
