import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import PortfolioGrid from '../components/PortfolioGrid.jsx';
import WebTemplatesGrid from '../components/WebTemplatesGrid.jsx';
import Authority from '../components/Authority.jsx';
import QuoteCalculator from '../components/QuoteCalculator.jsx';
import Footer from '../components/Footer.jsx';

export default function AgencyHome({ onSelectSystem, onSelectTemplate }) {
  return (
    <div className="min-h-screen bg-[#171717] text-[#EDEDED] font-sans selection:bg-[#DA0037] selection:text-white">
      {/* Barra de navegación superior fija */}
      <Navbar currentView="home" />

      {/* Hero: Portada principal con propuesta de valor y acento rojo */}
      <Hero />

      {/* Servicios Especializados con métricas de tiempo e inversión */}
      <Services onSelectSystem={onSelectSystem} />

      {/* Demos en Vivo: Mini-interfaces interactivas simuladas */}
      <PortfolioGrid onSelectSystem={onSelectSystem} />

      {/* Bocetos Web Estáticos por Industria */}
      <WebTemplatesGrid onSelectTemplate={onSelectTemplate} />

      {/* Respaldo de Ingeniería UTN y Cambridge */}
      <Authority />

      {/* Calculadora Interactiva de Presupuesto en Tiempo Real */}
      <QuoteCalculator />

      {/* Footer de Cierre y Enlaces Directos */}
      <Footer />
    </div>
  );
}
