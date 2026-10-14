import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Heart, 
  ArrowRight, 
  Star, 
  Award 
} from 'lucide-react';
import { sound } from '../utils/soundEffects.js';
import { triggerConfetti } from '../utils/confetti.js';

// EDITAR AQUÍ: Datos de la clínica estética
const CLINIC_INFO = {
  name: "LUMIÈRE &bull; Aesthetic Medicine &amp; Spa",
  address: "Av. Libertador 4820 &bull; Palermo Chico, CABA",
  whatsapp: "5492210000000"
};

const TREATMENTS = [
  {
    id: 'laser',
    title: 'Rejuvenecimiento Láser PicoSure &bull; Glow Facial',
    category: 'Dermatología Avanzada',
    duration: '45 min',
    price: '$180 USD',
    desc: 'Estimulación de colágeno profundo, eliminación de manchas solares y unificación del tono sin tiempo de recuperación.'
  },
  {
    id: 'botox',
    title: 'Armonización Facial &bull; Toxina Botulínica &amp; Ácido Hialurónico',
    category: 'Medicina Antiage',
    duration: '30 min',
    price: '$260 USD',
    desc: 'Técnica de micro-puntos para suavizar líneas de expresión respetando la naturalidad y gestualidad facial.'
  },
  {
    id: 'sculpt',
    title: 'Modelado Corporal No Invasivo &bull; Emsculpt NEO',
    category: 'Body Contouring',
    duration: '50 min',
    price: '$220 USD',
    desc: 'Reducción de grasa localizada y tonificación muscular simultánea mediante radiofrecuencia sincronizada.'
  }
];

