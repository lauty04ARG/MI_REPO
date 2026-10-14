import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Layers, Cpu, ShieldCheck } from 'lucide-react';

export default function Hero({ onNavigate }) {
  const handleScroll = (id) => {
    if (onNavigate) {
      onNavigate('home', id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#171717]">
      {/* Luces y mallas de fondo en acento rojo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#DA0037]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[200px] bg-[#DA0037]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      {/* Cuadrícula sutil de fondo */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#EDEDED 1px, transparent 1px), linear-gradient(90deg, #EDEDED 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* BADGE SUPERIOR */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#222222]/90 border border-[#444444]/60 shadow-lg backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#DA0037] animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-[#EDEDED]">
            RED Soluciones Digitales <span className="text-[#DA0037] font-bold">&bull;</span> Software &amp; IA de Alta Precisión
          </span>
        </motion.div>

        {/* TÍTULO GIGANTE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#EDEDED] leading-[1.12] mb-6 max-w-4xl mx-auto"
        >
          Desarrollo Web, Software y Automatización.{' '}
          <span className="relative inline-block text-[#DA0037] whitespace-nowrap">
            Sin vueltas.
            <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-[4px] sm:h-[6px] bg-[#DA0037] rounded-full shadow-red-glow"></span>
          </span>
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed mb-10 font-normal"
        >
          Creamos ecosistemas digitales a medida: desde sistemas web y eventos interactivos, hasta agentes de IA para escalar tu operación.
        </motion.p>

        {/* DOS BOTONES CENTRADOS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          {/* Botón Principal */}
          <button
            onClick={() => handleScroll('servicios')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#DA0037] hover:bg-[#b0002c] text-[#EDEDED] font-bold text-base shadow-red-glow hover:shadow-red-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Ver Soluciones</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Botón Secundario */}
          <button
            onClick={() => handleScroll('demos')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#222222] hover:bg-[#2c2c2c] text-[#EDEDED] border border-[#444444] hover:border-[#EDEDED]/40 font-semibold text-base transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Layers className="w-4 h-4 text-[#DA0037]" />
            <span>Nuestros Proyectos &amp; Demos</span>
          </button>
        </motion.div>

        {/* FILA INFERIOR SUTIL CON TECNOLOGÍAS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-[#444444]/30 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono text-[#A1A1AA]/80"
        >
          <span className="text-[#DA0037] font-semibold text-xs tracking-wider uppercase mr-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" /> Stack de Alta Eficiencia:
          </span>
          <span className="hover:text-[#EDEDED] transition-colors">React</span>
          <span className="text-[#DA0037]">&bull;</span>
          <span className="hover:text-[#EDEDED] transition-colors">Tailwind CSS</span>
          <span className="text-[#DA0037]">&bull;</span>
          <span className="hover:text-[#EDEDED] transition-colors">Python</span>
          <span className="text-[#DA0037]">&bull;</span>
          <span className="hover:text-[#EDEDED] transition-colors">FastAPI</span>
          <span className="text-[#DA0037]">&bull;</span>
          <span className="hover:text-[#EDEDED] transition-colors">PostgreSQL</span>
          <span className="text-[#DA0037]">&bull;</span>
          <span className="hover:text-[#EDEDED] transition-colors">Docker</span>
        </motion.div>

      </div>
    </section>
  );
}
