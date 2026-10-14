import React, { useState } from 'react';
import { 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Calculator, 
  PhoneCall, 
  Sparkles, 
  Award, 
  BarChart2 
} from 'lucide-react';

// EDITAR AQUÍ: Parámetros del simulador y WhatsApp
const CONVERSION_CONFIG = {
  whatsAppPhone: "5492210000000",
  agencyStandardRate: 0.048, // 4.8% de conversión optimizada
  marketStandardRate: 0.012  // 1.2% promedio de mercado
};

export default function WebCorporativaApp({ onBack }) {
  // Simulador de ROI
  const [traffic, setTraffic] = useState(3000);
  const [ticketUSD, setTicketUSD] = useState(150);

  // Formulario de prospecto
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Desarrollo Web');
  const [submitted, setSubmitted] = useState(false);

  // Cálculos de ROI
  const currentLeads = Math.round(traffic * CONVERSION_CONFIG.marketStandardRate);
  const currentRevenue = currentLeads * ticketUSD;

  const redLeads = Math.round(traffic * CONVERSION_CONFIG.agencyStandardRate);
  const redRevenue = redLeads * ticketUSD;

  const extraRevenue = redRevenue - currentRevenue;

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (!company.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#EDEDED] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* BARRA SUPERIOR DE NAVEGACIÓN */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#444444]/40">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#222222] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#444444]/60 cursor-pointer text-[#EDEDED]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#DA0037] uppercase bg-[#171717] px-3 py-1.5 rounded-full border border-[#DA0037]/30">
          DEMO FUNCIONAL &bull; SISTEMA 05
        </span>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* PORTADA LANDING CON PROPUESTA DE VALOR */}
        <div className="text-center rounded-3xl bg-gradient-to-b from-[#222222] to-[#171717] border border-[#DA0037]/30 p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#DA0037] uppercase mb-4">
            <Zap className="w-4 h-4" />
            <span>INGENIERÍA ORIENTADA A CONVERSIÓN REAL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 max-w-3xl mx-auto leading-tight">
            Sitios web que no solo se ven elegantes: multiplican tus ventas.
          </h1>

          <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto mb-8">
            Diseñamos estructuras basadas en psicología de compra, tiempos de carga inferiores a 0.8s y llamados a la acción sin fricción.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-gray-300">
            <span className="bg-[#171717] px-3 py-1.5 rounded-lg border border-[#444444]">
              ⚡ Carga en 0.6s
            </span>
            <span className="bg-[#171717] px-3 py-1.5 rounded-lg border border-[#444444]">
              🏆 99/100 Google PageSpeed
            </span>
            <span className="bg-[#171717] px-3 py-1.5 rounded-lg border border-[#444444]">
              📱 100% Mobile First
            </span>
          </div>
        </div>

        {/* SIMULADOR DE RETORNO DE INVERSIÓN (ROI) */}
        <div className="bg-[#1e1e1e] rounded-3xl border border-[#444444]/60 p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold text-[#DA0037] uppercase tracking-wider block mb-1">
              HERRAMIENTA INTERACTIVA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Simulador de Ganancia por Optimización Web
            </h2>
            <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
              Comprueba el impacto financiero de pasar de una web lenta genérica a un ecosistema optimizado.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* CONTROLES DEL SIMULADOR (6 cols) */}
            <div className="lg:col-span-6 space-y-6 bg-[#171717] p-6 rounded-2xl border border-[#444444]/40">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold text-gray-300">Visitas mensuales estimadas:</label>
                  <span className="font-mono font-bold text-white text-sm">{traffic.toLocaleString()} visitas</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="250"
                  value={traffic}
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full accent-[#DA0037] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                  <span>500</span>
                  <span>20.000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold text-gray-300">Ticket promedio de tu producto / servicio:</label>
                  <span className="font-mono font-bold text-[#DA0037] text-sm">${ticketUSD} USD</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={ticketUSD}
                  onChange={(e) => setTicketUSD(Number(e.target.value))}
                  className="w-full accent-[#DA0037] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                  <span>$20 USD</span>
                  <span>$1.000 USD</span>
                </div>
              </div>

              <div className="text-[11px] text-gray-400 bg-[#222222] p-3 rounded-xl border border-[#333]">
                💡 <strong>Tasa RED vs Mercado:</strong> Una web corporativa común convierte ~1.2%. Nuestros desarrollos elevan la tasa a ~4.8% gracias a UX limpia y tiempos de carga instantáneos.
              </div>
            </div>

            {/* RESULTADO COMPARATIVO (6 cols) */}
            <div className="lg:col-span-6 bg-[#222222] p-6 sm:p-8 rounded-2xl border border-[#DA0037]/50 shadow-red-glow">
              <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block mb-4">
                PROYECCIÓN MENSUAL COMPARATIVA
              </span>

              <div className="grid grid-cols-2 gap-4 pb-6 border-b border-[#444444]/40">
                <div>
                  <span className="text-[10px] text-gray-400 font-mono uppercase">Web Genérica (1.2%)</span>
                  <p className="text-xl font-bold text-gray-300 mt-1 font-mono">${currentRevenue.toLocaleString()} USD</p>
                  <span className="text-[10px] text-gray-500 font-mono">~{currentLeads} clientes</span>
                </div>

                <div>
                  <span className="text-[10px] text-emerald-400 font-mono uppercase">Con Solución RED (4.8%)</span>
                  <p className="text-xl font-bold text-emerald-400 mt-1 font-mono">${redRevenue.toLocaleString()} USD</p>
                  <span className="text-[10px] text-emerald-400 font-mono">~{redLeads} clientes</span>
                </div>
              </div>

              <div className="pt-6">
                <span className="text-xs text-gray-400 block font-mono">Ingreso Adicional Estimado / Mes:</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#DA0037] font-mono">
                    +${extraRevenue.toLocaleString()}
                  </span>
                  <span className="text-base font-bold text-white font-mono">USD / mes</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  La web se amortiza por completo en las primeras semanas de operación.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* FORMULARIO DE CALIFICACIÓN DE PROSPECTOS */}
        <div className="bg-[#1e1e1e] rounded-3xl border border-[#444444]/60 p-6 sm:p-10 shadow-xl max-w-2xl mx-auto">
          {!submitted ? (
            <div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">
                Solicita una Auditoría de Conversión Gratuita
              </h3>
              <p className="text-xs text-gray-400 text-center mb-6">
                Analizaremos tu sitio actual o idea y te diremos exactamente cómo maximizar tus leads.
              </p>

              <form onSubmit={handleLeadSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-300 mb-1">Nombre o Empresa *</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ej: Grupo Inmobiliario Norte"
                    className="w-full bg-[#171717] border border-[#444444] rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#DA0037]"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-1">Correo Electrónico de Contacto *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@empresa.com"
                    className="w-full bg-[#171717] border border-[#444444] rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#DA0037]"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-1">Interés Principal</label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-[#171717] border border-[#444444] rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-[#DA0037]"
                  >
                    <option value="Desarrollo Web">Landing Page de Alta Conversión</option>
                    <option value="Agente IA">Agente de IA WhatsApp 24/7</option>
                    <option value="Software a Medida">Sistema a Medida / ERP</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#DA0037] hover:bg-[#b0002c] text-white font-bold text-sm shadow-red-glow transition-all cursor-pointer"
                >
                  Enviar y Recibir Diagnóstico
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">¡Solicitud Recibida!</h3>
              <p className="text-xs text-gray-300 max-w-md mx-auto">
                Gracias, <strong>{company}</strong>. Nuestro equipo técnico evaluará tu caso y se pondrá en contacto a <strong>{email}</strong> en menos de 24 horas hábiles.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 rounded-lg bg-[#171717] text-gray-300 hover:text-white border border-[#444444] text-xs cursor-pointer"
              >
                Enviar otra consulta
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
