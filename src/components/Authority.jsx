import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, Code2, Globe2, Award, Zap } from 'lucide-react';

export default function Authority() {
  return (
    <section id="respaldo" className="py-24 bg-[#171717] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CONTENEDOR GRANDE CON BORDES REDONDEADOS Y FONDO OSCURO DEGRADADO */}
        <div className="rounded-3xl bg-gradient-to-br from-[#222222] via-[#1c1c1c] to-[#171717] border border-[#444444]/50 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Luz de acento sutil en esquina */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#DA0037]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* COLUMNA IZQUIERDA (7 columnas en PC) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge rojo */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171717] border border-[#DA0037]/40 text-[#DA0037] text-xs font-mono font-bold tracking-wider uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>RESPALDO DE INGENIERÍA</span>
              </div>

              {/* Título grande */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EDEDED] tracking-tight leading-tight">
                Desarrollo con rigor académico e internacional.
              </h2>

              {/* Párrafo descriptivo */}
              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
                Soluciones estructuradas bajo los estándares de la <strong>Ingeniería en Sistemas de Información (UTN)</strong> y certificaciones internacionales (<strong>Cambridge FCE</strong>). Combinamos análisis técnico con experiencia real en administración operativa y tráfico comercial para resolver cuellos de botella reales.
              </p>

              {/* 3 Ítems en fila con iconos rojos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#444444]/40">
                <div className="flex items-center gap-3 bg-[#171717]/60 p-3 rounded-xl border border-[#444444]/30">
                  <div className="w-9 h-9 rounded-lg bg-[#DA0037]/15 border border-[#DA0037]/30 flex items-center justify-center text-[#DA0037] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#EDEDED]">
                    Ingeniería UTN
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-[#171717]/60 p-3 rounded-xl border border-[#444444]/30">
                  <div className="w-9 h-9 rounded-lg bg-[#DA0037]/15 border border-[#DA0037]/30 flex items-center justify-center text-[#DA0037] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#EDEDED]">
                    Arquitectura Escalable
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-[#171717]/60 p-3 rounded-xl border border-[#444444]/30">
                  <div className="w-9 h-9 rounded-lg bg-[#DA0037]/15 border border-[#DA0037]/30 flex items-center justify-center text-[#DA0037] shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#EDEDED]">
                    100% Código Limpio y Mantenible
                  </span>
                </div>
              </div>

            </div>

            {/* COLUMNA DERECHA: Tarjeta destacada con 0% FRICCIÓN OPERATIVA */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md rounded-2xl bg-[#171717] border border-[#DA0037]/40 p-8 sm:p-10 text-center relative shadow-red-glow"
              >
                {/* Glow decorativo interior */}
                <div className="absolute inset-0 bg-radial-gradient from-[#DA0037]/5 to-transparent rounded-2xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Gigante 0% */}
                  <span className="block text-7xl sm:text-8xl font-black text-[#DA0037] font-mono tracking-tighter drop-shadow-lg leading-none mb-2">
                    0%
                  </span>

                  {/* Subtítulo FRICCIÓN OPERATIVA */}
                  <h3 className="text-lg sm:text-xl font-black tracking-widest text-white uppercase mb-4">
                    FRICCIÓN OPERATIVA
                  </h3>

                  {/* Línea divisoria decorativa */}
                  <div className="w-16 h-1 bg-[#DA0037] mx-auto rounded-full mb-6" />

                  {/* Texto descriptivo */}
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    Diseñado para que fundadores de marcas y negocios deleguen la tecnología sin dolores de cabeza técnicos.
                  </p>

                  <div className="mt-6 pt-6 border-t border-[#444444]/40 flex items-center justify-center gap-2 text-xs font-mono text-[#EDEDED]">
                    <Zap className="w-4 h-4 text-[#DA0037]" />
                    <span>Entrega predecible &bull; SLA garantizado</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
