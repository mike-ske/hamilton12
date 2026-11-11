import React,{useState} from 'react';
import {CardGrid,ContentSection,CallToAction,ImageStory} from '../components/PagePrimitives.jsx';
import {img} from '../data/images.js';

const slides=[
  {tag:'NEW · PROXYCO®',title:'Confidence with every breath.',copy:'Discover a new approach to proximal CO₂ monitoring, developed to support clear clinical insight.',image:img.proxy,link:'/products'},
  {tag:'HAMILTON-EM7',title:'Ready when every second counts.',copy:'Explore confident ventilation support designed for emergency and transport care.',image:img.emergency,link:'/products'},
  {tag:'HAMILTON-C6',title:'Supporting your entire workflow.',copy:'Intelligent ventilation technologies come together in a connected bedside solution.',image:img.heroC6,link:'/products'},
  {tag:'O₂ ASSIST',title:'Your precision-care assistant.',copy:'Meet a technology designed to support personalized oxygen therapy at the bedside.',image:img.o2,link:'/products'},
  {tag:'HAMILTON-HF90',title:'A breath of new possibilities.',copy:'Discover high flow oxygen therapy for your patients and care team.',image:img.hf90,link:'/products'}
];
const homeProducts=[
  {title:'Critical care ventilators',eyebrow:'VENTILATION',summary:'A portfolio for adult, pediatric, and neonatal respiratory care.',details:'Explore intelligent ventilation systems for intensive care, MRI, and different levels of mobility.',image:img.c6},
  {title:'Transport ventilation',eyebrow:'EMERGENCY CARE',summary:'Portable ventilation for care in transit and prehospital settings.',details:'The transport portfolio includes solutions designed for mobility, resilience, and continuity of care.',image:img.emergency},
  {title:'High flow therapy',eyebrow:'OXYGEN THERAPY',summary:'Dedicated therapy devices for high flow nasal cannula therapy.',details:'Explore HAMILTON-HF90 and therapy accessories for high flow care.',image:img.hf90}
];
const latest=[
  {title:'ProxyCo® for CO₂ monitoring',eyebrow:'PRODUCT NEWS · 2026',summary:'Confidence with every breath. Learn about the new proximal CO₂ sensor.',details:'See the product announcement and explore how proximal monitoring fits into the Hamilton Medical portfolio.',image:img.proxy},
  {title:'STIMIT Activator 1 receives FDA Breakthrough Device Designation',eyebrow:'COMPANY NEWS · 2026',summary:'A milestone in respiratory muscle stimulation.',details:'Read the company update about the designation and the potential of respiratory muscle stimulation.',image:img.aboutResearch},
  {title:'A new home for EMS',eyebrow:'COMPANY NEWS · 2026',summary:'A dedicated online resource for emergency medical services.',details:'The EMS website brings transport ventilation information and support together for emergency teams.',image:img.newsletter}
];

export default function HomePage(){
  const [index,setIndex]=useState(0), slide=slides[index];
  const set=(n)=>setIndex((n+slides.length)%slides.length);
  return <main>
    <section className="hero home-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(5,47,92,.34),rgba(5,47,92,.16) 48%,rgba(5,47,92,.03) 78%,transparent),url('${slide.image}')`}}>
      <div className="hero-copy"><span className="eyebrow">{slide.tag}</span><h1>{slide.title}</h1><p>{slide.copy}</p><a className="button button-white" href={slide.link}>Discover more</a></div>
      <div className="hero-controls"><button onClick={()=>set(index-1)} aria-label="Previous feature">Previous</button><div className="dots">{slides.map((item,i)=><button key={item.tag} className={index===i?'dot active':'dot'} onClick={()=>set(i)} aria-label={`Show ${item.tag}`}/>)}</div><span className="slide-count">0{index+1}<i>/</i>0{slides.length}</span><button onClick={()=>set(index+1)} aria-label="Next feature">Next</button></div>
      <div className="hero-note">✳ &nbsp; Supporting respiratory care<br/>at every step of the journey.</div>
    </section>
    <section className="section-pad home-introduction"><div className="intro-kicker"><span className="blue-line"/>WHAT WE DO</div><div className="intro-content"><div><h2>Help you deliver respiratory care to anyone, anywhere.</h2><a href="/about-us" className="text-link">Get to know Hamilton Medical</a></div><div className="intro-body"><p className="lead">Frontline workers in critical care face demanding situations every day. We work to make their job easier.</p><p>Since 1983, Hamilton Medical has focused on respiratory care. Our teams develop ventilation solutions, from mechanical ventilators and therapy devices to accessories, consumables, education, and service.</p><a href="/about-us" className="under-link">Read our story</a></div></div></section>
    <section className="commitment"><div className="commitment-image" style={{backgroundImage:`url('${img.homeCEO}')`}}><span className="image-caption">A message from our CEO</span></div><div className="commitment-copy"><span className="eyebrow blue-eyebrow">OUR COMMITMENT</span><h2>Here for the people who care.</h2><p>We remain committed to mechanical ventilation, innovation in respiratory care, and the medical teams who use our solutions.</p><a href="/about-us" className="button button-blue">Our company</a></div></section>
    <ContentSection eyebrow="OUR SOLUTIONS" title="Intelligent ventilation. Designed around care." intro="From intensive care to transport and high flow therapy, explore solutions for different clinical settings."><CardGrid cards={homeProducts}/></ContentSection>
    <ContentSection eyebrow="WHAT’S NEW" title="Latest news" intro="Product developments, company updates, and ideas from respiratory care."><CardGrid cards={latest}/><div className="section-action"><a className="button button-blue" href="/news-events">View all news</a></div></ContentSection>
    <ImageStory eyebrow="OUR RESPONSIBILITY" title="Better care. A healthier future." body="We take a long-term view of our responsibilities, including social justice and ecological responsibility." image={img.aboutHistory} button="Sustainability at Hamilton" href="/about-us#sustainability"/>
    <section className="journey section-pad"><div className="journey-top"><span className="eyebrow blue-eyebrow">BY YOUR SIDE</span><h2>From A to Z. Here for your entire ventilation journey.</h2><p>Find the equipment, learning, and service support your team needs—from product selection through everyday use.</p></div><div className="journey-links"><a href="/products"><span>01</span><b>Product portfolio</b></a><a href="/services"><span>02</span><b>Services and support</b></a><a href="/academy"><span>03</span><b>Academy and training</b></a><a href="/resources"><span>04</span><b>Resource center</b></a></div></section>
    <CallToAction eyebrow="HERE WHEN YOU NEED US" title="Good care starts with a conversation." button="Contact our team" href="/services"/>
  </main>;
}
