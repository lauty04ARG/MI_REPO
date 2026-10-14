import React, { useState } from 'react';
import { 
  Trello, 
  Plus, 
  ArrowLeft, 
  DollarSign, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Sparkles 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

const INITIAL_DEALS = [
  { id: 'D-101', company: 'Banco FinTech Austral', value: 8500, contact: 'Martín Bossi', stage: 'lead', priority: 'Alta' },
  { id: 'D-102', company: 'Cadena Hotelera Sur', value: 4200, contact: 'Lucía Valenzuela', stage: 'demo', priority: 'Media' },
  { id: 'D-103', company: 'Agroquímica del Litoral', value: 12000, contact: 'Hernán Crespo', stage: 'propuesta', priority: 'Alta' },
  { id: 'D-104', company: 'Distribuidora Mayorista Express', value: 6400, contact: 'Carolina Herrera', stage: 'ganado', priority: 'Alta' }
];

export default function CrmKanbanApp({ onBack }) {
  const [deals, setDeals] = useState(INITIAL_DEALS);

  const moveDeal = (id, direction) => {
    sound.playPop();
    const stages = ['lead', 'demo', 'propuesta', 'ganado'];
    setDeals(deals.map(deal => {
      if (deal.id === id) {
        const currentIdx = stages.indexOf(deal.stage);
        const newIdx = direction === 'next' ? currentIdx + 1 : currentIdx - 1;
        if (newIdx >= 0 && newIdx < stages.length) {
          if (stages[newIdx] === 'ganado') {
            sound.playSuccess();
            triggerConfetti();
          }
          return { ...deal, stage: stages[newIdx] };
        }
      }
      return deal;
    }));
  };

  const totalPipeline = deals.reduce((acc, d) => acc + d.value, 0);
  const totalWon = deals.filter(d => d.stage === 'ganado').reduce((acc, d) => acc + d.value, 0);

  const COLUMNS = [
    { key: 'lead', title: '1. Nuevos Prospectos', badge: 'bg-blue-950/40 text-blue-400 border-blue-800/40' },
    { key: 'demo', title: '2. Demo Técnica Presentada', badge: 'bg-purple-950/40 text-purple-400 border-purple-800/40' },
    { key: 'propuesta', title: '3. Propuesta Económica', badge: 'bg-amber-950/40 text-amber-400 border-amber-800/40' },
    { key: 'ganado', title: '4. Venta Ganada ($)', badge: 'bg-emerald-950/40 text-emerald-400 border-emerald-800/40' }
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
          DEMO ERP 02 &bull; PIPELINE KANBAN INTERACTIVO
        </span>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* CABECERA & MÉTRICAS */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Trello className="w-6 h-6 text-[#DA0037]" />
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                CRM Comercial B2B &bull; Pipeline de Ventas
              </h1>
            </div>
            <p className="text-xs text-[#A1A1AA]">
              Visualización por etapas comerciales. Avanza los negocios entre columnas con un clic y celebra cada cierre.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#171717] px-4 py-2 rounded-xl border border-[#444444]/40">
              <span className="text-[10px] font-mono text-gray-400 uppercase block">Pipeline Total</span>
              <span className="font-mono font-bold text-white text-base">${totalPipeline.toLocaleString()} USD</span>
            </div>
            <div className="bg-[#171717] px-4 py-2 rounded-xl border border-emerald-500/40">
              <span className="text-[10px] font-mono text-emerald-400 uppercase block">Ventas Cerradas</span>
              <span className="font-mono font-black text-emerald-400 text-base">${totalWon.toLocaleString()} USD</span>
            </div>
          </div>
        </div>

        {/* TABLERO KANBAN CON 4 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLUMNS.map((col) => {
            const columnDeals = deals.filter(d => d.stage === col.key);
            const colTotal = columnDeals.reduce((acc, d) => acc + d.value, 0);

            return (
              <div
                key={col.key}
                className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-4 flex flex-col justify-between min-h-[460px] shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#444444]/40 mb-4">
                    <span className="font-bold text-xs text-white uppercase font-mono tracking-wider">
                      {col.title}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${col.badge}`}>
                      {columnDeals.length}
                    </span>
                  </div>

                  {/* CARDS DENTRO DE LA COLUMNA */}
                  <div className="space-y-3">
                    {columnDeals.map((deal) => (
                      <div
                        key={deal.id}
                        className="bg-[#171717] rounded-xl border border-[#444444]/40 hover:border-[#DA0037]/60 p-4 shadow-sm space-y-3 transition-all"
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-mono text-gray-500">{deal.id}</span>
                          <span className="text-[10px] font-mono font-bold text-[#DA0037] flex items-center gap-1">
                            <Flame className="w-3 h-3 text-[#DA0037]" /> {deal.priority}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-bold text-sm text-white">{deal.company}</h4>
                          <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                            <User className="w-3 h-3 text-gray-500" /> {deal.contact}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#333] flex items-center justify-between">
                          <span className="font-mono font-bold text-sm text-[#DA0037]">
                            ${deal.value.toLocaleString()} USD
                          </span>

                          {/* BOTONES PARA MOVER DEAL */}
                          <div className="flex items-center gap-1">
                            {col.key !== 'lead' && (
                              <button
                                onClick={() => moveDeal(deal.id, 'prev')}
                                className="px-2 py-1 bg-[#222] hover:bg-[#333] rounded text-[10px] text-gray-400 cursor-pointer"
                                title="Mover a etapa previa"
                              >
                                &larr;
                              </button>
                            )}
                            {col.key !== 'ganado' && (
                              <button
                                onClick={() => moveDeal(deal.id, 'next')}
                                className="px-2.5 py-1 bg-[#DA0037] hover:bg-[#b0002c] rounded text-[10px] font-bold text-white cursor-pointer"
                                title="Avanzar de etapa"
                              >
                                Avanzar &rarr;
                              </button>
                            )}
                            {col.key === 'ganado' && (
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">¡Cerrado!</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#444444]/30 text-xs font-mono text-gray-400 flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-bold text-white">${colTotal.toLocaleString()} USD</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
