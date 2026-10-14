import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check, ArrowRight, MessageSquare, Zap, Clock, DollarSign } from 'lucide-react';

// EDITAR AQUÍ: Teléfono de WhatsApp para recibir cotizaciones
const WHATSAPP_PHONE = "5492210000000";

// EDITAR AQUÍ: Tipos de proyecto y precios base
const PROJECT_TYPES = [
  {
    id: 'web',
    name: 'Landing Page o Web Corporativa',
    basePrice: 250,
    baseWeeks: 3,
    description: 'Diseño responsive de alto rendimiento, optimizado para conversión y SEO.'
  },
  {
    id: 'bot',
    name: 'Agente de IA para WhatsApp / Web',
    basePrice: 350,
    baseWeeks: 2,
    description: 'Atención 24/7, calificación de prospectos y agendamiento automático.'
  },
  {
    id: 'sistema',
    name: 'Sistema a Medida / Panel de Gestión',
    basePrice: 600,
    baseWeeks: 6,
    description: 'Software personalizado para ordenar operaciones y eliminar hojas de cálculo.'
  },
  {
    id: 'logistica',
    name: 'Software de Logística o ERP Integral',
    basePrice: 1500,
    baseWeeks: 10,
    description: 'Gestión de flotas, choferes, combustible, inventario y facturación avanzada.'
  },
  {
    id: 'evento',
    name: 'Plataforma Interactiva para Eventos (RSVP)',
    basePrice: 300,
    baseWeeks: 2,
    description: 'Invitación interactiva con pases QR, selección de menú y confirmación.'
  }
];

// EDITAR AQUÍ: Módulos opcionales y costos adicionales
const OPTIONAL_MODULES = [
  { id: 'ui_custom', label: 'Diseño UI/UX Personalizado Exclusivo', price: 120 },
  { id: 'database', label: 'Base de Datos Relacional (PostgreSQL) + API', price: 180 },
  { id: 'admin_panel', label: 'Panel Administrativo con Métricas y Roles', price: 250 },
  { id: 'whatsapp_api', label: 'Conexión Oficial WhatsApp Business API', price: 150 },
  { id: 'payments', label: 'Pasarela de Pagos Online (Mercado Pago / Stripe)', price: 160 },
  { id: 'ai_rag', label: 'Entrenamiento IA con Documentación Interna (RAG)', price: 280 }
];

