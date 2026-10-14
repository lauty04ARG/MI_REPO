import React, { useState } from 'react';
import { 
  FileText, 
  Truck, 
  DollarSign, 
  ArrowLeft, 
  CheckCircle, 
  Calculator, 
  ShieldCheck, 
  Share2, 
  Sparkles 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

export default function LogisticaFletes({ onBack }) {
  const [tons, setTons] = useState(24);
  const [km, setKm] = useState(420);
  const [cargoType, setCargoType] = useState('Paletizada');
  const [remitoIssued, setRemitoIssued] = useState(false);

  // Tarifa por tonelada/km base
  const rateMultiplier = cargoType === 'Refrigerada' ? 1.35 : cargoType === 'Peligrosa/IMO' ? 1.50 : 1.0;
  const baseRatePerTonKm = 0.085 * rateMultiplier;
  const freightTotalUSD = Math.round(tons * km * baseRatePerTonKm);
  const insuranceUSD = Math.round(freightTotalUSD * 0.04);
  const totalTripUSD = freightTotalUSD + insuranceUSD;

  const handleIssueRemito = () => {
    sound.playSuccess();
    triggerConfetti();
    setRemitoIssued(true);
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#EDEDED] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* BARRA SUPERIOR */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#444444]/40">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#222222] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#444444]/60 cursor-pointer text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#DA0037] uppercase bg-[#171717] px-3 py-1.5 rounded-full border border-[#DA0037]/30">
          DEMO LOGÍSTICA 04 &bull; LIQUIDACIÓN DE FLETES B2B
        </span>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* CABECERA */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#DA0037]/20 border border-[#DA0037]/40 flex items-center justify-center text-[#DA0037]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Cotizador &amp; Emisor de Órdenes de Carga
              </h1>
              <p className="text-xs text-[#A1A1AA]">
                Cálculo algorítmico de fletes según tonelaje, distancia y categoría de mercancía con emisión de remito electrónico.
              </p>
            </div>
          </div>
        </div>

        {/* PARÁMETROS Y CARTA DE PORTE EN VIVO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CONTROLES (6 cols) */}
          <div className="lg:col-span-6 bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 space-y-6">
            <span className="text-xs font-mono font-bold text-[#DA0037] uppercase tracking-wider block">
              PARÁMETROS DE LA CARGA
            </span>

            {/* Toneladas */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-300 font-semibold">Peso Total de la Mercancía:</span>
                <span className="font-mono font-bold text-white text-sm">{tons} Toneladas</span>
              </div>
              <input
                type="range"
                min="5"
                max="32"
                value={tons}
                onChange={(e) => { sound.playPop(); setTons(Number(e.target.value)); }}
                className="w-full accent-[#DA0037] cursor-pointer"
              />
            </div>

            {/* Distancia */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-300 font-semibold">Distancia Total de Transporte:</span>
                <span className="font-mono font-bold text-[#DA0037] text-sm">{km} Kilómetros</span>
              </div>
              <input
                type="range"
                min="50"
                max="1400"
                step="20"
                value={km}
                onChange={(e) => { sound.playPop(); setKm(Number(e.target.value)); }}
                className="w-full accent-[#DA0037] cursor-pointer"
              />
            </div>

            {/* Tipo de Carga */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">Categoría de Mercadería:</label>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {['General / Paletizada', 'A Granel / Cereal', 'Refrigerada (+35%)', 'Peligrosa/IMO (+50%)'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => { sound.playPop(); setCargoType(type.split(' ')[0]); }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      cargoType === type.split(' ')[0]
                        ? 'bg-[#171717] border-[#DA0037] text-white font-bold'
                        : 'bg-[#171717]/60 border-[#444444]/40 text-gray-400 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* REMITO DIGITAL SIMULADO (6 cols) */}
          <div className="lg:col-span-6 bg-[#222222] rounded-2xl border border-[#DA0037]/60 p-6 sm:p-8 shadow-red-glow relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#444444]/40 mb-4">
              <span className="font-mono text-xs font-bold text-[#DA0037] uppercase">
                REMITO ELECTRÓNICO &bull; ORDEN #CP-9842
              </span>
              <span className="text-[10px] font-mono text-gray-400">Homologado AFIP</span>
            </div>

            <div className="space-y-3 font-mono text-xs mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Carga Neta:</span>
                <span className="text-white font-bold">{tons} TN &bull; {cargoType}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Trayecto Declarado:</span>
                <span className="text-white font-bold">{km} km</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Seguro de Carga (4%):</span>
                <span className="text-white">${insuranceUSD} USD</span>
              </div>
              <div className="pt-3 border-t border-[#444444]/40 flex justify-between items-baseline">
                <span className="text-sm font-bold text-white uppercase">Liquidación Total Flete:</span>
                <span className="text-3xl font-black text-[#DA0037]">${totalTripUSD.toLocaleString()} USD</span>
              </div>
            </div>

            {!remitoIssued ? (
              <button
                onClick={handleIssueRemito}
                className="w-full py-3.5 px-6 rounded-xl bg-[#DA0037] hover:bg-[#b0002c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-red-glow transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Emitir Remito Digital &amp; Carta de Porte</span>
              </button>
            ) : (
              <div className="p-4 bg-emerald-950/50 border border-emerald-500/50 rounded-xl text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                <p className="text-xs font-mono font-bold text-emerald-300">
                  ¡Carta de Porte Emitida y Enviada al Chofer por WhatsApp!
                </p>
                <button
                  onClick={() => setRemitoIssued(false)}
                  className="text-[10px] font-mono text-gray-400 hover:text-white underline cursor-pointer"
                >
                  Generar otra orden
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
