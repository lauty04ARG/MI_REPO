import React, { useState } from 'react';
import { 
  Car, 
  Sparkles, 
  Check, 
  ArrowLeft, 
  Calculator, 
  Fuel, 
  ShieldCheck, 
  ArrowRight, 
  Bot, 
  MessageSquare, 
  Coins 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

const CARS_DATABASE = [
  {
    id: 'corolla-cross',
    name: 'Toyota Corolla Cross Hybrid',
    segment: 'SUV Familiar / Ciudad',
    priceUSD: 31500,
    fuel: 'Híbrido (4.8L/100km)',
    power: '122 CV',
    warranty: '5 Años Oficial',
    monthlyInstallment: 420
  },
  {
    id: 'hilux-gr',
    name: 'Toyota Hilux 4x4 SRX',
    segment: 'Pickup Pesada / Campo',
    priceUSD: 46800,
    fuel: 'Diésel Turbo (8.5L/100km)',
    power: '204 CV',
    warranty: '5 Años Oficial',
    monthlyInstallment: 650
  },
  {
    id: 'yaris-hatch',
    name: 'Toyota Yaris XLS CVT',
    segment: 'Compacto Ágil / Primer Auto',
    priceUSD: 21900,
    fuel: 'Nafta (6.2L/100km)',
    power: '107 CV',
    warranty: '3 Años Oficial',
    monthlyInstallment: 290
  }
];

export default function AgenteCotizadorAutos({ onBack }) {
  const [budget, setBudget] = useState(30000);
  const [usage, setUsage] = useState('ciudad');
  const [hybridPreference, setHybridPreference] = useState(true);
  const [downPaymentPct, setDownPaymentPct] = useState(30);

  // Vehículo recomendado por la IA
  const recommendedCar = budget >= 40000 || usage === 'campo'
    ? CARS_DATABASE[1]
    : budget >= 28000
    ? CARS_DATABASE[0]
    : CARS_DATABASE[2];

  const downPaymentAmount = Math.round((recommendedCar.priceUSD * downPaymentPct) / 100);
  const financedAmount = recommendedCar.priceUSD - downPaymentAmount;
  const calculatedMonthly = Math.round((financedAmount * 1.08) / 48); // 48 cuotas

  const handleFinish = () => {
    sound.playSuccess();
    triggerConfetti();
    const text = `Hola! Estuve con el Agente IA de Concesionaria cotizando el modelo ${recommendedCar.name}. Entrega inicial: $${downPaymentAmount} USD y 48 cuotas de ~$${calculatedMonthly} USD. ¿Podemos coordinar un Test Drive?`;
    window.open(`https://wa.me/5492210000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#EDEDED] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* BARRA NAVEGACIÓN */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#444444]/40">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#222222] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#444444]/60 cursor-pointer text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#DA0037] uppercase bg-[#171717] px-3 py-1.5 rounded-full border border-[#DA0037]/30">
          DEMO IA 02 &bull; COTIZADOR &amp; ASESOR AUTOMOTRIZ
        </span>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* CABECERA */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#DA0037]/20 border border-[#DA0037]/40 flex items-center justify-center text-[#DA0037]">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                Agente IA Asesor &amp; Calificador de Vehículos
              </h1>
              <p className="text-xs text-[#A1A1AA]">
                Algoritmo predictivo que analiza presupuesto, uso real y calcula planes de financiación automotriz en tiempo real.
              </p>
            </div>
          </div>
        </div>

        {/* LAYOUT EN 2 COLUMNAS: PARÁMETROS DEL CLIENTE + RECOMENDACIÓN IA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMNA PREGUNTAS AL CLIENTE (6 cols) */}
          <div className="lg:col-span-6 bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 space-y-6">
            <span className="text-xs font-mono font-bold text-[#DA0037] uppercase tracking-wider block">
              1. PREFERENCIAS DEL COMPRADOR
            </span>

            {/* Presupuesto */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-300 font-semibold">Presupuesto Máximo de Compra:</span>
                <span className="font-mono font-bold text-[#DA0037]">${budget.toLocaleString()} USD</span>
              </div>
              <input
                type="range"
                min="18000"
                max="60000"
                step="1000"
                value={budget}
                onChange={(e) => { sound.playPop(); setBudget(Number(e.target.value)); }}
                className="w-full accent-[#DA0037] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                <span>$18.000 USD</span>
                <span>$60.000 USD</span>
              </div>
            </div>

            {/* Tipo de Uso */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">
                ¿Qué tipo de uso principal tendrá el vehículo?
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'ciudad', label: '🏙️ Ciudad y Familia' },
                  { id: 'campo', label: '🌾 Campo, Ripio o Carga' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { sound.playPop(); setUsage(item.id); }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      usage === item.id
                        ? 'bg-[#171717] border-[#DA0037] text-white shadow-red-glow font-bold'
                        : 'bg-[#171717]/60 border-[#444444]/40 text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Anticipo */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-300 font-semibold">Anticipo / Entrega Inicial:</span>
                <span className="font-mono font-bold text-white">{downPaymentPct}% (${downPaymentAmount.toLocaleString()} USD)</span>
              </div>
              <input
                type="range"
                min="20"
                max="70"
                step="5"
                value={downPaymentPct}
                onChange={(e) => { sound.playPop(); setDownPaymentPct(Number(e.target.value)); }}
                className="w-full accent-[#DA0037] cursor-pointer"
              />
            </div>

            <div className="bg-[#171717] p-3 rounded-xl border border-[#444444]/40 text-[11px] text-gray-400">
              ⚡ <strong>IA Insights:</strong> El agente detecta que con un {downPaymentPct}% de entrega accedes a tasa preferencial subsidiada por fábrica.
            </div>
          </div>

          {/* COLUMNA RECOMENDACIÓN IA (6 cols) */}
          <div className="lg:col-span-6 bg-[#222222] rounded-2xl border border-[#DA0037]/60 p-6 sm:p-8 shadow-red-glow relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#444444]/40 mb-4">
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-800/40 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> RECOMENDACIÓN ÓPTIMA IA
              </span>
              <span className="text-xs font-mono text-gray-400">{recommendedCar.segment}</span>
            </div>

            <h3 className="text-2xl font-black text-white mb-1">
              {recommendedCar.name}
            </h3>

            {/* Precio Base */}
            <div className="flex items-baseline gap-2 my-3">
              <span className="text-3xl font-black text-[#DA0037] font-mono">
                ${recommendedCar.priceUSD.toLocaleString()}
              </span>
              <span className="text-xs text-gray-400 font-mono">USD Contado</span>
            </div>

            {/* Ficha técnica compacta */}
            <div className="grid grid-cols-2 gap-3 my-4 text-xs font-mono">
              <div className="bg-[#171717] p-3 rounded-xl border border-[#444444]/40">
                <span className="text-[10px] text-gray-500 uppercase block">Consumo</span>
                <span className="text-white font-bold">{recommendedCar.fuel}</span>
              </div>
              <div className="bg-[#171717] p-3 rounded-xl border border-[#444444]/40">
                <span className="text-[10px] text-gray-500 uppercase block">Potencia</span>
                <span className="text-white font-bold">{recommendedCar.power}</span>
              </div>
            </div>

            {/* Plan de cuotas calculado */}
            <div className="bg-[#171717] p-4 rounded-xl border border-[#DA0037]/40 my-4 space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#DA0037] font-bold block">
                SIMULACIÓN DE FINANCIACIÓN (48 MESES)
              </span>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Entrega Inicial ({downPaymentPct}%):</span>
                <span className="font-mono font-bold text-white">${downPaymentAmount.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Saldo en 48 cuotas fijas de:</span>
                <span className="font-mono font-black text-xl text-emerald-400">~${calculatedMonthly} USD / mes</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 px-6 rounded-xl bg-[#DA0037] hover:bg-[#b0002c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-red-glow transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Solicitar Test Drive &amp; Bloquear Cupo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
