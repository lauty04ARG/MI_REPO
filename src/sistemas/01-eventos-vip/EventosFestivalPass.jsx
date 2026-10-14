import React, { useState } from 'react';
import { 
  Zap, 
  CreditCard, 
  Music, 
  MapPin, 
  ArrowLeft, 
  CheckCircle, 
  DollarSign, 
  Sparkles, 
  Volume2, 
  Ticket 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

const STAGES = [
  { id: 'main', name: 'MAIN STAGE', genre: 'Headliners & Live Shows', schedule: ['20:00 - The Chemical Brothers', '22:30 - Arctic Monkeys', '01:00 - Calvin Harris'] },
  { id: 'dome', name: 'ELECTRO DOME', genre: 'Techno, Melodic & House', schedule: ['19:00 - Hernán Cattaneo', '22:00 - Tale of Us', '01:30 - Boris Brejcha'] },
  { id: 'indie', name: 'INDIE FOREST', genre: 'Rock Alternativo & Nu-Disco', schedule: ['18:30 - Conociendo Rusia', '21:00 - Bandalos Chinos', '23:30 - El Mató a un Policía Motorizado'] }
];

export default function EventosFestivalPass({ onBack }) {
  const [activeStage, setActiveStage] = useState(STAGES[0]);
  const [wristbandBalance, setWristbandBalance] = useState(15000); // Saldo en pulsera ARS
  const [rechargeNotice, setRechargeNotice] = useState(null);

  const handleRecharge = (amount) => {
    sound.playSuccess();
    triggerConfetti();
    setWristbandBalance(prev => prev + amount);
    setRechargeNotice(`¡Carga exitosa! Se acreditaron +$${amount.toLocaleString()} ARS a tu pulsera RFID.`);
    setTimeout(() => setRechargeNotice(null), 3500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#EDEDED] py-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#a855f7] selection:text-black">
      
      {/* BARRA SUPERIOR */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#272738]">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181824] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#3b3b54] cursor-pointer text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#a855f7] uppercase bg-[#181824] px-3 py-1.5 rounded-full border border-[#a855f7]/30">
          DEMO EVENTOS 04 &bull; FESTIVAL MASIVO &amp; PULSERA CASHLESS
        </span>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* CABECERA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#1c122c] via-[#120a1f] to-[#0a0a0f] border border-[#a855f7]/40 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <span className="text-xs font-mono font-bold tracking-widest text-[#a855f7] uppercase mb-2 block">
            FESTIVAL DE MÚSICA &bull; 3 DÍAS &bull; 3 ESCENARIOS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase mb-4">
            SONIC PULSE 2026
          </h1>
          <p className="text-xs sm:text-sm text-purple-200/80 max-w-xl mx-auto">
            Plataforma interactiva para asistentes: horarios de escenarios en vivo y carga anticipada de pulsera cashless para barras y merchandising.
          </p>
        </div>

        {/* NOTIFICACIÓN DE RECARGA */}
        {rechargeNotice && (
          <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 font-mono flex items-center justify-between">
            <span>{rechargeNotice}</span>
            <button onClick={() => setRechargeNotice(null)}>✕</button>
          </div>
        )}

        {/* CONTENEDOR EN 2 COLUMNAS: ESCENARIOS + MONEDERO CASHLESS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SELECTOR DE ESCENARIOS & LINEUP (7 cols) */}
          <div className="lg:col-span-7 bg-[#13131c] rounded-2xl border border-[#272738] p-6 space-y-6 shadow-xl">
            <span className="text-xs font-mono font-bold text-[#a855f7] uppercase tracking-wider block">
              1. LINEUP &bull; SELECCIONA ESCENARIO
            </span>

            <div className="grid grid-cols-3 gap-2">
              {STAGES.map((st) => (
                <button
                  key={st.id}
                  onClick={() => { sound.playPop(); setActiveStage(st); }}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer font-mono text-xs ${
                    activeStage.id === st.id
                      ? 'bg-[#a855f7] text-black font-bold border-transparent shadow-lg shadow-purple-900/30'
                      : 'bg-[#181824] text-gray-300 border-[#272738] hover:border-gray-500'
                  }`}
                >
                  <p className="font-bold">{st.name}</p>
                </button>
              ))}
            </div>

            {/* Horarios del escenario activo */}
            <div className="bg-[#0a0a0f] p-5 rounded-xl border border-[#272738] space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#272738]">
                <span className="text-xs font-bold text-white font-mono">{activeStage.name}</span>
                <span className="text-[10px] font-mono text-[#a855f7]">{activeStage.genre}</span>
              </div>

              <div className="space-y-2">
                {activeStage.schedule.map((show, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 p-2.5 rounded-lg bg-[#13131c] text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#a855f7]" />
                    <span className="font-mono text-white font-semibold">{show}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIMULADOR DE PULSERA CASHLESS (5 cols) */}
          <div className="lg:col-span-5 bg-[#181824] rounded-2xl border border-[#a855f7]/50 p-6 space-y-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                PULSERA RFID CASHLESS
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded">
                CHIP VINCULADO
              </span>
            </div>

            <div className="bg-[#0f0f17] p-6 rounded-2xl border border-[#272738] text-center space-y-2">
              <span className="text-[10px] font-mono text-gray-400 uppercase">Saldo Disponible en Barras</span>
              <p className="text-4xl font-black text-white font-mono">
                ${wristbandBalance.toLocaleString()} <span className="text-sm font-normal text-purple-300">ARS</span>
              </p>
              <p className="text-[11px] text-gray-500 font-mono">Pulsera ID: #RFID-7491-SONIC</p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono text-gray-300 uppercase block">
                Carga Saldo Rápido (Cero colas en el predio):
              </span>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                {[5000, 10000, 20000].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleRecharge(val)}
                    className="py-2.5 rounded-xl bg-[#272738] hover:bg-[#a855f7] hover:text-black text-white font-bold transition-all cursor-pointer"
                  >
                    +${val / 1000}k
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 bg-[#0f0f17] rounded-xl border border-[#272738] text-[11px] text-gray-400 font-mono leading-relaxed">
              💡 <strong>Cero Efectivo:</strong> Al apoyar la pulsera en las barras del festival se descuenta en 0.2 segundos. Si sobra saldo, se reintegra automáticamente al finalizar el evento.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
