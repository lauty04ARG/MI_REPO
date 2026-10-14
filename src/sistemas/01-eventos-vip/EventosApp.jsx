import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Music, 
  Utensils, 
  Users, 
  QrCode, 
  Share2, 
  ArrowLeft, 
  Sparkles, 
  Check, 
  Heart 
} from 'lucide-react';

// EDITAR AQUÍ: Datos del evento
const EVENT_DETAILS = {
  title: "Gala & Celebración Camila & Mateo",
  date: "Sábado 24 de Octubre de 2026",
  time: "20:30 HS",
  venue: "Palacio San Souci, Salón Dorado",
  address: "Victoria, Buenos Aires, Argentina",
  organizerWhatsApp: "5492210000000"
};

export default function EventosApp({ onBack }) {
  // Estado del formulario de confirmación
  const [guestName, setGuestName] = useState('');
  const [companions, setCompanions] = useState(0);
  const [dietary, setDietary] = useState('Tradicional');
  const [songRequest, setSongRequest] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [passCode, setPassCode] = useState('');

  // Lista interactiva de invitados en vivo
  const [confirmedList, setConfirmedList] = useState([
    { id: 1, name: "Valentina Rossi", companions: 1, dietary: "Vegetariano", code: "VIP-8492" },
    { id: 2, name: "Lucas Santillán", companions: 0, dietary: "Celíaco", code: "VIP-3211" },
    { id: 3, name: "Sofía Méndez", companions: 2, dietary: "Tradicional", code: "VIP-9940" }
  ]);

  // Lista de canciones pedidas
  const [songs, setSongs] = useState([
    { id: 1, song: "Coldplay - A Sky Full of Stars", user: "Valentina" },
    { id: 2, song: "Daft Punk - One More Time", user: "Lucas" }
  ]);

  const handleSubmitRSVP = (e) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    const generatedCode = `VIP-${Math.floor(1000 + Math.random() * 9000)}`;
    setPassCode(generatedCode);

    const newGuest = {
      id: Date.now(),
      name: guestName,
      companions: Number(companions),
      dietary,
      code: generatedCode
    };

    setConfirmedList([newGuest, ...confirmedList]);

    if (songRequest.trim()) {
      setSongs([{ id: Date.now(), song: songRequest, user: guestName }, ...songs]);
    }

    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    setGuestName('');
    setCompanions(0);
    setSongRequest('');
  };

  // Enviar confirmación por WhatsApp
  const sendWhatsAppRSVP = () => {
    const text = `¡Hola! Confirmo mi asistencia para la ${EVENT_DETAILS.title}:
*Nombre:* ${guestName}
*Acompañantes:* ${companions}
*Menú especial:* ${dietary}
*Código de Pase:* ${passCode}
¡Muchas gracias!`;

    window.open(`https://wa.me/${EVENT_DETAILS.organizerWhatsApp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#EDEDED] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* BARRA SUPERIOR DE NAVEGACIÓN */}
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#444444]/40">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#222222] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#444444]/60 cursor-pointer text-[#EDEDED]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#DA0037] uppercase bg-[#171717] px-3 py-1.5 rounded-full border border-[#DA0037]/30">
          DEMO FUNCIONAL &bull; SISTEMA 01
        </span>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* CABECERA DE LA INVITACIÓN */}
        <div className="text-center rounded-3xl bg-gradient-to-b from-[#222222] to-[#171717] border border-[#DA0037]/30 p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-80 h-32 bg-[#DA0037]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#DA0037] uppercase mb-4">
            <Heart className="w-4 h-4 fill-[#DA0037]" />
            <span>INVITACIÓN EXCLUSIVA &bull; RSVP DIGITAL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            {EVENT_DETAILS.title}
          </h1>

          <p className="text-base sm:text-lg text-[#A1A1AA] max-w-xl mx-auto mb-8">
            Nos complace invitarte a ser parte de esta velada única. Por favor, confirma tu asistencia para asignarte tu mesa y credencial.
          </p>

          {/* DATOS DE FECHA Y LUGAR */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-xs sm:text-sm">
            <div className="bg-[#171717]/80 p-3.5 rounded-xl border border-[#444444]/40 flex items-center justify-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#DA0037]" />
              <span>{EVENT_DETAILS.date}</span>
            </div>
            <div className="bg-[#171717]/80 p-3.5 rounded-xl border border-[#444444]/40 flex items-center justify-center gap-2.5">
              <Clock className="w-4 h-4 text-[#DA0037]" />
              <span>{EVENT_DETAILS.time}</span>
            </div>
            <div className="bg-[#171717]/80 p-3.5 rounded-xl border border-[#444444]/40 flex items-center justify-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#DA0037]" />
              <span>{EVENT_DETAILS.venue}</span>
            </div>
          </div>
        </div>

        {/* CONTENEDOR EN 2 COLUMNAS: FORMULARIO O CREDENCIAL + LISTA EN VIVO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLUMNA FORMULARIO O CREDENCIAL (7 cols) */}
          <div className="lg:col-span-7">
            {!confirmed ? (
              <div className="bg-[#222222] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 shadow-xl">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#DA0037]" />
                  <span>Confirmación de Asistencia</span>
                </h2>
                <p className="text-xs text-[#A1A1AA] mb-6">
                  Completa tus datos para emitir tu pase personal con validación por código QR.
                </p>

                <form onSubmit={handleSubmitRSVP} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#EDEDED] mb-1">
                      Nombre y Apellido Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Ej: Marcos Benítez"
                      className="w-full bg-[#171717] border border-[#444444] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DA0037]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#EDEDED] mb-1">
                        Acompañantes Adicionales
                      </label>
                      <select
                        value={companions}
                        onChange={(e) => setCompanions(e.target.value)}
                        className="w-full bg-[#171717] border border-[#444444] rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#DA0037]"
                      >
                        <option value={0}>Voy solo/a (0)</option>
                        <option value={1}>+1 Acompañante</option>
                        <option value={2}>+2 Acompañantes</option>
                        <option value={3}>+3 Acompañantes</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#EDEDED] mb-1">
                        Preferencia de Menú
                      </label>
                      <select
                        value={dietary}
                        onChange={(e) => setDietary(e.target.value)}
                        className="w-full bg-[#171717] border border-[#444444] rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#DA0037]"
                      >
                        <option value="Tradicional">Gourmet Tradicional</option>
                        <option value="Vegetariano">Vegetariano</option>
                        <option value="Vegano">Vegano</option>
                        <option value="Celíaco">Sin TACC / Celíaco</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#EDEDED] mb-1 flex items-center gap-1.5">
                      <Music className="w-3.5 h-3.5 text-[#DA0037]" />
                      <span>¿Qué canción no puede faltar en la fiesta? (Opcional)</span>
                    </label>
                    <input
                      type="text"
                      value={songRequest}
                      onChange={(e) => setSongRequest(e.target.value)}
                      placeholder="Ej: Queen - Don't Stop Me Now"
                      className="w-full bg-[#171717] border border-[#444444] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DA0037]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 px-6 rounded-xl bg-[#DA0037] hover:bg-[#b0002c] text-white font-bold text-sm shadow-red-glow transition-all duration-200 cursor-pointer"
                  >
                    Confirmar Asistencia y Generar Pase
                  </button>
                </form>
              </div>
            ) : (
              /* PASE DIGITAL GENERADO */
              <div className="bg-[#222222] rounded-2xl border-2 border-[#DA0037] p-8 shadow-red-glow relative">
                <div className="flex items-center justify-between pb-4 border-b border-[#444444]/40">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">PASE VIP CONFIRMADO</span>
                  </div>
                  <span className="font-mono text-xs text-[#DA0037] font-black">{passCode}</span>
                </div>

                <div className="my-6 space-y-3">
                  <p className="text-2xl font-black text-white">{guestName}</p>
                  <p className="text-xs text-[#A1A1AA]">
                    Acceso para <strong>{1 + Number(companions)} personas</strong> &bull; Menú: <strong className="text-white">{dietary}</strong>
                  </p>
                  
                  {/* CÓDIGO QR SIMULADO */}
                  <div className="p-4 bg-white rounded-xl inline-flex items-center justify-center shadow-lg my-2">
                    <QrCode className="w-24 h-24 text-black" />
                  </div>
                  <p className="text-[11px] text-[#A1A1AA] font-mono">Presenta este código en el ingreso del salón.</p>
                </div>

                <div className="pt-4 border-t border-[#444444]/40 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={sendWhatsAppRSVP}
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Notificar al Organizador (WhatsApp)</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="py-3 px-4 rounded-xl bg-[#171717] hover:bg-[#333] text-gray-300 font-semibold text-xs border border-[#444444] transition-all cursor-pointer"
                  >
                    Confirmar Otro Pase
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* COLUMNA LATERAL: PANEL DEL ORGANIZADOR (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* INVITADOS CONFIRMADOS */}
            <div className="bg-[#222222] rounded-2xl border border-[#444444]/50 p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#DA0037] uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>INVITADOS CONFIRMADOS ({confirmedList.length})</span>
                </span>
                <span className="text-[10px] bg-emerald-950/60 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800/40">
                  EN VIVO
                </span>
              </div>

              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {confirmedList.map((g) => (
                  <div key={g.id} className="p-2.5 rounded-lg bg-[#171717] border border-[#444444]/40 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-white">{g.name}</p>
                      <p className="text-[10px] text-[#A1A1AA]">
                        +{g.companions} acompañante(s) &bull; {g.dietary}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-[#DA0037] bg-[#DA0037]/10 px-2 py-0.5 rounded border border-[#DA0037]/20">
                      {g.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PLAYLIST SUGERIDA */}
            <div className="bg-[#222222] rounded-2xl border border-[#444444]/50 p-6 shadow-xl">
              <span className="text-xs font-mono font-bold text-[#EDEDED] uppercase tracking-wider flex items-center gap-1.5 mb-3">
                <Music className="w-4 h-4 text-[#DA0037]" />
                <span>SOLICITUDES PARA EL DJ ({songs.length})</span>
              </span>

              <div className="space-y-2">
                {songs.map((s) => (
                  <div key={s.id} className="p-2 rounded bg-[#171717] border border-[#444444]/30 text-xs flex justify-between items-center">
                    <span className="text-gray-200 truncate pr-2">{s.song}</span>
                    <span className="text-[9px] font-mono text-gray-500 shrink-0">por {s.user}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
