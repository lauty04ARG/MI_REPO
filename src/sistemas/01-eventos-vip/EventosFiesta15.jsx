import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  Music, 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowLeft, 
  ThumbsUp, 
  CheckCircle, 
  Share2 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

const INITIAL_PLAYLIST = [
  { id: 1, title: 'Bizarrap & Shakira - Music Sessions #53', votes: 48 },
  { id: 2, title: 'Dua Lipa - Levitating', votes: 39 },
  { id: 3, title: 'Emilia & Tini - La_Original.mp3', votes: 61 },
  { id: 4, title: 'Quevedo - BZRP Music Sessions #52', votes: 54 }
];

export default function EventosFiesta15({ onBack }) {
  const [playlist, setPlaylist] = useState(INITIAL_PLAYLIST);
  const [guestName, setGuestName] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleVote = (id) => {
    sound.playPop();
    setPlaylist(playlist.map(song => {
      if (song.id === id) {
        return { ...song, votes: song.votes + 1 };
      }
      return song;
    }).sort((a, b) => b.votes - a.votes));
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    sound.playSuccess();
    triggerConfetti();
    setConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#181119] text-[#fce7f3] py-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#ec4899] selection:text-white">
      
      {/* BARRA SUPERIOR */}
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#3b1d36]">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2b1627] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#53264b] cursor-pointer text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#ec4899] uppercase bg-[#2b1627] px-3 py-1.5 rounded-full border border-[#ec4899]/30">
          DEMO EVENTOS 03 &bull; FIESTA DE 15 GLAMOUR &amp; PLAYLIST
        </span>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* CABECERA INMERSIVA */}
        <div className="rounded-3xl bg-gradient-to-b from-[#2e1529] via-[#200e1c] to-[#140812] border border-[#ec4899]/40 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ec4899] uppercase mb-4">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>MIS QUINCE AÑOS &bull; NIGHT OF GLAMOUR</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-black text-white tracking-tight mb-4">
            Valentina
          </h1>

          <p className="text-sm sm:text-base text-pink-200/80 max-w-md mx-auto mb-8 font-light">
            Llegó la noche más soñada de mi vida y quiero compartirla con vos. ¡Vení listo para bailar hasta el amanecer!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-xs font-mono">
            <div className="bg-[#181119]/80 p-3 rounded-xl border border-[#53264b] flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-[#ec4899]" />
              <span>Sábado 12 de Diciembre</span>
            </div>
            <div className="bg-[#181119]/80 p-3 rounded-xl border border-[#53264b] flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#ec4899]" />
              <span>21:30 HS PUNTUAL</span>
            </div>
            <div className="bg-[#181119]/80 p-3 rounded-xl border border-[#53264b] flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-[#ec4899]" />
              <span>Salón Terrazas del Lago</span>
            </div>
          </div>
        </div>

        {/* DRESS CODE & PLAYLIST EN VIVO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* PLAYLIST COLABORATIVA (7 cols) */}
          <div className="lg:col-span-7 bg-[#251221] rounded-2xl border border-[#482040] p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#482040]">
              <span className="text-xs font-mono font-bold text-[#ec4899] uppercase flex items-center gap-2">
                <Music className="w-4 h-4" /> PLAYLIST COLABORATIVA DEL DJ
              </span>
              <span className="text-[10px] font-mono text-pink-300">Vota tus favoritas</span>
            </div>

            <div className="space-y-3">
              {playlist.map((song, idx) => (
                <div
                  key={song.id}
                  className="bg-[#180c16] p-4 rounded-xl border border-[#482040] flex items-center justify-between gap-4 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#ec4899] w-5">#{idx + 1}</span>
                    <p className="text-xs sm:text-sm font-semibold text-white">{song.title}</p>
                  </div>

                  <button
                    onClick={() => handleVote(song.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#35152f] hover:bg-[#ec4899] hover:text-black text-pink-200 text-xs font-mono transition-colors cursor-pointer shrink-0"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{song.votes}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* DRESS CODE & CONFIRMACIÓN (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tarjeta Dress Code */}
            <div className="bg-[#251221] rounded-2xl border border-[#482040] p-6 shadow-xl space-y-3">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                DRESS CODE &bull; ELEGANTE
              </span>
              <p className="text-xs text-pink-200/80 leading-relaxed">
                Ellos: Traje o camisa de vestir oscura.<br />
                Ellas: Vestido largo o cóctel.<br />
                <strong className="text-[#ec4899]">Importante:</strong> El color Rosa Champagne y Blanco quedan reservados para la quinceañera.
              </p>
            </div>

            {/* Confirmación RSVP */}
            <div className="bg-[#251221] rounded-2xl border border-[#ec4899]/50 p-6 shadow-xl">
              {!confirmed ? (
                <form onSubmit={handleConfirm} className="space-y-3 text-xs">
                  <span className="text-xs font-mono font-bold text-white uppercase block mb-2">
                    CONFIRMAR ASISTENCIA
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Tu Nombre y Apellido..."
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#180c16] border border-[#482040] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#ec4899]"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#ec4899] to-[#db2777] hover:from-[#db2777] hover:to-[#be185d] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                  >
                    Confirmar mi Lugar en la Fiesta
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 space-y-2">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                  <p className="text-sm font-bold text-white">¡Lugar Confirmado, {guestName}!</p>
                  <p className="text-xs text-pink-200/80">Nos vemos el 12 de Diciembre en Terrazas del Lago.</p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
