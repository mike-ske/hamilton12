import React from 'react';
import {createRoot} from 'react-dom/client';
import SiteLayout from './components/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AcademyPage from './pages/AcademyPage.jsx';
import ResourceCenterPage from './pages/ResourceCenterPage.jsx';
import ECatalogPage from './pages/ECatalogPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import JobsPage from './pages/JobsPage.jsx';
import NewsEventsPage from './pages/NewsEventsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import DonationPage from './pages/DonationPage.jsx';
import {LegalInformationPage,PrivacyPage,ImprintPage} from './pages/LegalPages.jsx';
import CareerPortalPage from './pages/CareerPortalPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import './styles.css';

const routeMap={
  '/products':['Products',ProductsPage],
  '/services':['Services',ServicesPage],
  '/academy':['Academy',AcademyPage],
  '/resources':['Resources',ResourceCenterPage],
  '/e-catalog':['e-Catalog',ECatalogPage],
  '/about-us':['About us',AboutPage],
  '/jobs':['Jobs',JobsPage],
  '/news-events':['News',NewsEventsPage],
  '/contact-us':['Contact',ContactPage],
  '/support-patient-care':['Donate',DonationPage],
  '/legal-information':['Legal information',LegalInformationPage],
  '/privacy-and-cookies':['Privacy & cookies',PrivacyPage],
  '/imprint':['Imprint',ImprintPage]
};
const cleanPath=window.location.pathname.replace(/\/$/,'').toLowerCase()||'/';
const current=cleanPath==='/admin'?['Admin',AdminPage]:cleanPath.startsWith('/career-portal')?['Jobs',CareerPortalPage]:(routeMap[cleanPath]||['Home',HomePage]);
document.title=current[0]==='Home'?'Hamilton Medical — Intelligent Ventilation':`${current[0]} | Hamilton Medical`;

function App(){const [active,Page]=current;if(active==='Admin')return <Page/>;return <SiteLayout active={active==='Home'?null:active}><Page/></SiteLayout>}
createRoot(document.getElementById('root')).render(<App/>);
