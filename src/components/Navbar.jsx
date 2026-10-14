import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, MessageSquare, Terminal } from 'lucide-react';

// EDITAR AQUÍ: Número de WhatsApp para cotizaciones directas (Formato internacional sin signos: Ej: 5492210000000)
const WHATSAPP_PHONE = "5492210000000";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, quiero cotizar un proyecto con RED Soluciones Digitales.");

export default function Navbar({ onNavigate, currentView = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('home', targetId);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#171717]/85 border-b border-[#444444]/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO: Punto Rojo + RED + Soluciones Digitales */}
        <a 
          href="#inicio" 
          onClick={(e) => handleLinkClick(e, 'inicio')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="relative flex items-center justify-center">
            {/* Punto rojo con halo pulsante */}
            <span className="w-3.5 h-3.5 rounded-full bg-[#DA0037] shadow-red-glow transition-transform duration-300 group-hover:scale-125" />
            <span className="absolute w-3.5 h-3.5 rounded-full bg-[#DA0037] animate-ping opacity-75" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#EDEDED] flex items-center gap-1.5">
              RED <span className="font-light text-sm sm:text-base text-[#A1A1AA] tracking-wider uppercase">Soluciones Digitales</span>
            </span>
            <span className="text-[10px] text-[#A1A1AA] font-mono tracking-widest uppercase -mt-1 hidden sm:block">
              Software &bull; Datos &bull; Automatización IA
            </span>
          </div>
        </a>

        {/* ENLACES CENTRALES (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#A1A1AA]">
          <a 
            href="#servicios" 
            onClick={(e) => handleLinkClick(e, 'servicios')}
            className="hover:text-[#EDEDED] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#DA0037] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Soluciones
          </a>
          <a 
            href="#demos" 
            onClick={(e) => handleLinkClick(e, 'demos')}
            className="hover:text-[#EDEDED] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#DA0037] after:absolute after:bottom-0 after:left-0 after:transition-all flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#DA0037]"></span>
            Demos en Vivo
          </a>
          <a 
            href="#bocetos" 
            onClick={(e) => handleLinkClick(e, 'bocetos')}
            className="hover:text-[#EDEDED] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#DA0037] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Bocetos Web
          </a>
          <a 
            href="#calculadora" 
            onClick={(e) => handleLinkClick(e, 'calculadora')}
            className="hover:text-[#EDEDED] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#DA0037] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Cotizador
          </a>
          <a 
            href="#respaldo" 
            onClick={(e) => handleLinkClick(e, 'respaldo')}
            className="hover:text-[#EDEDED] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#DA0037] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Respaldo
          </a>
        </nav>

        {/* BOTÓN DERECHO: Cotizar Proyecto (WhatsApp directo) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            // EDITAR AQUÍ: Enlace de WhatsApp
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#DA0037] hover:bg-[#b0002c] text-[#EDEDED] font-semibold text-sm shadow-red-glow hover:shadow-red-glow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Cotizar Proyecto</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-md bg-[#DA0037] text-[#EDEDED] text-xs font-semibold"
          >
            Cotizar
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#222222] text-[#EDEDED] border border-[#444444]/60 hover:text-[#DA0037] transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171717] border-b border-[#444444]/60 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#A1A1AA]">
            <a
              href="#servicios"
              onClick={(e) => handleLinkClick(e, 'servicios')}
              className="py-2 hover:text-[#EDEDED] transition-colors flex items-center justify-between"
            >
              <span>Soluciones Especializadas</span>
              <span className="text-xs text-[#DA0037] font-mono">01</span>
            </a>
            <a
              href="#demos"
              onClick={(e) => handleLinkClick(e, 'demos')}
              className="py-2 hover:text-[#EDEDED] transition-colors flex items-center justify-between"
            >
              <span>Demos en Vivo (Sistemas)</span>
              <span className="text-xs text-[#DA0037] font-mono">02</span>
            </a>
            <a
              href="#bocetos"
              onClick={(e) => handleLinkClick(e, 'bocetos')}
              className="py-2 hover:text-[#EDEDED] transition-colors flex items-center justify-between"
            >
              <span>Bocetos Web Estáticos</span>
              <span className="text-xs text-[#DA0037] font-mono">03</span>
            </a>
            <a
              href="#calculadora"
              onClick={(e) => handleLinkClick(e, 'calculadora')}
              className="py-2 hover:text-[#EDEDED] transition-colors flex items-center justify-between"
            >
              <span>Calculadora de Presupuesto</span>
              <span className="text-xs text-[#DA0037] font-mono">04</span>
            </a>
            <a
              href="#respaldo"
              onClick={(e) => handleLinkClick(e, 'respaldo')}
              className="py-2 hover:text-[#EDEDED] transition-colors flex items-center justify-between"
            >
              <span>Respaldo de Ingeniería UTN</span>
              <span className="text-xs text-[#DA0037] font-mono">05</span>
            </a>
          </div>

          <div className="pt-4 border-t border-[#444444]/40">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#DA0037] hover:bg-[#b0002c] text-[#EDEDED] font-semibold text-sm shadow-red-glow transition-all"
            >
              <span>Cotizar Proyecto Inmediato</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
