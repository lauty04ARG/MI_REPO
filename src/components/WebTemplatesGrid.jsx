import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, /* ...otros íconos que ya tengas... */ } from 'lucide-react';
import { 
  Building2, 
  Scale, 
  UtensilsCrossed, 
  Tractor, 
  ArrowRight, 
  Eye, 
  Palette, 
  Check 
} from 'lucide-react';

export default function WebTemplatesGrid({ onSelectTemplate }) {
  // EDITAR AQUÍ: Datos de los 4 bocetos web estáticos
  const TEMPLATES = [
    {
      id: "inmobiliaria",
      title: "Inmobiliaria Minimalista de Lujo",
      subtitle: "Dark Luxury & High-End Properties",
      industry: "Real Estate & Arquitectura",
      icon: Building2,
      accentColor: "#DA0037",
      features: [
        "Filtros de propiedades de alta gama",
        "Galería inmersiva con especificaciones",
        "Formulario de contacto privado para inversores"
      ],
      previewSnippet: {
        bg: "from-[#1a1917] to-[#121212]",
        title: "Villa Magnolias &bull; USD 850.000",
        tag: "Nordelta &bull; 450 m²",
        status: "Exclusiva"
      }
    },
    {
      id: "estudio-juridico",
      title: "Estudio Jurídico & Notarial",
      subtitle: "Sobriedad Corporativa & Respaldo Legal",
      industry: "Derecho & Finanzas",
      icon: Scale,
      accentColor: "#c29b38",
      features: [
        "Especialidades con desglose procesal",
        "Presentación de socios y trayectoria",
        "Canal seguro de consultas confidenciales"
      ],
      previewSnippet: {
        bg: "from-[#0f172a] to-[#171717]",
        title: "Litigios Complejos & Compliance",
        tag: "25+ Años de Respaldo",
        status: "Sede Central"
      }
    },
    {
      id: "gastronomia",
      title: "Cafetería de Especialidad & Restó",
      subtitle: "Estética Cálida & Sensorial Moderna",
      industry: "Gastronomía & Cafetería",
      icon: UtensilsCrossed,
      accentColor: "#f59e0b",
      features: [
        "Carta digital categorizada con notas de cata",
        "Horarios y ubicación con mapa interactivo",
        "Módulo de reserva rápida para grupos"
      ],
      previewSnippet: {
        bg: "from-[#291811] to-[#171717]",
        title: "Flat White de Origen Etíope",
        tag: "Tostado Semanal &bull; Notas Florales",
        status: "Carta de Estación"
      }
    },
    {
      id: "agro-industrial",
      title: "Agro-Industrial & Maquinaria B2B",
      subtitle: "Robustez Industrial para el Campo y Fábrica",
      industry: "Agro, Corralón & Industria Pesada",
      icon: Tractor,
      accentColor: "#ea580c",
      features: [
        "Catálogo de repuestos y equipos pesados",
        "Fichas técnicas descargables en PDF",
        "Cotizador directo por volumen y flete"
      ],
      previewSnippet: {
        bg: "from-[#1c1917] to-[#171717]",
        title: "Tolva Autodescargable 35 TN",
        tag: "Chapa 1/4 &bull; Entrega Inmediata",
        status: "Stock B2B"
      }
    },
    {
      id: "clinica-estetica",
      title: "Clínica de Estética & Wellness VIP",
      subtitle: "Medicina Estética & Longevidad de Alta Gama",
      industry: "Salud, Estética & Spa de Lujo",
      icon: Sparkles,
      accentColor: "#f472b6",
      features: [
        "Slider interactivo de antes y después",
        "Catálogo de protocolos médicos con tiempos",
        "Reserva con concierge VIP directo"
      ],
      previewSnippet: {
        bg: "from-[#291726] to-[#120e13]",
        title: "Láser PicoSure &bull; Glow Facial",
        tag: "Colágeno +84% &bull; Textura de Seda",
        status: "Sesión VIP"
      }
    }
  ];

  return (
    <section id="bocetos" className="py-24 bg-[#141414] border-t border-[#444444]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-mono font-semibold text-[#DA0037] tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
            <Palette className="w-4 h-4 text-[#DA0037]" />
            // BOCETOS WEB ESTÁTICOS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EDEDED] tracking-tight mb-4">
            Diseños Web adaptados a la identidad de cada rubro
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Cada industria tiene su propio lenguaje visual y patrón de confianza. Aquí puedes explorar bocetos maquetados con código limpio, listos para desplegar.
          </p>
        </div>

        {/* GRID DE 4 BOCETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEMPLATES.map((tpl, idx) => {
            const Icon = tpl.icon;
            return (
              <motion.div
                key={tpl.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#222222] rounded-2xl border border-[#444444]/40 hover:border-[#DA0037]/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-red-glow group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#171717] text-[#DA0037] border border-[#DA0037]/30">
                      {tpl.industry}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#171717] border border-[#444444]/60 flex items-center justify-center text-[#EDEDED] group-hover:text-[#DA0037] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#EDEDED] mb-1 group-hover:text-white transition-colors">
                    {tpl.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] mb-6">
                    {tpl.subtitle}
                  </p>

                  {/* PREVIEW CARD ESTILIZADA */}
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${tpl.previewSnippet.bg} border border-[#444444]/50 mb-6 font-sans`}>
                    <div className="flex items-center justify-between text-[10px] text-gray-400 mb-2">
                      <span className="uppercase font-mono tracking-widest text-[#EDEDED]">Previsualización</span>
                      <span className="px-2 py-0.5 rounded bg-black/40 text-emerald-400 font-mono text-[9px]">
                        {tpl.previewSnippet.status}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-white mb-1">
                      {tpl.previewSnippet.title}
                    </p>
                    <p className="text-xs text-gray-300 font-mono">
                      {tpl.previewSnippet.tag}
                    </p>
                  </div>

                  {/* CARACTERÍSTICAS CLAVE */}
                  <div className="space-y-2 mb-6">
                    {tpl.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#A1A1AA]">
                        <Check className="w-3.5 h-3.5 text-[#DA0037] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BOTÓN EXPLORAR BOCETO */}
                <button
                  onClick={() => onSelectTemplate && onSelectTemplate(tpl.id)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#171717] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold text-[#EDEDED] border border-[#444444]/60 hover:border-transparent transition-all duration-300 cursor-pointer group/btn"
                >
                  <Eye className="w-4 h-4 text-[#DA0037] group-hover/btn:text-white transition-colors" />
                  <span>Ver Boceto en Pantalla Completa</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
