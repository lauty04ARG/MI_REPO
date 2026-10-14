import React, { useState } from 'react';
import { 
  Wrench, 
  CheckSquare, 
  Square, 
  AlertTriangle, 
  ArrowLeft, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  RotateCcw 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

const INSPECTION_POINTS = [
  { id: 'brakes', label: 'Sistema de Frenos de Aire y ABS (Presión > 8.5 bar)', category: 'Seguridad Crítica' },
  { id: 'tires', label: 'Profundidad de Dibujo en Neumáticos Tracción (> 3.5 mm)', category: 'Neumáticos' },
  { id: 'oil', label: 'Nivel y Calidad de Aceite Sintético de Motor 15W-40', category: 'Motor' },
  { id: 'lights', label: 'Luces Reglamentarias LED y Balizas de Giro', category: 'Eléctrico' },
  { id: 'safety', label: 'Matafuego Homologado y Documentación VTV / RUTA Vigente', category: 'Legal' }
];

export default function LogisticaTaller({ onBack }) {
  const [unitCode, setUnitCode] = useState('UN-02 (Mercedes Actros)');
  const [checkedItems, setCheckedItems] = useState(['brakes', 'tires']);

  const toggleItem = (id) => {
    sound.playPop();
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter(i => i !== id));
    } else {
      const updated = [...checkedItems, id];
      setCheckedItems(updated);
      if (updated.length === INSPECTION_POINTS.length) {
        sound.playSuccess();
        triggerConfetti();
      }
    }
  };

  const isApproved = checkedItems.length === INSPECTION_POINTS.length;

  return (
    <div className="min-h-screen bg-[#141414] text-[#EDEDED] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* BARRA SUPERIOR */}
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#444444]/40">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#222222] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#444444]/60 cursor-pointer text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#DA0037] uppercase bg-[#171717] px-3 py-1.5 rounded-full border border-[#DA0037]/30">
          DEMO LOGÍSTICA 03 &bull; CHECKLIST TÉCNICO &amp; TALLER
        </span>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* CABECERA */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 shadow-xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#DA0037]/20 border border-[#DA0037]/40 flex items-center justify-center text-[#DA0037] shrink-0">
            <Wrench className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Inspección Pre-Viaje &bull; Taller de Carrocerías
            </h1>
            <p className="text-xs text-[#A1A1AA] mt-0.5">
              Protocolo digital obligatorio para mecánicos y jefes de tráfico antes de autorizar la salida de unidades a ruta.
            </p>
          </div>
        </div>

        {/* SEMÁFORO DE SALIDA */}
        <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 ${
          isApproved
            ? 'bg-emerald-950/40 border-emerald-500/60 shadow-lg shadow-emerald-950/40'
            : 'bg-rose-950/40 border-rose-500/50'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-4 h-4 rounded-full ${isApproved ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'}`} />
            <div>
              <p className="font-mono font-black text-sm uppercase">
                {isApproved ? 'UNIDAD APROBADA &bull; APTO VIAL' : 'UNIDAD BLOQUEADA &bull; INSPECCIÓN INCOMPLETA'}
              </p>
              <p className="text-xs text-gray-400">
                {checkedItems.length} de {INSPECTION_POINTS.length} puntos de control técnico verificados.
              </p>
            </div>
          </div>

          <span className={`text-xs font-mono font-bold px-3 py-1.5 rounded-lg border ${
            isApproved ? 'bg-emerald-900/60 text-emerald-200 border-emerald-700' : 'bg-rose-900/60 text-rose-200 border-rose-700'
          }`}>
            {isApproved ? 'Hoja de Ruta Habilitada' : 'Salida Denegada'}
          </span>
        </div>

        {/* CHECKLIST INTERACTIVO */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-[#444444]/40">
            <span className="text-xs font-mono font-bold text-[#DA0037] uppercase">
              PUNTOS DE CHEQUEO MECÁNICO (Haz clic para validar)
            </span>
            <span className="text-xs font-mono text-gray-400">Unidad: {unitCode}</span>
          </div>

          <div className="space-y-3">
            {INSPECTION_POINTS.map((pt) => {
              const isChecked = checkedItems.includes(pt.id);
              return (
                <div
                  key={pt.id}
                  onClick={() => toggleItem(pt.id)}
                  className={`p-4 rounded-xl border cursor-pointer select-none transition-all flex items-center justify-between ${
                    isChecked
                      ? 'bg-[#171717] border-emerald-500/60 text-white'
                      : 'bg-[#171717]/60 border-[#444444]/40 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded flex items-center justify-center ${
                      isChecked ? 'bg-emerald-600 text-white' : 'border border-[#444] bg-[#222]'
                    }`}>
                      {isChecked && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold">{pt.label}</p>
                      <span className="text-[10px] font-mono text-gray-500 uppercase">{pt.category}</span>
                    </div>
                  </div>

                  <span className={`text-xs font-mono font-bold ${isChecked ? 'text-emerald-400' : 'text-gray-500'}`}>
                    {isChecked ? 'CONFORME' : 'PENDIENTE'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
