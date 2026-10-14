import React, { useState } from 'react';
import { 
  Thermometer, 
  Snowflake, 
  AlertTriangle, 
  ArrowLeft, 
  Activity, 
  CheckCircle, 
  Bell, 
  ShieldCheck, 
  RotateCcw 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

export default function LogisticaCadenaFrio({ onBack }) {
  const [temperature, setTemperature] = useState(-18.4);
  const [doorOpen, setDoorOpen] = useState(false);
  const [alarmActive, setAlarmActive] = useState(false);

  const simulateBreach = () => {
    sound.playLaser();
    setAlarmActive(true);
    setDoorOpen(true);
    setTemperature(-10.2);
  };

  const handleRestore = () => {
    sound.playSuccess();
    setAlarmActive(false);
    setDoorOpen(false);
    setTemperature(-18.5);
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

        <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-400 uppercase bg-[#171717] px-3 py-1.5 rounded-full border border-cyan-500/30">
          DEMO LOGÍSTICA 05 &bull; TELEMETRÍA IOT CADENA DE FRÍO
        </span>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* CABECERA */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Snowflake className="w-6 h-6 text-cyan-400" />
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Monitoreo IoT &bull; Cadena de Frío Farmacéutica &amp; Cárnica
              </h1>
            </div>
            <p className="text-xs text-[#A1A1AA]">
              Sensores de temperatura cada 10 segundos con registro inalterable para exportación SENASA / ANMAT.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {!alarmActive ? (
              <button
                onClick={simulateBreach}
                className="px-4 py-2 rounded-xl bg-amber-950/60 hover:bg-amber-900 border border-amber-600/40 text-amber-300 font-mono text-xs font-bold cursor-pointer transition-all"
              >
                Simular Apertura de Puerta en Ruta
              </button>
            ) : (
              <button
                onClick={handleRestore}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold cursor-pointer transition-all shadow-lg"
              >
                Restablecer y Cerrar Puerta
              </button>
            )}
          </div>
        </div>

        {/* ALERTA CRÍTICA */}
        {alarmActive && (
          <div className="p-4 bg-rose-950/70 border border-rose-500 rounded-2xl text-rose-300 text-xs font-mono flex items-center justify-between shadow-red-glow animate-pulse">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#DA0037]" />
              <span>ALERTA DE DESVÍO TÉRMICO: La temperatura superó los -12°C. Disparado protocolo de refrigeración auxiliar Thermo King.</span>
            </div>
            <span className="font-bold text-white">RESCATE ACTIVO</span>
          </div>
        )}

        {/* INDICADORES IOT */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className={`p-6 rounded-2xl border transition-all ${
            alarmActive ? 'bg-rose-950/30 border-[#DA0037]' : 'bg-[#1e1e1e] border-[#444444]/40'
          }`}>
            <span className="text-[10px] font-mono uppercase text-gray-400 flex items-center gap-1">
              <Thermometer className="w-4 h-4 text-cyan-400" /> Sonda Principal Furgón
            </span>
            <p className={`text-4xl font-black font-mono mt-2 ${
              alarmActive ? 'text-[#DA0037]' : 'text-cyan-400'
            }`}>
              {temperature.toFixed(1)} °C
            </p>
            <span className="text-xs text-gray-500">Rango óptimo: -22°C a -18°C</span>
          </div>

          <div className="bg-[#1e1e1e] p-6 rounded-2xl border border-[#444444]/40">
            <span className="text-[10px] font-mono uppercase text-gray-400">Sensor de Compuerta</span>
            <p className={`text-2xl font-black font-mono mt-2 ${
              doorOpen ? 'text-amber-400' : 'text-emerald-400'
            }`}>
              {doorOpen ? 'ABIERTA (En Descarga)' : 'SELLADA HERMÉTICA'}
            </p>
            <span className="text-xs text-gray-500">Precinto electrónico intacto</span>
          </div>

          <div className="bg-[#1e1e1e] p-6 rounded-2xl border border-[#444444]/40">
            <span className="text-[10px] font-mono uppercase text-gray-400">Equipo de Frío Auxiliar</span>
            <p className="text-2xl font-black text-white font-mono mt-2">Thermo King SLXi</p>
            <span className="text-xs text-emerald-400 font-mono">&bull; Diésel Autónomo 94%</span>
          </div>
        </div>

      </div>
    </div>
  );
}
