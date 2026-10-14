import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Activity, 
  ArrowLeft, 
  RefreshCw, 
  Calendar, 
  Zap, 
  CheckCircle, 
  ArrowUpRight 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';

export default function AnalyticsBIApp({ onBack }) {
  const [timeRange, setTimeRange] = useState('Este Mes');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    sound.playLaser();
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      sound.playSuccess();
    }, 600);
  };

  const MONTHLY_DATA = [
    { label: 'Ene', value: 34, amount: '$34k' },
    { label: 'Feb', value: 42, amount: '$42k' },
    { label: 'Mar', value: 48, amount: '$48k' },
    { label: 'Abr', value: 65, amount: '$65k' },
    { label: 'May', value: 78, amount: '$78k' },
    { label: 'Jun', value: 92, amount: '$92k' },
    { label: 'Jul', value: 85, amount: '$85k' },
    { label: 'Ago', value: 110, amount: '$110k' }
  ];

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
          DEMO ERP 05 &bull; BUSINESS INTELLIGENCE &amp; ANALYTICS
        </span>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* CABECERA */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BarChart3 className="w-6 h-6 text-[#DA0037]" />
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Centro de Analítica &amp; Big Data Corporativo
              </h1>
            </div>
            <p className="text-xs text-[#A1A1AA]">
              Visualización de métricas de crecimiento, tasa de conversión y retención calculadas mediante tuberías en PostgreSQL y Redis.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-[#171717] rounded-xl p-1 border border-[#444444]/40 text-xs font-mono">
              {['7 Días', 'Este Mes', 'Año 2026'].map((range) => (
                <button
                  key={range}
                  onClick={() => { sound.playPop(); setTimeRange(range); }}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    timeRange === range
                      ? 'bg-[#DA0037] text-white font-bold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>

            <button
              onClick={handleRefresh}
              className="p-2.5 rounded-xl bg-[#222] hover:bg-[#333] border border-[#444] text-gray-300 cursor-pointer"
              title="Refrescar métricas"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-[#DA0037]' : ''}`} />
            </button>
          </div>
        </div>

        {/* 4 CARDS DE INDICADORES EN TIEMPO REAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#1e1e1e] p-5 rounded-xl border border-[#444444]/40">
            <span className="text-[10px] font-mono text-gray-400 uppercase">ARR (Ingresos Recurrentes)</span>
            <p className="text-2xl font-black text-white font-mono mt-1">$482.500 USD</p>
            <span className="text-xs text-emerald-400 font-mono font-semibold">+24.8% vs año anterior</span>
          </div>

          <div className="bg-[#1e1e1e] p-5 rounded-xl border border-[#444444]/40">
            <span className="text-[10px] font-mono text-gray-400 uppercase">CAC (Costo Adquisición)</span>
            <p className="text-2xl font-black text-emerald-400 font-mono mt-1">$142 USD</p>
            <span className="text-xs text-gray-400">Optimizada con Agentes IA</span>
          </div>

          <div className="bg-[#1e1e1e] p-5 rounded-xl border border-[#444444]/40">
            <span className="text-[10px] font-mono text-gray-400 uppercase">LTV (Lifetime Value)</span>
            <p className="text-2xl font-black text-white font-mono mt-1">$8.400 USD</p>
            <span className="text-xs text-gray-400">Retención promedio 18 meses</span>
          </div>

          <div className="bg-[#1e1e1e] p-5 rounded-xl border border-[#444444]/40">
            <span className="text-[10px] font-mono text-gray-400 uppercase">Tiempo de Consulta BD</span>
            <p className="text-2xl font-black text-[#DA0037] font-mono mt-1">9.2 ms</p>
            <span className="text-xs text-emerald-400 font-mono">&bull; Caché Redis Activa</span>
          </div>
        </div>

        {/* GRÁFICO DE BARRAS DINÁMICO */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Evolución de Facturación Mensual</h3>
              <p className="text-xs text-gray-400 font-mono">Valores expresados en miles de USD</p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-800/40">
              Tendencia Alcista (+42%)
            </span>
          </div>

          {/* Barras interactivas en CSS/Tailwind */}
          <div className="h-64 flex items-end justify-between gap-3 pt-8 pb-4 border-b border-[#444444]/40 font-mono">
            {MONTHLY_DATA.map((bar, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                <span className="text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {bar.amount}
                </span>
                <div
                  className="w-full max-w-[42px] bg-[#2a2a2a] group-hover:bg-[#DA0037] rounded-t-lg transition-all duration-300 group-hover:shadow-red-glow relative"
                  style={{ height: `${(bar.value / 120) * 100}%` }}
                />
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                  {bar.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400 font-mono pt-2">
            <span>Fuente: Tubería ELT PostgreSQL &bull; Cero intervención manual</span>
            <span className="text-[#DA0037]">100% Trazabilidad contable</span>
          </div>
        </div>

      </div>
    </div>
  );
}
