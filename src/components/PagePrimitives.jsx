import React, { useState } from 'react';

export function Breadcrumb({label}) {
  return <div className="breadcrumbs flex items-center gap-2 text-xs text-slate-500"><a href="/">Home</a><span>›</span>{label}</div>;
}

export function PageHero({eyebrow,title,subtitle,description,image,button='Explore the page',anchor='page-content'}) {
  return <>
    <Breadcrumb label={title.replace(/\.$/,'')}/>
    <section className="page-hero relative grid overflow-hidden">
      <div className="page-hero-copy"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><h2>{subtitle}</h2><p>{description}</p><a className="button button-white" href={`#${anchor}`}>{button}</a></div>
      <div className="page-hero-image" role="img" aria-label={subtitle} style={{backgroundImage:`url('${image}')`}}/>
    </section>
  </>;
}

export function SectionIntro({eyebrow,title,children,asideTitle,aside,anchor}) {
  return <section className="section-pad page-intro" id={anchor}>
    <div><span className="eyebrow blue-eyebrow">{eyebrow}</span><h2>{title}</h2><div className="page-intro-copy">{children}</div></div>
    {asideTitle&&<div className="page-intro-side"><strong>{asideTitle}</strong><p>{aside}</p></div>}
  </section>;
}

export function PageTabs({items}) {
  return <nav className="page-subnav" aria-label="On this page">{items.map((item,i)=>{const label=typeof item==='string'?item:item.label;const href=typeof item==='string'?`#${i===0?'page-content':`topic-${i}`}`:item.href;return <a key={label} href={href}>{label}</a>})}</nav>;
}

export function CardGrid({cards}) {
  const [expanded,setExpanded]=useState(null);
  return <div className="page-cards grid">{cards.map((card,i)=>{
    const isOpen=expanded===i;
    return <article className={`page-card group overflow-hidden transition duration-200 ${isOpen?'card-open':''}`} key={card.title}>
      <div className="page-card-image transition-transform duration-300 group-hover:scale-105" role="img" aria-label={card.imageAlt||card.title} style={{backgroundImage:`url('${card.image}')`}}/>
      <div className="page-card-copy"><span>{card.eyebrow||`0${i+1} / HAMILTON MEDICAL`}</span><h3>{card.title}</h3><p>{card.summary}</p>
        {isOpen&&<div className="card-detail"><p>{card.details||card.summary}</p>{card.meta&&<small>{card.meta}</small>}</div>}
        <button className="card-toggle" aria-expanded={isOpen} onClick={()=>setExpanded(isOpen?null:i)}>{isOpen?'Show less':'Learn more'}</button>
      </div>
    </article>;
  })}</div>;
}

export function ContentSection({id,eyebrow,title,intro,children,soft=false}) {
  return <section id={id} className={`section-pad content-section ${soft?'content-soft':''}`}><div className="section-heading"><div><span className="eyebrow blue-eyebrow">{eyebrow}</span><h2>{title}</h2>{intro&&<p className="section-lead">{intro}</p>}</div></div>{children}</section>;
}

export function CallToAction({eyebrow,title,button,href='/services'}) {
  return <section className="contact-band"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div><a className="button button-white" href={href}>{button}</a></section>;
}

export function PillFilter({items,selected,onSelect}) {
  return <div className="filter-options">{items.map(item=><button type="button" key={item} className={selected===item?'filter-active':''} onClick={()=>onSelect(item)}>{item}</button>)}</div>;
}

export function ImageStory({eyebrow,title,body,image,button,href}) {
  return <section className="image-story" style={{backgroundImage:`linear-gradient(90deg,rgba(5,47,92,.44),rgba(5,47,92,.22) 48%,rgba(5,47,92,.06) 82%,transparent),url('${image}')`}}><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{body}</p>{button&&<a className="button button-white" href={href}>{button}</a>}</div></section>;
}
