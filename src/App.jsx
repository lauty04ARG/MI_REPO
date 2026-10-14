import React, { useState, useEffect } from 'react';
import AgencyHome from './pages/AgencyHome.jsx';

// 1. BOCETOS WEB POR INDUSTRIA (5)
import BocetoInmobiliaria from './bocetos-web/BocetoInmobiliaria.jsx';
import BocetoEstudioJuridico from './bocetos-web/BocetoEstudioJuridico.jsx';
import BocetoGastronomia from './bocetos-web/BocetoGastronomia.jsx';
import BocetoAgroIndustrial from './bocetos-web/BocetoAgroIndustrial.jsx';
import BocetoClinicaEstetica from './bocetos-web/BocetoClinicaEstetica.jsx';

// 2. AGENTES DE IA & AUTOMATIZACIÓN (5)
import ChatbotApp from './sistemas/03-agente-ia-whatsapp/ChatbotApp.jsx';
import AgenteCotizadorAutos from './sistemas/03-agente-ia-whatsapp/AgenteCotizadorAutos.jsx';
import AgenteHelpdeskIT from './sistemas/03-agente-ia-whatsapp/AgenteHelpdeskIT.jsx';
import AgenteCitasMedicas from './sistemas/03-agente-ia-whatsapp/AgenteCitasMedicas.jsx';
import AgenteAuditorDocs from './sistemas/03-agente-ia-whatsapp/AgenteAuditorDocs.jsx';

// 3. SISTEMAS A MEDIDA & ERPS (5)
import GestionApp from './sistemas/04-sistema-gestion-erp/GestionApp.jsx';
import CrmKanbanApp from './sistemas/04-sistema-gestion-erp/CrmKanbanApp.jsx';
import InventarioStockApp from './sistemas/04-sistema-gestion-erp/InventarioStockApp.jsx';
import RecursosHumanosApp from './sistemas/04-sistema-gestion-erp/RecursosHumanosApp.jsx';
import AnalyticsBIApp from './sistemas/04-sistema-gestion-erp/AnalyticsBIApp.jsx';

// 4. SOFTWARE PARA LOGÍSTICA & TRANSPORTE B2B (5)
import LogisticaApp from './sistemas/02-logistica-flotas/LogisticaApp.jsx';
import LogisticaRuteo from './sistemas/02-logistica-flotas/LogisticaRuteo.jsx';
import LogisticaTaller from './sistemas/02-logistica-flotas/LogisticaTaller.jsx';
import LogisticaFletes from './sistemas/02-logistica-flotas/LogisticaFletes.jsx';
import LogisticaCadenaFrio from './sistemas/02-logistica-flotas/LogisticaCadenaFrio.jsx';

// 5. EVENTOS VIP & EXPERIENCIAS INTERACTIVAS (5)
import EventosApp from './sistemas/01-eventos-vip/EventosApp.jsx';
import EventosSummitTech from './sistemas/01-eventos-vip/EventosSummitTech.jsx';
import EventosFiesta15 from './sistemas/01-eventos-vip/EventosFiesta15.jsx';
import EventosFestivalPass from './sistemas/01-eventos-vip/EventosFestivalPass.jsx';
import EventosBodaDestino from './sistemas/01-eventos-vip/EventosBodaDestino.jsx';

// Landing complementaria
import WebCorporativaApp from './sistemas/05-web-alta-conversion/WebCorporativaApp.jsx';

