import React, { useState } from 'react';
import { 
  Terminal, 
  Clock, 
  ThumbsUp, 
  QrCode, 
  ArrowLeft, 
  Sparkles, 
  Users, 
  MapPin, 
  CheckCircle, 
  Video 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

const TALKS = [
  { id: 1, time: '10:00 - 11:00 hs', title: 'Agentes Autónomos & Razonamiento Profundo en Producción', speaker: 'Dr. Hernán Faigenbaum', track: 'Inteligencia Artificial', votes: 142 },
  { id: 2, time: '11:30 - 12:30 hs', title: 'Arquitecturas Serverless & Escalabilidad con Kubernetes', speaker: 'Ing. Sofía Carrizo', track: 'Cloud & DevOps', votes: 98 },
  { id: 3, time: '14:00 - 15:00 hs', title: 'Zero Trust & Ciberseguridad en Sistemas Críticos B2B', speaker: 'Lic. Mariano Quiroga', track: 'Ciberseguridad', votes: 115 }
];

export default function EventosSummitTech({ onBack }) {
  const [talks, setTalks] = useState(TALKS);
  const [accredited, setAccredited] = useState(false);
  const [attendeeName, setAttendeeName] = useState('');
  const [company, setCompany] = useState('');

  const handleVote = (id) => {
    sound.playPop();
    setTalks(talks.map(t => {
      if (t.id === id) {
        return { ...t, votes: t.votes + 1 };
      }
      return t;
    }));
  };

  const handleAccredit = (e) => {
    e.preventDefault();
    if (!attendeeName.trim()) return;
    sound.playSuccess();
    triggerConfetti();
    setAccredited(true);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#EDEDED] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* BARRA SUPERIOR */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#30363d]">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161b22] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#30363d] cursor-pointer text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#58a6ff] uppercase bg-[#161b22] px-3 py-1.5 rounded-full border border-[#58a6ff]/30">
          DEMO EVENTOS 02 &bull; TECH SUMMIT &amp; ACREDITACIÓN DIGITAL
        </span>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* CABECERA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#161b22] to-[#0f141c] border border-[#30363d] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <span className="text-xs font-mono font-bold tracking-widest text-[#58a6ff] uppercase mb-2 block">
            CONGRESO ANUAL &bull; RED TECH SUMMIT 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Innovación en Software, Datos &amp; IA Aplicada
          </h1>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto mb-6">
            1.200 desarrolladores, líderes técnicos y directores de ingeniería reunidos en un solo ecosistema digital.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-gray-300">
            <span className="bg-[#0d1117] px-3 py-1.5 rounded-lg border border-[#30363d]">
              📅 18 de Noviembre de 2026
            </span>
            <span className="bg-[#0d1117] px-3 py-1.5 rounded-lg border border-[#30363d]">
              📍 Centro de Convenciones Bs.As. + Streaming HD
            </span>
          </div>
        </div>

        {/* CONTENEDOR EN 2 COLUMNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* AGENDA DE CHARLAS & VOTACIÓN EN VIVO (7 cols) */}
          <div className="lg:col-span-7 bg-[#161b22] rounded-2xl border border-[#30363d] p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#30363d]">
              <span className="text-xs font-mono font-bold text-[#58a6ff] uppercase">
                AGENDA OFICIAL &bull; VOTACIÓN DE PREGUNTAS A SPEAKERS
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded">
                EN VIVO
              </span>
            </div>

            <div className="space-y-4">
              {talks.map((talk) => (
                <div
                  key={talk.id}
                  className="bg-[#0d1117] p-5 rounded-xl border border-[#30363d] hover:border-[#58a6ff]/60 transition-all space-y-3"
                >
                  <div className="flex justify-between items-start text-xs font-mono">
                    <span className="text-[#58a6ff] font-bold">{talk.time}</span>
                    <span className="text-gray-400 bg-[#161b22] px-2 py-0.5 rounded">{talk.track}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {talk.title}
                  </h3>

                  <div className="flex items-center justify-between pt-2 border-t border-[#21262d] text-xs">
                    <span className="text-gray-400">Speaker: <strong className="text-gray-200">{talk.speaker}</strong></span>
                    
                    <button
                      onClick={() => handleVote(talk.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161b22] hover:bg-[#58a6ff] hover:text-black text-gray-300 font-mono text-xs transition-colors cursor-pointer"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{talk.votes} Votos</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CREDENCIAL DE ACREDITACIÓN DIGITAL (5 cols) */}
          <div className="lg:col-span-5 bg-[#161b22] rounded-2xl border border-[#30363d] p-6 shadow-xl space-y-4">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
              ACREDITACIÓN RÁPIDA VIP
            </span>

            {!accredited ? (
              <form onSubmit={handleAccredit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-300 mb-1">Nombre y Apellido *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Emiliano Zapata"
                    value={attendeeName}
                    onChange={(e) => setAttendeeName(e.target.value)}
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#58a6ff]"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-1">Empresa / Startup</label>
                  <input
                    type="text"
                    placeholder="Ej: Mercado Libre / Global Logic"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#58a6ff]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#58a6ff] hover:bg-[#388bfd] text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                >
                  Generar Badge Digital con QR
                </button>
              </form>
            ) : (
              <div className="bg-[#0d1117] border-2 border-[#58a6ff] rounded-2xl p-6 text-center space-y-4 shadow-xl">
                <span className="text-[10px] font-mono font-bold text-[#58a6ff] uppercase tracking-widest block">
                  PASS DE ACCESO DIGITAL VIP
                </span>
                <p className="text-xl font-black text-white">{attendeeName}</p>
                <p className="text-xs text-gray-400 font-mono">{company || 'Tech Attendee'}</p>

                <div className="p-4 bg-white rounded-xl inline-block my-2">
                  <QrCode className="w-24 h-24 text-black" />
                </div>

                <p className="text-[10px] text-gray-500 font-mono">
                  Valida tu ingreso en los molinetes de acreditación contactless.
                </p>

                <button
                  onClick={() => setAccredited(false)}
                  className="text-xs text-[#58a6ff] hover:underline block mx-auto cursor-pointer"
                >
                  Generar otro pase
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
