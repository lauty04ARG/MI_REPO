import React, { useState } from 'react';
import { 
  Navigation, 
  MapPin, 
  Truck, 
  Clock, 
  ArrowLeft, 
  DollarSign, 
  Fuel, 
  CheckCircle, 
  ArrowRight, 
  RotateCcw, 
  Sparkles 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

const AVAILABLE_STOPS = [
  { id: 'LP', name: 'Base Central La Plata', km: 0, tolls: 0 },
  { id: 'CABA', name: 'Puerto Madero / Retiro (CABA)', km: 65, tolls: 2 },
  { id: 'ROS', name: 'Terminal Portuaria Rosario', km: 380, tolls: 5 },
  { id: 'COR', name: 'Parque Logístico Córdoba', km: 780, tolls: 9 }
];

export default function LogisticaRuteo({ onBack }) {
  const [selectedStops, setSelectedStops] = useState(['LP', 'CABA', 'ROS']);
  const [avoidTolls, setAvoidTolls] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const toggleStop = (id) => {
    sound.playPop();
    if (selectedStops.includes(id)) {
      if (selectedStops.length > 2) {
        setSelectedStops(selectedStops.filter(s => s !== id));
      }
    } else {
      setSelectedStops([...selectedStops, id]);
    }
  };

  const handleOptimize = () => {
    sound.playLaser();
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      sound.playSuccess();
      triggerConfetti();
    }, 700);
  };

  const totalKm = selectedStops.reduce((acc, stopId) => {
    const s = AVAILABLE_STOPS.find(item => item.id === stopId);
    return acc + (s ? s.km : 0);
  }, 0);

  const totalTollsUSD = avoidTolls ? 0 : selectedStops.length * 8;
  const estimatedHours = (totalKm / 70).toFixed(1);

  return (
    <div className="min-h-screen bg-[#141414] text-[#EDEDED] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* BARRA SUPERIOR */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#444444]/40">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#222222] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#444444]/60 cursor-pointer text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#DA0037] uppercase bg-[#171717] px-3 py-1.5 rounded-full border border-[#DA0037]/30">
          DEMO LOGÍSTICA 02 &bull; OPTIMIZADOR DE RUTAS &amp; ETA
        </span>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* CABECERA */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Navigation className="w-6 h-6 text-[#DA0037]" />
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Ruteo Dinámico &amp; Despacho de Cargas
              </h1>
            </div>
            <p className="text-xs text-[#A1A1AA]">
              Algoritmo de cálculo de paradas y tiempos estimados de arribo (ETA) para flotas pesadas de larga distancia.
            </p>
          </div>

          <button
            onClick={handleOptimize}
            disabled={isOptimizing}
            className="px-6 py-3 rounded-xl bg-[#DA0037] hover:bg-[#b0002c] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-red-glow transition-all cursor-pointer disabled:opacity-50 shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isOptimizing ? 'Optimizando Tramos...' : 'Recalcular Ruta Óptima'}</span>
          </button>
        </div>

        {/* MAPA Y PUNTOS DE DESPACHO INTERACTIVOS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LISTADO DE PARADAS SELECCIONABLES (5 cols) */}
          <div className="lg:col-span-5 bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 space-y-4 shadow-xl">
            <span className="text-xs font-mono font-bold text-[#DA0037] uppercase tracking-wider block">
              1. SELECCIONA PUNTOS DE DESPACHO
            </span>

            <div className="space-y-3">
              {AVAILABLE_STOPS.map((stop) => {
                const isSelected = selectedStops.includes(stop.id);
                return (
                  <div
                    key={stop.id}
                    onClick={() => toggleStop(stop.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#171717] border-[#DA0037] text-white shadow-red-glow'
                        : 'bg-[#171717]/60 border-[#444444]/40 text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                        isSelected ? 'bg-[#DA0037] text-white' : 'bg-[#333] text-gray-400'
                      }`}>
                        {stop.id}
                      </div>
                      <div>
                        <p className="text-xs font-bold">{stop.name}</p>
                        <p className="text-[10px] text-gray-500 font-mono">Distancia acumulada: ~{stop.km} km</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-gray-400">
                      {isSelected ? '✓ Activo' : '+ Agregar'}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={avoidTolls}
                  onChange={(e) => { sound.playPop(); setAvoidTolls(e.target.checked); }}
                  className="accent-[#DA0037] w-4 h-4"
                />
                <span>Evitar rutas con peajes excesivos (priorizar rutas provinciales)</span>
              </label>
            </div>
          </div>

          {/* SIMULACIÓN DE MAPA Y ETAS (7 cols) */}
          <div className="lg:col-span-7 bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 space-y-6 shadow-xl">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider block">
              2. HOJA DE RUTA GENERADA &bull; TELEMETRÍA EN TIEMPO REAL
            </span>

            {/* Simulación visual de ruta en línea */}
            <div className="bg-[#171717] p-6 rounded-2xl border border-[#444444]/40 relative">
              <div className="flex items-center justify-between relative z-10">
                {selectedStops.map((stopId, sIdx) => (
                  <div key={stopId} className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#DA0037] text-white font-mono font-black text-xs flex items-center justify-center shadow-red-glow">
                      {sIdx + 1}
                    </div>
                    <span className="text-[10px] font-mono text-white mt-2 font-bold">{stopId}</span>
                  </div>
                ))}
              </div>
              <div className="absolute top-10 left-8 right-8 h-0.5 bg-[#444444] -z-0" />
            </div>

            {/* MÉTRICAS ESTIMADAS DEL VIAJE */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#171717] p-4 rounded-xl border border-[#444444]/40">
                <span className="text-[10px] text-gray-400 font-mono uppercase flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#DA0037]" /> Recorrido Total
                </span>
                <p className="text-xl font-black text-white font-mono mt-1">{totalKm} km</p>
              </div>

              <div className="bg-[#171717] p-4 rounded-xl border border-[#444444]/40">
                <span className="text-[10px] text-gray-400 font-mono uppercase flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#DA0037]" /> Tiempo Estimado
                </span>
                <p className="text-xl font-black text-white font-mono mt-1">~{estimatedHours} hs</p>
              </div>

              <div className="bg-[#171717] p-4 rounded-xl border border-[#444444]/40">
                <span className="text-[10px] text-gray-400 font-mono uppercase flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-[#DA0037]" /> Peajes Previstos
                </span>
                <p className="text-xl font-black text-emerald-400 font-mono mt-1">${totalTollsUSD} USD</p>
              </div>
            </div>

            <div className="p-3 bg-[#171717] border border-[#333] rounded-xl text-[11px] text-gray-400 font-mono">
              ⚡ <strong>Tubería RED:</strong> Los choferes reciben la orden de despacho directa en su teléfono con puntos de descanso obligatorios y estaciones con descuento en combustible.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
