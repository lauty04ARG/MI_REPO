import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Truck, 
  Bot, 
  Calendar, 
  BarChart3, 
  Laptop, 
  ArrowUpRight, 
  Sparkles, 
  Check, 
  Activity, 
  Clock, 
  Send, 
  AlertTriangle 
} from 'lucide-react';

export default function PortfolioGrid({ onSelectSystem }) {
  // Filtro de categorías
  const [activeCategory, setActiveCategory] = useState('Todos');

  // EDITAR AQUÍ: Proyectos y datos de demos interactivos
  const DEMOS = [
    {
      id: "02-logistica-flotas",
      category: "Sistemas & Logística",
      title: "Panel de Tráfico y Flotas B2B",
      client: "Logística Nacional S.A.",
      tag: "SISTEMA INTEGRAL",
      desc: "Plataforma de monitoreo y liquidación de costos de combustible, mantenimiento y ruteo dinámico.",
      systemKey: "02-logistica-flotas",
      renderMockup: () => (
        <div className="bg-[#171717] rounded-xl p-4 border border-[#444444]/60 font-mono text-xs select-none shadow-inner">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#444444]/40">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[#EDEDED] font-bold text-xs">TELEMETRÍA EN VIVO</span>
            </div>
            <span className="text-[10px] text-[#DA0037] bg-[#DA0037]/10 px-2 py-0.5 rounded border border-[#DA0037]/30">GPS ACTIVO</span>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-[#222222] p-2.5 rounded-lg border border-[#444444]/30">
              <span className="text-[10px] text-[#A1A1AA] block">Unidades Activas</span>
              <span className="text-sm font-bold text-[#EDEDED] flex items-center gap-1 mt-0.5">
                <Truck className="w-3.5 h-3.5 text-[#DA0037]" /> 24 / 25
              </span>
            </div>
            <div className="bg-[#222222] p-2.5 rounded-lg border border-[#444444]/30">
              <span className="text-[10px] text-[#A1A1AA] block">Ruta Optimizada</span>
              <span className="text-[11px] font-bold text-emerald-400 truncate block mt-0.5">
                La Plata &rarr; BsAs
              </span>
            </div>
          </div>

          <div className="space-y-1.5 mb-3 bg-[#222222] p-2.5 rounded-lg border border-[#444444]/30">
            <div className="flex justify-between text-[11px]">
              <span className="text-[#A1A1AA]">Ahorro Operativo Combustible:</span>
              <span className="font-bold text-[#DA0037]">+32%</span>
            </div>
            <div className="w-full bg-[#171717] h-2 rounded-full overflow-hidden border border-[#444444]/40">
              <div className="bg-[#DA0037] h-full rounded-full w-[82%]" />
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-amber-400 bg-amber-400/10 p-1.5 rounded border border-amber-400/20">
            <AlertTriangle className="w-3 h-3 shrink-0" />
            <span className="truncate">Unidad #08: Cambio de neumáticos programado</span>
          </div>
        </div>
      )
    },
    {
      id: "03-agente-ia-whatsapp",
      category: "Agentes IA",
      title: "Agente IA WhatsApp 24/7",
      client: "Clínica & Servicios Privados",
      tag: "AUTOMATIZACIÓN IA",
      desc: "Asistente inteligente con procesamiento de lenguaje natural para agendamiento, filtrado y respuestas a cualquier hora.",
      systemKey: "03-agente-ia-whatsapp",
      renderMockup: () => (
        <div className="bg-[#121b22] rounded-xl p-4 border border-[#444444]/60 font-sans text-xs select-none shadow-inner">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#2a3942]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#DA0037] flex items-center justify-center text-white font-bold text-[10px]">
                IA
              </div>
              <div>
                <p className="text-white text-xs font-semibold leading-none">RED Bot Asistente</p>
                <p className="text-[9px] text-emerald-400">En línea 24/7</p>
              </div>
            </div>
            <span className="text-[10px] text-gray-400 font-mono">03:14 AM</span>
          </div>

          <div className="space-y-2 mb-2">
            {/* Mensaje cliente */}
            <div className="flex justify-end">
              <div className="bg-[#005c4b] text-[#e9edef] rounded-lg rounded-tr-none px-3 py-1.5 max-w-[85%] text-[11px] shadow">
                <p>Hola, buenas noches. Quería saber si tienen turno disponible para mañana y qué precio tiene el servicio.</p>
                <span className="text-[9px] text-emerald-200 block text-right mt-0.5">03:14 AM &bull; Entregado</span>
              </div>
            </div>

            {/* Mensaje IA */}
            <div className="flex justify-start">
              <div className="bg-[#202c33] text-[#e9edef] rounded-lg rounded-tl-none px-3 py-1.5 max-w-[85%] text-[11px] border border-[#2a3942] shadow">
                <div className="flex items-center gap-1 text-[#DA0037] text-[10px] font-semibold mb-1">
                  <Bot className="w-3 h-3" /> Respuesta Instantánea (0.4s)
                </div>
                <p>¡Hola! Con gusto. Tenemos cupo a las 10:30 o 16:00 hs. El valor base es $45 USD. ¿Te reservo el lugar a las 10:30?</p>
                <span className="text-[9px] text-gray-400 block text-right mt-0.5">03:14 AM</span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 bg-[#202c33] p-1.5 rounded-lg border border-[#2a3942] text-gray-400 text-[10px]">
            <span className="text-emerald-400 font-bold">&bull;</span>
            <span>Cero pérdida de clientes por demoras nocturnas.</span>
          </div>
        </div>
      )
    },
    {
      id: "01-eventos-vip",
      category: "Web & Eventos",
      title: "Plataforma Interactiva de Eventos & RSVP",
      client: "Celebraciones & Galas VIP",
      tag: "EXPERIENCIA INTERACTIVA",
      desc: "Invitación digital con validación de pases, menú celíaco/vegetariano, playlist sugerida y confirmación por WhatsApp.",
      systemKey: "01-eventos-vip",
      renderMockup: () => (
        <div className="bg-gradient-to-br from-[#1d1b1b] to-[#171717] rounded-xl p-4 border border-[#DA0037]/40 font-sans text-xs select-none shadow-inner">
          <div className="text-center pb-2 mb-2 border-b border-[#444444]/40">
            <span className="text-[10px] font-mono tracking-widest text-[#DA0037] uppercase">GALA PRIVADA 2026</span>
            <p className="text-[#EDEDED] font-serif text-sm font-bold">Camila &amp; Mateo</p>
          </div>

          {/* Mini cuenta regresiva */}
          <div className="grid grid-cols-4 gap-1 text-center my-2 bg-[#222222]/80 p-2 rounded-lg border border-[#444444]/30">
            <div>
              <span className="font-mono font-bold text-xs text-[#DA0037]">14</span>
              <span className="block text-[8px] text-[#A1A1AA]">DÍAS</span>
            </div>
            <div>
              <span className="font-mono font-bold text-xs text-[#EDEDED]">08</span>
              <span className="block text-[8px] text-[#A1A1AA]">HORAS</span>
            </div>
            <div>
              <span className="font-mono font-bold text-xs text-[#EDEDED]">45</span>
              <span className="block text-[8px] text-[#A1A1AA]">MIN</span>
            </div>
            <div>
              <span className="font-mono font-bold text-xs text-[#DA0037]">22</span>
              <span className="block text-[8px] text-[#A1A1AA]">SEG</span>
            </div>
          </div>

          {/* Mini selector de menú y RSVP */}
          <div className="space-y-1.5 my-2">
            <div className="flex items-center justify-between bg-[#171717] px-2 py-1.5 rounded border border-[#444444]/30 text-[10px]">
              <span className="text-[#A1A1AA]">Menú Seleccionado:</span>
              <span className="text-[#EDEDED] font-semibold">Gourmet Tradicional</span>
            </div>
            <div className="w-full py-1.5 bg-[#DA0037] hover:bg-[#b0002c] text-white font-bold text-center rounded text-[11px] shadow-sm flex items-center justify-center gap-1.5">
              <Check className="w-3 h-3" /> Pase VIP Confirmado (QR Activo)
            </div>
          </div>
        </div>
      )
    },
    {
      id: "04-sistema-gestion-erp",
      category: "Sistemas & Logística",
      title: "ERP & Centro de Facturación PYME",
      client: "Distribuidora & Mayoristas",
      tag: "INGENIERÍA DE DATOS",
      desc: "Consolidación de cuentas corrientes, pedidos, control de caja y sincronización automática sin errores de carga.",
      systemKey: "04-sistema-gestion-erp",
      renderMockup: () => (
        <div className="bg-[#171717] rounded-xl p-4 border border-[#444444]/60 font-mono text-xs select-none shadow-inner">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#444444]/40">
            <span className="text-xs font-bold text-[#EDEDED] flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#DA0037]" /> BALANCES DEL MES
            </span>
            <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-800/40">+18.4% vs Mes Ant.</span>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="bg-[#222222] p-2 rounded-lg border border-[#444444]/30">
              <span className="text-[9px] text-[#A1A1AA]">Facturación Total</span>
              <p className="text-xs font-bold text-[#EDEDED]">$42.850 USD</p>
            </div>
            <div className="bg-[#222222] p-2 rounded-lg border border-[#444444]/30">
              <span className="text-[9px] text-[#A1A1AA]">Cobranzas al Día</span>
              <p className="text-xs font-bold text-emerald-400">98.2%</p>
            </div>
          </div>

          <div className="bg-[#222222] p-2 rounded-lg border border-[#444444]/30 text-[10px] space-y-1">
            <div className="flex justify-between text-[#A1A1AA]">
              <span>Tubería de Exportación:</span>
              <span className="text-white">PostgreSQL &bull; Redis</span>
            </div>
            <div className="flex justify-between text-[#A1A1AA]">
              <span>Tiempo de Consulta:</span>
              <span className="text-[#DA0037] font-bold">12ms (Caché activo)</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "05-web-alta-conversion",
      category: "Web & Eventos",
      title: "Landing Corporativa de Alta Conversión",
      client: "Consultoría & Servicios B2B",
      tag: "PERFORMANCE PURA",
      desc: "Estructura pensada con psicología de ventas, velocidad de carga 99/100 en Google PageSpeed y tracking de leads.",
      systemKey: "05-web-alta-conversion",
      renderMockup: () => (
        <div className="bg-[#171717] rounded-xl p-4 border border-[#444444]/60 font-sans text-xs select-none shadow-inner">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#444444]/40">
            <span className="text-[11px] font-bold text-[#EDEDED]">PAGESPEED SCORE</span>
            <div className="flex items-center gap-1 text-emerald-400 font-mono font-bold text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> 99 / 100
            </div>
          </div>

          <div className="space-y-2 mb-2">
            <div className="bg-[#222222] p-2 rounded-lg border border-[#444444]/30">
              <p className="text-[11px] font-semibold text-[#EDEDED]">Tasa de Conversión de Leads</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs font-bold text-[#DA0037]">4.8% Promedio</span>
                <span className="text-[10px] text-gray-400">(vs 1.2% Industria)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1.5 text-center text-[10px]">
              <div className="bg-[#1f1f1f] p-1.5 rounded border border-[#333]">
                <span className="text-[#A1A1AA] block text-[9px]">Carga inicial</span>
                <span className="text-[#EDEDED] font-mono font-bold">0.6s FCP</span>
              </div>
              <div className="bg-[#1f1f1f] p-1.5 rounded border border-[#333]">
                <span className="text-[#A1A1AA] block text-[9px]">Lighthouse SEO</span>
                <span className="text-[#EDEDED] font-mono font-bold">100%</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "ai-documentos",
      category: "Agentes IA",
      title: "Auditor Documental & OCR Neuronal",
      client: "Corporativo & Legaltech",
      tag: "IA DE PRECISIÓN",
      desc: "Escaneo automatizado de contratos y facturas con detección de cláusulas de riesgo y extracción en JSON.",
      systemKey: "ai-documentos",
      renderMockup: () => (
        <div className="bg-[#171717] rounded-xl p-4 border border-[#444444]/60 font-mono text-xs select-none shadow-inner">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#333]">
            <span className="text-[10px] text-gray-400">OCR &bull; SHA256 VALIDADO</span>
            <span className="text-[10px] text-emerald-400">100% Auténtico</span>
          </div>
          <div className="space-y-1.5 bg-[#222] p-2.5 rounded-lg border border-[#333]">
            <div className="flex justify-between text-[11px]">
              <span className="text-gray-400">Cláusula de Penalidad:</span>
              <span className="text-amber-400 font-bold">Detectada</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-gray-400">Monto Comprometido:</span>
              <span className="text-white font-bold">$36.000 USD</span>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-[#DA0037] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DA0037] animate-pulse" />
            <span>Extracción estructurada en 1.2 segundos</span>
          </div>
        </div>
      )
    },
    {
      id: "erp-kanban",
      category: "Sistemas & Logística",
      title: "CRM Pipeline Kanban B2B",
      client: "Equipos Comerciales",
      tag: "GESTIÓN VISUAL",
      desc: "Tablero dinámico para seguir oportunidades comerciales, etapas de negociación y cierres con celebración.",
      systemKey: "erp-kanban",
      renderMockup: () => (
        <div className="bg-[#171717] rounded-xl p-4 border border-[#444444]/60 font-mono text-xs select-none shadow-inner">
          <div className="flex justify-between pb-2 mb-2 border-b border-[#333]">
            <span className="text-white font-bold">PIPELINE ACTIVO</span>
            <span className="text-emerald-400 font-bold">$31.100 USD</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-[10px] text-center my-2">
            <div className="bg-[#222] p-1.5 rounded border border-[#333]">
              <span className="text-gray-400 block text-[8px]">PROSPECTO</span>
              <span className="font-bold text-blue-400">2 Deals</span>
            </div>
            <div className="bg-[#222] p-1.5 rounded border border-[#333]">
              <span className="text-gray-400 block text-[8px]">PROPUESTA</span>
              <span className="font-bold text-amber-400">1 Deal</span>
            </div>
            <div className="bg-[#222] p-1.5 rounded border border-[#333]">
              <span className="text-gray-400 block text-[8px]">GANADO</span>
              <span className="font-bold text-emerald-400">1 ($6.4k)</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "event-summit",
      category: "Web & Eventos",
      title: "Tech Summit & Acreditación Contactless",
      client: "Congresos & Exposiciones",
      tag: "INTERACCIÓN VIVA",
      desc: "Plataforma de agenda por tracks, votación de preguntas a ponentes en tiempo real y credencialización QR.",
      systemKey: "event-summit",
      renderMockup: () => (
        <div className="bg-[#161b22] rounded-xl p-4 border border-[#30363d] font-sans text-xs select-none shadow-inner">
          <div className="flex justify-between pb-2 mb-2 border-b border-[#30363d]">
            <span className="text-[#58a6ff] font-mono text-[10px] font-bold">SUMMIT EN VIVO</span>
            <span className="text-emerald-400 text-[9px] font-mono">1.200 Acreditados</span>
          </div>
          <div className="bg-[#0d1117] p-2 rounded-lg border border-[#30363d] text-[11px] mb-2">
            <p className="font-bold text-white">Agentes Autónomos en Producción</p>
            <p className="text-gray-400 text-[10px]">Speaker: Dr. Hernán Faigenbaum</p>
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
            <span>Sala Principal A</span>
            <span className="text-[#58a6ff]">142 Votos del público</span>
          </div>
        </div>
      )
    }
  ];

  const categories = ["Todos", "Web & Eventos", "Sistemas & Logística", "Agentes IA"];

  const filteredDemos = activeCategory === "Todos"
    ? DEMOS
    : DEMOS.filter(demo => demo.category === activeCategory);

  return (
    <section id="demos" className="py-24 bg-[#171717] border-t border-[#444444]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-mono font-semibold text-[#DA0037] tracking-wider uppercase mb-3">
            // CASOS DE USO Y EXPERIENCIAS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EDEDED] tracking-tight mb-4">
            Demos en Vivo: Mira la tecnología en acción
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Nada de maquetas estáticas vacías ni plantillas genéricas. Cada demo representa una solución funcional programada para resolver necesidades concretas.
          </p>
        </div>

        {/* PESTAÑAS DE FILTRO */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#DA0037] text-[#EDEDED] shadow-red-glow font-bold"
                  : "bg-[#222222] text-[#A1A1AA] hover:text-[#EDEDED] border border-[#444444]/60 hover:border-[#EDEDED]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID DE DEMOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDemos.map((demo) => (
              <motion.div
                key={demo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-[#222222] border border-[#444444]/50 hover:border-[#DA0037]/70 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-red-glow group"
              >
                <div>
                  {/* Encabezado de la demo */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#DA0037] uppercase bg-[#171717] px-2.5 py-1 rounded border border-[#DA0037]/30">
                      {demo.tag}
                    </span>
                    <span className="text-xs text-[#A1A1AA] font-mono">
                      {demo.client}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#EDEDED] mb-2 group-hover:text-white transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] mb-5 leading-relaxed">
                    {demo.desc}
                  </p>

                  {/* MINI-INTERFAZ VISUAL SIMULADA (No img vacías) */}
                  <div className="mb-6 transform transition-transform group-hover:scale-[1.01]">
                    {demo.renderMockup()}
                  </div>
                </div>

                {/* BOTÓN PARA ABRIR SISTEMA COMPLETO */}
                <button
                  onClick={() => onSelectSystem && onSelectSystem(demo.systemKey)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#171717] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold text-[#EDEDED] border border-[#444444]/60 hover:border-transparent transition-all duration-300 shadow-sm cursor-pointer group/btn"
                >
                  <Sparkles className="w-4 h-4 text-[#DA0037] group-hover/btn:text-white transition-colors" />
                  <span>Probar Sistema Completo</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