import { Layers, X, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { sound } from './utils/soundEffects.js';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [showDemoSelector, setShowDemoSelector] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.enabled = nextState;
    if (nextState) sound.playPop();
  };

  // Scroll automático arriba al cambiar de vista
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleBackToHome = () => {
    sound.playPop();
    setCurrentView('home');
  };

  const handleSelectView = (viewId) => {
    sound.playPop();
    setCurrentView(viewId);
    setShowDemoSelector(false);
  };

  // Switch de renderizado de las 25 micro-páginas
  const renderView = () => {
    switch (currentView) {
      // 1. BOCETOS WEB POR INDUSTRIA (5)
      case 'inmobiliaria':
        return <BocetoInmobiliaria onBack={handleBackToHome} />;
      case 'estudio-juridico':
        return <BocetoEstudioJuridico onBack={handleBackToHome} />;
      case 'gastronomia':
        return <BocetoGastronomia onBack={handleBackToHome} />;
      case 'agro-industrial':
        return <BocetoAgroIndustrial onBack={handleBackToHome} />;
      case 'clinica-estetica':
        return <BocetoClinicaEstetica onBack={handleBackToHome} />;

      // 2. AGENTES DE IA (5)
      case '03-agente-ia-whatsapp':
      case 'ai-whatsapp':
        return <ChatbotApp onBack={handleBackToHome} />;
      case 'ai-autos':
        return <AgenteCotizadorAutos onBack={handleBackToHome} />;
      case 'ai-helpdesk':
        return <AgenteHelpdeskIT onBack={handleBackToHome} />;
      case 'ai-salud':
        return <AgenteCitasMedicas onBack={handleBackToHome} />;
      case 'ai-documentos':
        return <AgenteAuditorDocs onBack={handleBackToHome} />;

      // 3. SISTEMAS A MEDIDA & ERPS (5)
      case '04-sistema-gestion-erp':
      case 'erp-gestion':
        return <GestionApp onBack={handleBackToHome} />;
      case 'erp-kanban':
        return <CrmKanbanApp onBack={handleBackToHome} />;
      case 'erp-stock':
        return <InventarioStockApp onBack={handleBackToHome} />;
      case 'erp-rrhh':
        return <RecursosHumanosApp onBack={handleBackToHome} />;
      case 'erp-bi':
        return <AnalyticsBIApp onBack={handleBackToHome} />;

      // 4. LOGÍSTICA & TRANSPORTE B2B (5)
      case '02-logistica-flotas':
      case 'log-flotas':
        return <LogisticaApp onBack={handleBackToHome} />;
      case 'log-ruteo':
        return <LogisticaRuteo onBack={handleBackToHome} />;
      case 'log-taller':
        return <LogisticaTaller onBack={handleBackToHome} />;
      case 'log-fletes':
        return <LogisticaFletes onBack={handleBackToHome} />;
      case 'log-frio':
        return <LogisticaCadenaFrio onBack={handleBackToHome} />;

      // 5. EVENTOS VIP & EXPERIENCIAS (5)
      case '01-eventos-vip':
      case 'event-gala':
        return <EventosApp onBack={handleBackToHome} />;
      case 'event-summit':
        return <EventosSummitTech onBack={handleBackToHome} />;
      case 'event-15':
        return <EventosFiesta15 onBack={handleBackToHome} />;
      case 'event-festival':
        return <EventosFestivalPass onBack={handleBackToHome} />;
      case 'event-boda-destino':
        return <EventosBodaDestino onBack={handleBackToHome} />;

      // Complementaria
      case '05-web-alta-conversion':
        return <WebCorporativaApp onBack={handleBackToHome} />;

      // PORTAFOLIO CENTRAL
      case 'home':
      default:
        return (
          <AgencyHome
            onSelectSystem={handleSelectView}
            onSelectTemplate={handleSelectView}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#171717] text-[#EDEDED]">
      {/* VISTA ACTIVA */}
      {renderView()}

      {/* BOTONES FLOTANTES: AUDIO + EXPLORADOR DE 25 MICRO-PÁGINAS */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Toggle de sonido */}
        <button
          onClick={toggleSound}
          className="p-3 rounded-full bg-[#222222] hover:bg-[#DA0037] text-white border border-[#444444] shadow-lg transition-all cursor-pointer"
          title={soundEnabled ? "Silenciar efectos" : "Activar efectos sonoros"}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
        </button>

        {/* Botón Explorador */}
        <button
          onClick={() => { sound.playPop(); setShowDemoSelector(!showDemoSelector); }}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#222222] hover:bg-[#DA0037] text-white border border-[#444444] shadow-red-glow hover:shadow-red-glow-lg transition-all duration-300 font-mono text-xs font-semibold cursor-pointer group"
          title="Abrir el ecosistema completo (25 micro-páginas)"
        >
          <span className="w-2 h-2 rounded-full bg-[#DA0037] group-hover:bg-white animate-pulse" />
          <Layers className="w-4 h-4 text-[#DA0037] group-hover:text-white transition-colors" />
          <span className="hidden sm:inline">Explorar 25 Micro-Páginas</span>
        </button>
      </div>

      {/* MODAL / DRAWER COMPLETO: 25 DEMOS EN 5 CATEGORÍAS */}
      {showDemoSelector && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
          <div className="bg-[#1c1c1c] border border-[#DA0037]/60 rounded-3xl p-6 max-w-4xl w-full shadow-2xl relative max-h-[92vh] overflow-y-auto space-y-6">
            
            {/* Cabecera del modal */}
            <div className="flex items-center justify-between pb-4 border-b border-[#333] sticky top-0 bg-[#1c1c1c] z-10">
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-[#DA0037] shadow-red-glow animate-pulse" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Ecosistema RED &bull; 25 Micro-Páginas Interactivas
                  </h3>
                  <p className="text-xs text-gray-400 font-mono">5 demos completas por cada uno de los 5 tipos de soluciones</p>
                </div>
              </div>
              <button
                onClick={() => setShowDemoSelector(false)}
                className="p-1.5 rounded-lg bg-[#222] text-gray-400 hover:text-white border border-[#444] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* BOTÓN HOME */}
            <button
              onClick={() => handleSelectView('home')}
              className={`w-full p-3.5 rounded-xl border text-left font-semibold text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer ${
                currentView === 'home'
                  ? 'bg-[#DA0037] text-white border-transparent shadow-red-glow font-bold'
                  : 'bg-[#222] text-[#EDEDED] border-[#444] hover:border-white'
              }`}
            >
              <span>🏠 Página Principal (Agencia RED Soluciones Digitales)</span>
              <span className="font-mono text-xs opacity-80">Landing General</span>
            </button>

            {/* 1. BOCETOS WEB (5) */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37] block font-bold">
                1. WEBS &amp; BOCETOS POR INDUSTRIA (5)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'inmobiliaria', name: '🏛️ Inmobiliaria de Lujo' },
                  { id: 'estudio-juridico', name: '⚖️ Estudio Jurídico & Notarial' },
                  { id: 'gastronomia', name: '☕ Cafetería de Especialidad' },
                  { id: 'agro-industrial', name: '🚜 Agro-Industrial & Maquinaria' },
                  { id: 'clinica-estetica', name: '✨ Clínica Estética & Spa VIP' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectView(item.id)}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      currentView === item.id
                        ? 'bg-[#d4af37] text-black font-bold border-transparent'
                        : 'bg-[#171717] text-gray-300 border-[#333] hover:border-[#d4af37]'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. AGENTES DE IA (5) */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#DA0037] block font-bold">
                2. AGENTES DE IA &amp; AUTOMATIZACIÓN (5)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'ai-whatsapp', name: '💬 Agente WhatsApp 24/7' },
                  { id: 'ai-autos', name: '🚗 Cotizador Automotriz IA' },
                  { id: 'ai-helpdesk', name: '🖥️ Helpdesk IT & Diagnóstico' },
                  { id: 'ai-salud', name: '🩺 Agente de Citas Médicas' },
                  { id: 'ai-documentos', name: '📄 Escáner & Auditor de Docs' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectView(item.id)}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      currentView === item.id
                        ? 'bg-[#DA0037] text-white font-bold border-transparent'
                        : 'bg-[#171717] text-gray-300 border-[#333] hover:border-[#DA0037]'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. SISTEMAS A MEDIDA & ERPS (5) */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 block font-bold">
                3. SISTEMAS A MEDIDA, ERPS &amp; DASHBOARDS (5)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'erp-gestion', name: '💼 ERP de Cobranzas & Balances' },
                  { id: 'erp-kanban', name: '📋 CRM Pipeline Kanban' },
                  { id: 'erp-stock', name: '📦 Almacén con Lector Barras' },
                  { id: 'erp-rrhh', name: '👥 Portal de Talento & RRHH' },
                  { id: 'erp-bi', name: '📊 Business Intelligence & BI' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectView(item.id)}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      currentView === item.id
                        ? 'bg-emerald-500 text-black font-bold border-transparent'
                        : 'bg-[#171717] text-gray-300 border-[#333] hover:border-emerald-500'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. LOGÍSTICA & TRANSPORTE B2B (5) */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 block font-bold">
                4. SOFTWARE PARA LOGÍSTICA &amp; TRANSPORTE (5)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'log-flotas', name: '🚛 Telemetría de 25 Camiones' },
                  { id: 'log-ruteo', name: '🗺️ Ruteo Dinámico & ETA' },
                  { id: 'log-taller', name: '🔧 Taller & Checklist Pre-Viaje' },
                  { id: 'log-fletes', name: '📑 Liquidación de Fletes & Remito' },
                  { id: 'log-frio', name: '❄️ Telemetría IoT Cadena Frío' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectView(item.id)}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      currentView === item.id
                        ? 'bg-cyan-500 text-black font-bold border-transparent'
                        : 'bg-[#171717] text-gray-300 border-[#333] hover:border-cyan-500'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. EVENTOS VIP & EXPERIENCIAS (5) */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#ec4899] block font-bold">
                5. EVENTOS VIP &amp; EXPERIENCIAS INTERACTIVAS (5)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'event-gala', name: '🥂 Gala Camila & Mateo (RSVP)' },
                  { id: 'event-summit', name: '🎤 Tech Summit & Badges' },
                  { id: 'event-15', name: '👑 Fiesta de 15 & Playlist' },
                  { id: 'event-festival', name: '🎸 Festival Sonic & Cashless' },
                  { id: 'event-boda-destino', name: '🍇 Boda en Viñedos Mendoza' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectView(item.id)}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      currentView === item.id
                        ? 'bg-[#ec4899] text-black font-bold border-transparent'
                        : 'bg-[#171717] text-gray-300 border-[#333] hover:border-[#ec4899]'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