export default function BocetoClinicaEstetica({ onBack }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [selectedTreatment, setSelectedTreatment] = useState(TREATMENTS[0]);
  const [booked, setBooked] = useState(false);

  const handleBook = () => {
    sound.playSuccess();
    triggerConfetti();
    setBooked(true);
  };

  return (
    <div className="min-h-screen bg-[#110e13] text-[#f7eef2] font-sans selection:bg-[#f472b6] selection:text-black">
      
      {/* BARRA SUPERIOR DE DEMO */}
      <div className="bg-[#19141c] border-b border-[#312536] py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => { sound.playPop(); onBack(); }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#261d2b] hover:bg-[#DA0037] text-xs font-semibold transition-all border border-[#44334d] cursor-pointer text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a RED Soluciones Digitales</span>
          </button>

          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#f472b6] uppercase bg-[#261524] px-3 py-1 rounded-full border border-[#f472b6]/30">
            BOCETO WEB 05 &bull; CLÍNICA DE ESTÉTICA &amp; WELLNESS VIP
          </span>
        </div>
      </div>

      {/* HEADER DE LUJO */}
      <header className="border-b border-[#291e2e] py-6 px-4 sm:px-8 bg-[#110e13]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#f472b6]/20 border border-[#f472b6]/50 flex items-center justify-center text-[#f472b6]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-widest text-white block">
                LUMIÈRE
              </span>
              <span className="text-[9px] font-mono text-[#c49db4] tracking-widest uppercase block">
                Aesthetic Medicine &amp; Longevity
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-[#d1b1c3]">
            <a href="#tratamientos" className="hover:text-[#f472b6] transition-colors">Tratamientos</a>
            <a href="#resultados" className="hover:text-[#f472b6] transition-colors">Antes &amp; Después</a>
            <a href="#filosofia" className="hover:text-[#f472b6] transition-colors">Staff Médico</a>
          </nav>

          <a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola,%20quisiera%20agendar%20una%20evaluación%20en%20Lumiere`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#f472b6] to-[#ec4899] hover:from-[#ec4899] hover:to-[#db2777] text-black font-semibold text-xs tracking-wider transition-all duration-300 shadow-lg"
          >
            Consulta Privada
          </a>
        </div>
      </header>

      {/* HERO SECTION INMERSIVA */}
      <section className="py-24 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-6">
        <span className="text-xs font-mono tracking-widest uppercase text-[#f472b6] bg-[#291726] px-4 py-1.5 rounded-full border border-[#f472b6]/30 inline-block">
          EXCELENCIA MÉDICA &bull; TECNOLOGÍA NO INVASIVA
        </span>

        <h1 className="text-4xl sm:text-6xl font-serif font-light text-white tracking-tight leading-tight">
          La mejor versión de tu piel, realzada con <span className="italic font-normal text-[#f472b6]">sutileza</span>.
        </h1>

        <p className="text-sm sm:text-base text-[#d1b1c3] max-w-2xl mx-auto font-light leading-relaxed">
          Protocolos biomédicos personalizados bajo dirección dermatológica para potenciar tu belleza auténtica sin alterar tus rasgos.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-mono text-gray-300">
          <div className="bg-[#1f1624] px-4 py-2 rounded-full border border-[#3e2947] flex items-center gap-2">
            <Award className="w-4 h-4 text-[#f472b6]" />
            <span>Médicos Certificados UBA &bull; Harvard CME</span>
          </div>
          <div className="bg-[#1f1624] px-4 py-2 rounded-full border border-[#3e2947] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#f472b6]" />
            <span>Tecnología FDA Aprobada</span>
          </div>
        </div>
      </section>

      {/* COMPARADOR ANTES / DESPUÉS INTERACTIVO (MICRO-INTERACCIÓN DE DELEITE) */}
      <section id="resultados" className="py-16 px-4 sm:px-8 max-w-5xl mx-auto border-t border-[#291e2e]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono text-[#f472b6] uppercase tracking-widest block mb-1">
            EVIDENCIA CLÍNICA
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white">
            Resultados Naturales &bull; Desliza para Comparar
          </h2>
          <p className="text-xs text-[#c49db4] mt-1">
            Simulación interactiva de textura, luminosidad y reducción de poros tras 3 sesiones de Láser Glow.
          </p>
        </div>

        {/* Caja de comparación con slider interactivo */}
        <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden border border-[#44334d] h-72 sm:h-80 shadow-2xl select-none">
          {/* Lado "Después" (Fondo brillante y pulido) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c1d33] via-[#3d2647] to-[#502e5c] flex items-center justify-end pr-10">
            <div className="text-right">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-[#f472b6]/20 text-[#f472b6] px-3 py-1 rounded-full border border-[#f472b6]/40">
                LUMIÈRE GLOW (DESPUÉS)
              </span>
              <p className="text-white font-serif text-xl sm:text-2xl font-bold mt-2">Piel Tersa &amp; Luminosa</p>
              <p className="text-xs text-[#f472b6] font-mono mt-0.5">Colágeno +84% &bull; Textura de Seda</p>
            </div>
          </div>

          {/* Lado "Antes" (Superpuesto y cortado según slider) */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#17131a] to-[#241a29] flex items-center justify-start pl-10 border-r-2 border-[#f472b6]"
            style={{ width: `${sliderPos}%`, overflow: 'hidden' }}
          >
            <div className="min-w-[280px]">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-black/40 text-gray-400 px-3 py-1 rounded-full border border-gray-700">
                ESTADO PREVIO (ANTES)
              </span>
              <p className="text-gray-300 font-serif text-xl sm:text-2xl font-medium mt-2">Tono Apagado &bull; Manchas</p>
              <p className="text-xs text-gray-400 font-mono mt-0.5">Líneas finas &bull; Deshidratación</p>
            </div>
          </div>

          {/* Controlador Slider */}
          <input
            type="range"
            min="5"
            max="95"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />

          <div
            className="absolute top-0 bottom-0 pointer-events-none flex items-center justify-center -ml-4 z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-[#f472b6] text-black shadow-lg flex items-center justify-center font-bold text-xs">
              &harr;
            </div>
          </div>
        </div>
      </section>

      {/* SELECTOR DE TRATAMIENTOS CON RESERVA INSTANTÁNEA */}
      <section id="tratamientos" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-[#291e2e]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#f472b6] uppercase tracking-widest block mb-1">
            EXPERIENCIAS CLÍNICAS
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white">
            Nuestros Protocolos Exclusivos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {TREATMENTS.map((t) => (
            <div
              key={t.id}
              onClick={() => { sound.playPop(); setSelectedTreatment(t); }}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                selectedTreatment.id === t.id
                  ? 'bg-[#221729] border-[#f472b6] shadow-lg shadow-[#f472b6]/10'
                  : 'bg-[#18121d] border-[#312536] hover:border-[#f472b6]/50'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#f472b6] block mb-2">
                  {t.category}
                </span>
                <h3 className="text-lg font-serif font-bold text-white mb-2">
                  {t.title.split('&bull;')[0]}
                </h3>
                <p className="text-xs text-[#c49db4] leading-relaxed mb-4">
                  {t.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#312536] flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#f472b6]" /> {t.duration}
                </span>
                <span className="font-serif font-bold text-[#f472b6] text-base">
                  {t.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* RESERVA RÁPIDA VIP */}
        <div className="bg-[#18121d] border border-[#f472b6]/40 p-8 rounded-3xl max-w-3xl mx-auto text-center space-y-4">
          {!booked ? (
            <div>
              <p className="text-xs font-mono text-[#f472b6] uppercase tracking-wider">
                TRATAMIENTO SELECCIONADO
              </p>
              <h3 className="text-xl sm:text-2xl font-serif text-white font-bold mt-1">
                {selectedTreatment.title}
              </h3>
              <p className="text-xs text-[#c49db4] max-w-md mx-auto mt-1 mb-6">
                Duración: <strong>{selectedTreatment.duration}</strong> &bull; Valor sesión: <strong className="text-[#f472b6]">{selectedTreatment.price}</strong>
              </p>

              <button
                onClick={handleBook}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#f472b6] to-[#ec4899] hover:from-[#ec4899] hover:to-[#db2777] text-black font-bold text-xs uppercase tracking-widest transition-all shadow-xl cursor-pointer"
              >
                Reservar Cita de Evaluación VIP
              </button>
            </div>
          ) : (
            <div className="py-4 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#f472b6] mx-auto animate-bounce" />
              <h3 className="text-xl font-serif font-bold text-white">¡Cita Solicitada con Éxito!</h3>
              <p className="text-xs text-[#c49db4] max-w-md mx-auto">
                Tu concierge médico de Lumière se contactará en minutos vía WhatsApp para coordinar el horario de tu sesión.
              </p>
              <button
                onClick={() => setBooked(false)}
                className="text-xs text-[#f472b6] hover:underline font-mono pt-2 cursor-pointer"
              >
                Seleccionar otro tratamiento
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#291e2e] py-8 text-center text-xs font-mono text-[#8a6e7e] bg-[#0c0a0e]">
        <p>&copy; {new Date().getFullYear()} {CLINIC_INFO.name} &bull; Maquetado por RED Soluciones Digitales</p>
      </footer>

    </div>
  );
}