export default function QuoteCalculator() {
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
  const [selectedModules, setSelectedModules] = useState(['ui_custom', 'admin_panel']);
  const [deliverySpeed, setDeliverySpeed] = useState('standard'); // 'standard' o 'express'

  const toggleModule = (id) => {
    if (selectedModules.includes(id)) {
      setSelectedModules(selectedModules.filter(m => m !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  // Cálculo del presupuesto en tiempo real
  const calculation = useMemo(() => {
    const modulesTotal = selectedModules.reduce((acc, modId) => {
      const found = OPTIONAL_MODULES.find(m => m.id === modId);
      return acc + (found ? found.price : 0);
    }, 0);

    let subtotal = selectedType.basePrice + modulesTotal;
    let weeks = selectedType.baseWeeks;

    if (deliverySpeed === 'express') {
      subtotal = Math.round(subtotal * 1.25);
      weeks = Math.max(1, Math.round(weeks * 0.65));
    }

    return {
      totalUSD: subtotal,
      estimatedWeeks: weeks
    };
  }, [selectedType, selectedModules, deliverySpeed]);

  // Generador de mensaje de WhatsApp formateado
  const whatsappUrl = useMemo(() => {
    const moduleNames = selectedModules.map(mId => {
      const m = OPTIONAL_MODULES.find(mod => mod.id === mId);
      return m ? m.label : mId;
    }).join(', ');

    const text = `Hola RED Soluciones Digitales! Estuve usando el cotizador online:
*Proyecto:* ${selectedType.name}
*Módulos seleccionados:* ${moduleNames || 'Básico'}
*Velocidad:* ${deliverySpeed === 'express' ? 'Prioritaria / Express' : 'Estándar'}
*Estimado:* ~$${calculation.totalUSD} USD (${calculation.estimatedWeeks} semanas)
¿Podemos coordinar para avanzar con el alcance?`;

    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  }, [selectedType, selectedModules, deliverySpeed, calculation]);

  return (
    <section id="calculadora" className="py-24 bg-[#171717] border-t border-[#444444]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-mono font-semibold text-[#DA0037] tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
            <Calculator className="w-4 h-4 text-[#DA0037]" />
            // COTIZADOR INTERACTIVO TRANSPARENTE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EDEDED] tracking-tight mb-4">
            Calcula el presupuesto estimado de tu solución
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Sin precios ocultos ni sorpresas. Elige el tipo de solución y los módulos que tu negocio necesita para obtener una referencia precisa de inversión y tiempos.
          </p>
        </div>

        {/* Layout en 2 columnas: Selector a la izquierda, Resumen en vivo a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMNA IZQUIERDA: Opciones de configuración */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Paso 1: Tipo de Proyecto */}
            <div className="bg-[#222222] p-6 rounded-2xl border border-[#444444]/40">
              <span className="text-xs font-mono font-semibold text-[#DA0037] tracking-wider uppercase block mb-3">
                PASO 1: SELECCIONA EL TIPO DE PROYECTO
              </span>
              <div className="space-y-2.5">
                {PROJECT_TYPES.map(type => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      selectedType.id === type.id
                        ? "bg-[#171717] border-[#DA0037] shadow-red-glow"
                        : "bg-[#1c1c1c] border-[#444444]/40 hover:border-[#A1A1AA]/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm sm:text-base text-[#EDEDED]">
                        {type.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#DA0037] bg-[#DA0037]/10 px-2.5 py-1 rounded border border-[#DA0037]/20">
                        Base ${type.basePrice} USD
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] mt-1.5 leading-relaxed">
                      {type.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Paso 2: Módulos Opcionales */}
            <div className="bg-[#222222] p-6 rounded-2xl border border-[#444444]/40">
              <span className="text-xs font-mono font-semibold text-[#DA0037] tracking-wider uppercase block mb-3">
                PASO 2: AGREGA MÓDULOS O INTEGRACIONES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {OPTIONAL_MODULES.map(mod => {
                  const isSelected = selectedModules.includes(mod.id);
                  return (
                    <div
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer select-none transition-all duration-200 flex items-start gap-3 ${
                        isSelected
                          ? "bg-[#171717] border-[#DA0037]/80 text-[#EDEDED]"
                          : "bg-[#1c1c1c] border-[#444444]/40 text-[#A1A1AA] hover:text-[#EDEDED]"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected ? "bg-[#DA0037] text-white" : "border border-[#444444] bg-[#222222]"
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium leading-snug">{mod.label}</p>
                        <span className="text-[11px] font-mono font-bold text-[#DA0037] mt-1 block">
                          +${mod.price} USD
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Paso 3: Prioridad de Entrega */}
            <div className="bg-[#222222] p-6 rounded-2xl border border-[#444444]/40">
              <span className="text-xs font-mono font-semibold text-[#DA0037] tracking-wider uppercase block mb-3">
                PASO 3: VELOCIDAD Y PRIORIDAD
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setDeliverySpeed('standard')}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    deliverySpeed === 'standard'
                      ? "bg-[#171717] border-[#DA0037] shadow-red-glow"
                      : "bg-[#1c1c1c] border-[#444444]/40 hover:border-[#EDEDED]/30"
                  }`}
                >
                  <p className="font-semibold text-sm text-[#EDEDED]">Plazo Estándar</p>
                  <p className="text-xs text-[#A1A1AA] mt-1">Calendario regular de ingeniería y pruebas continuas.</p>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliverySpeed('express')}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    deliverySpeed === 'express'
                      ? "bg-[#171717] border-[#DA0037] shadow-red-glow"
                      : "bg-[#1c1c1c] border-[#444444]/40 hover:border-[#EDEDED]/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm text-[#EDEDED] flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#DA0037]" /> Prioridad Express
                    </p>
                    <span className="text-[10px] font-mono text-[#DA0037] bg-[#DA0037]/10 px-1.5 py-0.5 rounded">+25%</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] mt-1">Dedicación exclusiva full-time para reducir tiempos un 35%.</p>
                </button>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: Resumen de Inversión Fijo/Sticky */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl bg-gradient-to-b from-[#222222] to-[#1a1a1a] border border-[#DA0037]/50 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DA0037]/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs font-mono font-bold tracking-widest text-[#DA0037] uppercase block mb-1">
                RESUMEN DE ESTIMACIÓN
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#EDEDED] mb-6">
                Presupuesto del Proyecto
              </h3>

              <div className="space-y-3 pb-6 border-b border-[#444444]/40 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-[#A1A1AA]">
                  <span>Solución Base:</span>
                  <span className="text-[#EDEDED] font-semibold">{selectedType.name}</span>
                </div>
                <div className="flex justify-between items-center text-[#A1A1AA]">
                  <span>Módulos Adicionales:</span>
                  <span className="text-[#EDEDED] font-semibold">{selectedModules.length} seleccionados</span>
                </div>
                <div className="flex justify-between items-center text-[#A1A1AA]">
                  <span>Modalidad:</span>
                  <span className="text-[#EDEDED] font-semibold">
                    {deliverySpeed === 'express' ? 'Express (Acelerado)' : 'Estándar'}
                  </span>
                </div>
              </div>

              {/* Métricas destacadas */}
              <div className="py-6 space-y-4">
                <div>
                  <span className="text-xs font-mono text-[#A1A1AA] block uppercase">Inversión Estimada:</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-4xl sm:text-5xl font-black text-[#DA0037] font-mono">
                      ${calculation.totalUSD}
                    </span>
                    <span className="text-base font-bold text-[#EDEDED] font-mono">USD</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#A1A1AA] bg-[#171717] p-3 rounded-xl border border-[#444444]/30">
                  <Clock className="w-4 h-4 text-[#DA0037] shrink-0" />
                  <span>
                    Tiempo estimado: <strong className="text-[#EDEDED]">{calculation.estimatedWeeks} a {calculation.estimatedWeeks + 1} semanas</strong>
                  </span>
                </div>
              </div>

              {/* Botón WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#DA0037] hover:bg-[#b0002c] text-[#EDEDED] font-bold text-sm shadow-red-glow hover:shadow-red-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar cotización por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-[#A1A1AA] text-center mt-3">
                * Estimación referencial sin compromiso. El presupuesto final se ajusta en una reunión técnica de 20 minutos.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
