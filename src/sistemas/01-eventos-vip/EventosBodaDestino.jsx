import React, { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Car, 
  Hotel, 
  CheckCircle, 
  Sparkles, 
  Sun 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

const ITINERARY = [
  { day: 'Viernes 20 Nov', title: 'Sunset & Wine de Bienvenida', time: '18:30 hs', place: 'Bodega Catena Zapata &bull; Terrazas', dress: 'Casual Elegante (Tonos tierra)' },
  { day: 'Sábado 21 Nov', title: 'Ceremonia entre Viñedos &amp; Fiesta', time: '17:00 hs', place: 'Finca La Celia &bull; Salón Los Olivos', dress: 'Formal &bull; Corbata / Traje / Vestido largo' },
  { day: 'Domingo 22 Nov', title: 'Asado Criollo de Despedida', time: '13:00 hs', place: 'Quincho de la Casona', dress: 'Relax / Ropa Cómoda' }
];

export default function EventosBodaDestino({ onBack }) {
  const [needTransfer, setNeedTransfer] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [guestName, setGuestName] = useState('');

  const handleRSVP = (e) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    sound.playSuccess();
    triggerConfetti();
    setConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#141210] text-[#f7ede2] py-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#d97706] selection:text-black">
      
      {/* BARRA SUPERIOR */}
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#362a22]">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#241a14] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#4a3629] cursor-pointer text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#d97706] uppercase bg-[#241a14] px-3 py-1.5 rounded-full border border-[#d97706]/30">
          DEMO EVENTOS 05 &bull; BODA DE DESTINO EN VIÑEDOS
        </span>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* CABECERA */}
        <div className="rounded-3xl bg-gradient-to-b from-[#2e1d13] via-[#1f130b] to-[#120a06] border border-[#d97706]/40 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <span className="text-xs font-mono font-bold tracking-widest text-[#d97706] uppercase mb-3 block">
            DESTINATION WEDDING &bull; MENDOZA, ARGENTINA
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-white tracking-tight mb-4">
            Sofía &amp; Nicolás
          </h1>
          <p className="text-sm sm:text-base text-amber-100/80 max-w-lg mx-auto font-light leading-relaxed mb-6">
            Tres días de cordillera, viñedos, música y celebración junto a las personas que más queremos.
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 bg-[#241a14] px-4 py-2 rounded-full border border-[#4a3629]">
            <Sun className="w-4 h-4 text-amber-400" />
            <span>20, 21 y 22 de Noviembre &bull; Valle de Uco, Mendoza</span>
          </div>
        </div>

        {/* ITINERARIO DEL FIN DE SEMANA */}
        <div className="bg-[#1c140e] rounded-2xl border border-[#362a22] p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-[#362a22]">
            <span className="text-xs font-mono font-bold text-[#d97706] uppercase">
              CRONOGRAMA DE ACTIVIDADES
            </span>
            <span className="text-xs font-mono text-gray-400">Fin de semana completo</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ITINERARY.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#120b07] p-5 rounded-xl border border-[#362a22] space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#d97706] font-bold block mb-1">{item.day}</span>
                  <h3 className="text-base font-serif font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#d97706]" /> {item.time}
                  </p>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#d97706]" /> {item.place}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#26170d] text-[11px] font-mono text-amber-200/70">
                  Dress Code: {item.dress}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONFIRMACIÓN DE TRANSFER & HOSPEDAJE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tarjeta de Hospedaje */}
          <div className="bg-[#1c140e] rounded-2xl border border-[#362a22] p-6 space-y-4 shadow-xl">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Hotel className="w-4 h-4 text-[#d97706]" /> HOTELES CON TARIFA ESPECIAL
            </span>
            <p className="text-xs text-gray-400 leading-relaxed">
              Mencionando el código <strong className="text-[#d97706] font-mono">BODA-SOFI-NICO</strong> accedes a un 20% de descuento en The Vines Resort &amp; Spa y Casa de Uco.
            </p>
            <div className="p-3 bg-[#120b07] rounded-xl border border-[#2e1d13] text-xs font-mono text-gray-300">
              Transporte exclusivo conectará ambos hoteles con el salón de fiesta cada 30 minutos.
            </div>
          </div>

          {/* Formulario Transfer */}
          <div className="bg-[#1c140e] rounded-2xl border border-[#d97706]/40 p-6 shadow-xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#d97706] uppercase tracking-wider block">
              COORDINACIÓN DE TRANSFER AEROPUERTO
            </span>

            {!confirmed ? (
              <form onSubmit={handleRSVP} className="space-y-3 text-xs">
                <input
                  type="text"
                  required
                  placeholder="Nombre y Apellido de los Pasajeros..."
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-[#120b07] border border-[#362a22] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#d97706]"
                />

                <label className="flex items-center gap-2 text-gray-300 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={needTransfer}
                    onChange={(e) => { sound.playPop(); setNeedTransfer(e.target.checked); }}
                    className="accent-[#d97706] w-4 h-4"
                  />
                  <span>Requiero transfer desde el Aeropuerto de Mendoza (MDZ)</span>
                </label>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                >
                  Confirmar Asistencia &amp; Traslado
                </button>
              </form>
            ) : (
              <div className="text-center py-4 space-y-2">
                <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                <p className="text-xs font-mono font-bold text-white">¡Asistencia &amp; Transfer Registrados!</p>
                <p className="text-[11px] text-gray-400 font-mono">El chofer asignado te esperará en arribos de MDZ.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
