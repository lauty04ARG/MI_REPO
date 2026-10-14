import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Bot, 
  Database, 
  Truck, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';

// EDITAR AQUÍ: Datos de los 4 servicios especializados, precios e inversión base
const SERVICES_DATA = [
  {
    id: "web-experiencias",
    badge: "PRESENCIA Y CONVERSIÓN",
    title: "Desarrollo Web y Experiencias",
    icon: Globe,
    desc: "Sitios web rápidos, intuitivos y diseñados para generar credibilidad inmediata ante cualquier cliente.",
    obtenes: "Landing pages corporativas, portafolios y sistemas interactivos con animaciones para eventos (casamientos/15s con confirmación por WhatsApp).",
    impacto: "Presencia premium y gestión automatizada.",
    // EDITAR AQUÍ: Tiempo e inversión base
    tiempo: "2 a 4 semanas",
    inversion: "Desde $250 USD",
    targetDemo: "01-eventos-vip"
  },
  {
    id: "agentes-ia",
    badge: "ATENCIÓN INMEDIATA",
    title: "Agentes de IA y Chatbots",
    icon: Bot,
    desc: "Modelos inteligentes que responden consultas, filtran prospectos y agendan turnos en tiempo real.",
    obtenes: "Asistentes virtuales en WhatsApp/Web activos 24/7.",
    impacto: "Cero clientes perdidos por demora y ahorro de sueldos operativos.",
    // EDITAR AQUÍ: Tiempo e inversión base
    tiempo: "2 a 3 semanas",
    inversion: "Setup desde $350 USD",
    targetDemo: "03-agente-ia-whatsapp"
  },
  {
    id: "sistemas-medida",
    badge: "CONTROL TOTAL",
    title: "Sistemas a Medida e Ingeniería de Datos",
    icon: Database,
    desc: "Cuando el Excel no da abasto, construimos tu propio software centralizado y tuberías de datos automáticas.",
    obtenes: "Paneles administrativos, gestión de clientes/legajos y reportes en vivo.",
    impacto: "0% error humano en carga de datos.",
    // EDITAR AQUÍ: Tiempo e inversión base
    tiempo: "1 a 2 meses",
    inversion: "Desde $600 USD",
    targetDemo: "04-sistema-gestion-erp"
  },
  {
    id: "logistica-transporte",
    badge: "ESPECIALIDAD B2B",
    title: "Software para Logística y Transporte",
    icon: Truck,
    desc: "Sistemas diseñados desde adentro de la operación comercial para empresas de flotas y larga distancia.",
    obtenes: "Control de unidades, mantenimiento de carrocerías, asignación de choferes y cálculo de ruteo/viáticos reales.",
    impacto: "Ahorro directo en combustible y descarte de costos de ruta obsoletos.",
    // EDITAR AQUÍ: Tiempo e inversión base
    tiempo: "2 a 4 meses",
    inversion: "Proyectos desde $1.500 USD",
    targetDemo: "02-logistica-flotas"
  }
];

export default function Services({ onSelectSystem }) {
  return (
    <section id="servicios" className="py-24 bg-[#171717] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO CENTRADO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-mono font-semibold text-[#DA0037] tracking-wider uppercase mb-3">
            // SOLUCIONES ESPECIALIZADAS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EDEDED] tracking-tight mb-4">
            Tecnología de punta explicada para tu negocio
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Sin tecnicismos innecesarios. Creamos herramientas prácticas que resuelven problemas diarios y multiplican tu rentabilidad.
          </p>
        </div>

        {/* GRID DE 4 TARJETAS GRANDES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl bg-[#222222] border border-[#444444]/40 hover:border-[#DA0037]/60 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-red-glow"
              >
                {/* Cabecera de la tarjeta: Icono + Badge */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#171717] border border-[#444444]/60 flex items-center justify-center text-[#DA0037] group-hover:scale-110 group-hover:border-[#DA0037]/50 transition-all duration-300 shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1.5 rounded-full bg-[#171717] text-[#DA0037] border border-[#DA0037]/30 shadow-sm">
                      {service.badge}
                    </span>
                  </div>

                  {/* Título y descripción */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#EDEDED] mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Sección inferior dividida: Obtenés, Impacto, Tiempo, Inversión */}
                <div className="pt-6 border-t border-[#444444]/40 space-y-4">
                  
                  {/* Obtenés */}
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#DA0037] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#EDEDED]">Obtenés: </span>
                      <span className="text-[#A1A1AA]">{service.obtenes}</span>
                    </div>
                  </div>

                  {/* Impacto */}
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <TrendingUp className="w-4 h-4 text-[#DA0037] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#EDEDED]">Impacto: </span>
                      <span className="text-[#A1A1AA]">{service.impacto}</span>
                    </div>
                  </div>

                  {/* Métricas: Tiempo e Inversión */}
                  <div className="grid grid-cols-2 gap-3 pt-3 mt-2 border-t border-[#444444]/30 bg-[#171717]/50 p-3 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#A1A1AA]" />
                      <div>
                        <p className="text-[10px] uppercase font-mono text-[#A1A1AA]">Tiempo estimado</p>
                        <p className="text-xs sm:text-sm font-semibold text-[#EDEDED]">{service.tiempo}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#DA0037]" />
                      <div>
                        <p className="text-[10px] uppercase font-mono text-[#A1A1AA]">Inversión base</p>
                        <p className="text-xs sm:text-sm font-bold text-[#DA0037]">{service.inversion}</p>
                      </div>
                    </div>
                  </div>

                  {/* Botón de acción interactiva si existe demo */}
                  {onSelectSystem && (
                    <button
                      onClick={() => onSelectSystem(service.targetDemo)}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#171717] hover:bg-[#DA0037] text-xs font-semibold text-[#EDEDED] border border-[#444444]/60 hover:border-transparent transition-all duration-200 group/btn"
                    >
                      <span>Probar Demo Funcional de este Servicio</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  )}

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
