import React,{useMemo,useState} from 'react';
import {PageHero,PageTabs,SectionIntro,ContentSection,CallToAction,PillFilter} from '../components/PagePrimitives.jsx';
import {img} from '../data/images.js';

const catalog=[
  {name:'HAMILTON-C6',category:'Ventilators',use:'Critical care',summary:'Intelligent ICU ventilation for adult, pediatric, and neonatal patients.',image:img.c6,features:'Large touchscreen · Configurable cart · Intelligent ventilation technologies'},
  {name:'HAMILTON-G5',category:'Ventilators',use:'Critical care',summary:'A flexible platform for advanced ventilation across patient populations.',image:img.heroC6,features:'Adult, pediatric, and neonatal care · Multiple therapy options'},
  {name:'HAMILTON-T1',category:'Ventilators',use:'Transport',summary:'A mobile ventilator for patient transport and emergency care.',image:img.emergency,features:'Transport-ready · Turbine driven · Continuity of care'},
  {name:'HAMILTON-MR1',category:'Ventilators',use:'MRI',summary:'Ventilation support for magnetic resonance imaging environments.',image:img.heroC6,features:'MRI compatible · Familiar user interface'},
  {name:'HAMILTON-HF90',category:'Therapy devices',use:'High flow',summary:'A dedicated high flow oxygen therapy device.',image:img.hf90,features:'High flow nasal cannula therapy · Dedicated user workflow'},
  {name:'HAMILTON-H900',category:'Accessories',use:'Humidification',summary:'An integrated humidifier for use with compatible ventilators.',image:img.serviceTraining,features:'Heated humidification · Integrated control options'},
  {name:'ProxyCo®',category:'Accessories',use:'Monitoring',summary:'A proximal CO₂ sensor for respiratory monitoring.',image:img.proxy,features:'Proximal CO₂ monitoring · Product availability varies'},
  {name:'PulmoMap',category:'Accessories',use:'Monitoring',summary:'An EIT solution for HAMILTON-C6 to visualize regional ventilation.',image:img.aboutResearch,features:'Electrical impedance tomography · Bedside visualization'},
  {name:'Flow sensors',category:'Consumables',use:'Patient interface',summary:'Proximal flow and pressure measurement for patient monitoring.',image:img.academyWorkshop,features:'Patient-side measurement · Available for multiple populations'},
  {name:'Breathing circuit sets',category:'Consumables',use:'Patient interface',summary:'Single and double limb circuit sets for compatible systems.',image:img.aboutCare,features:'Product options vary · Use compatible configurations'},
  {name:'NIV masks',category:'Consumables',use:'Noninvasive ventilation',summary:'Noninvasive ventilation interfaces for adult and pediatric patients.',image:img.aboutCare,features:'Adult and pediatric options · Check regional availability'}
];
const categories=['All','Ventilators','Therapy devices','Accessories','Consumables'];

export default function ECatalogPage(){
  const [category,setCategory]=useState('All'),[query,setQuery]=useState(''),[compare,setCompare]=useState([]);
  const visible=useMemo(()=>catalog.filter(item=>(category==='All'||item.category===category)&&(!query||`${item.name} ${item.use} ${item.summary}`.toLowerCase().includes(query.toLowerCase()))),[category,query]);
  const toggle=(name)=>setCompare(prev=>prev.includes(name)?prev.filter(x=>x!==name):prev.length<3?[...prev,name]:prev);
  return <main className="section-page min-h-screen bg-white text-slate-800">
    <PageHero eyebrow="PRODUCT CATALOG" title="e-Catalog." subtitle="Explore the Hamilton Medical portfolio." description="Browse ventilators, therapy devices, accessories, and consumables. Use product categories and search to find equipment relevant to your care environment." image={img.c6} button="Browse the catalog"/>
    <PageTabs items={['Ventilators','Accessories','Consumables','Therapy devices'].map(label=>({label,href:'#topic-1'}))}/>
    <SectionIntro eyebrow="PRODUCT INFORMATION" title="Explore products and compatible components." asideTitle="For professional use" aside="Products shown are not available for purchase by the general public. Availability and product features vary by market." anchor="page-content"><p>Find an overview of Hamilton Medical products and accessories. Compare areas of use, see key product details, and use the catalog as a starting point for a conversation with your local representative.</p><p>Choose up to three ventilators to compare. This catalog is an informational frontend and does not process orders.</p></SectionIntro>
    <section className="section-pad catalog-browser" id="topic-1"><div className="catalog-tools"><label className="resource-search">Search products<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Product name, therapy, or use"/></label><PillFilter items={categories} selected={category} onSelect={setCategory}/></div>
      <div className="catalog-summary"><span>{visible.length} products</span>{compare.length>0&&<span>{compare.length} selected to compare</span>}</div>
      <div className="catalog-grid">{visible.map((product)=>{const selected=compare.includes(product.name);return <article className={`catalog-card ${selected?'catalog-selected':''}`} key={product.name}><img src={product.image} alt={product.name}/><div className="catalog-card-copy"><span className="eyebrow blue-eyebrow">{product.category} · {product.use}</span><h3>{product.name}</h3><p>{product.summary}</p><small>{product.features}</small><button className="card-toggle" onClick={()=>toggle(product.name)}>{selected?'Remove from compare':'Add to compare'}</button></div></article>})}</div>
      {visible.length===0&&<div className="empty-state">No products match your search. <button onClick={()=>{setCategory('All');setQuery('')}}>Clear filters</button></div>}
    </section>
    {compare.length>0&&<section className="comparison-tray" aria-live="polite"><div><span className="eyebrow">PRODUCT COMPARISON</span><h2>Compare selected products</h2></div><div className="compare-items">{compare.map(name=>{const p=catalog.find(x=>x.name===name);return <article key={name}><b>{p.name}</b><span>{p.category}</span><span>{p.use}</span><button onClick={()=>toggle(name)}>Remove</button></article>})}</div><button className="button button-blue" onClick={()=>setCompare([])}>Clear comparison</button></section>}
    <ContentSection id="topic-2" eyebrow="PRODUCT CATEGORIES" title="Find the right category for your needs." intro="The e-Catalog brings together ventilators, therapy devices, compatible accessories, and consumable products."><div className="support-options"><a href="#topic-1" onClick={()=>setCategory('Ventilators')}><span>01</span><h3>Ventilators</h3><p>Critical care, transport, and MRI ventilation solutions.</p><b>Browse ventilators</b></a><a href="#topic-1" onClick={()=>setCategory('Accessories')}><span>02</span><h3>Accessories</h3><p>Integrated options, humidification, monitoring, and more.</p><b>Browse accessories</b></a><a href="#topic-1" onClick={()=>setCategory('Consumables')}><span>03</span><h3>Consumables</h3><p>Patient-side circuits, sensors, valves, and interfaces.</p><b>Browse consumables</b></a></div></ContentSection>
    <CallToAction eyebrow="NEED PRODUCT ADVICE?" title="Talk with a representative about your care setting." button="Contact Hamilton Medical" href="/services"/>
  </main>;
}
