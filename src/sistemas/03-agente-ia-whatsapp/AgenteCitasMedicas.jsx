import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  CheckCircle2, 
  ArrowLeft, 
  HeartPulse, 
  Sparkles, 
  Check, 
  Bot, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

const SPECIALTIES = [
  { id: 'cardio', name: 'Cardiología & Checkup', doctor: 'Dr. Alejandro Favaloro (MN 89.412)', duration: '40 min' },
  { id: 'dermato', name: 'Dermatología Clínica', doctor: 'Dra. Silvina Aráoz (MN 112.580)', duration: '30 min' },
  { id: 'traumato', name: 'Traumatología & Columna', doctor: 'Dr. Martín Benítez (MN 94.215)', duration: '35 min' },
  { id: 'odonto', name: 'Odontología Integral', doctor: 'Dra. Camila Rossi (MN 105.901)', duration: '45 min' }
];

const AVAILABLE_TIMES = ['09:15', '10:30', '11:45', '14:20', '16:00', '17:30'];

export default function AgenteCitasMedicas({ onBack }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState(SPECIALTIES[0]);
  const [selectedDate, setSelectedDate] = useState('Mañana (Jueves 15)');
  const [selectedTime, setSelectedTime] = useState(AVAILABLE_TIMES[1]);
  const [patientName, setPatientName] = useState('');
  const [patientId, setPatientId] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!patientName.trim()) return;
    sound.playSuccess();
    triggerConfetti();
    setConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#111827] text-[#f3f4f6] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* BARRA SUPERIOR */}
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#374151]">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1f2937] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#4b5563] cursor-pointer text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[11px] font-mono font-bold tracking-widest text-teal-400 uppercase bg-[#1f2937] px-3 py-1.5 rounded-full border border-teal-500/30">
          DEMO IA 04 &bull; AGENTE MÉDICO &amp; CITAS EN VIVO
        </span>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* CABECERA */}
        <div className="bg-[#1f2937] rounded-2xl border border-[#374151] p-6 sm:p-8 shadow-xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0">
            <HeartPulse className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Agente IA de Admisión &amp; Triaje Médico
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Optimización de agendas médicas con sincronización directa a historias clínicas y confirmaciones instantáneas por WhatsApp.
            </p>
          </div>
        </div>

        {/* CONTENEDOR EN 2 COLUMNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SELECCIÓN Y FORMULARIO (7 cols) */}
          <div className="lg:col-span-7 bg-[#1f2937] rounded-2xl border border-[#374151] p-6 space-y-6">
            {!confirmed ? (
              <form onSubmit={handleConfirm} className="space-y-6">
                
                {/* Paso 1: Especialidad */}
                <div>
                  <span className="text-xs font-mono font-bold text-teal-400 uppercase block mb-2">
                    1. SELECCIONA ESPECIALIDAD MÉDICA
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {SPECIALTIES.map((spec) => (
                      <div
                        key={spec.id}
                        onClick={() => { sound.playPop(); setSelectedSpecialty(spec); }}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          selectedSpecialty.id === spec.id
                            ? 'bg-[#111827] border-teal-500 shadow-md text-white font-bold'
                            : 'bg-[#111827]/60 border-[#374151] text-gray-400 hover:text-white'
                        }`}
                      >
                        <p className="text-sm">{spec.name}</p>
                        <p className="text-[11px] text-gray-500 font-normal mt-0.5">{spec.doctor}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Paso 2: Horarios disponibles */}
                <div>
                  <span className="text-xs font-mono font-bold text-teal-400 uppercase block mb-2">
                    2. HORARIOS DISPONIBLES EN TIEMPO REAL
                  </span>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-xs font-mono">
                    {AVAILABLE_TIMES.map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => { sound.playPop(); setSelectedTime(time); }}
                        className={`py-2 rounded-lg border transition-all cursor-pointer ${
                          selectedTime === time
                            ? 'bg-teal-600 text-white border-transparent font-bold'
                            : 'bg-[#111827] text-gray-300 border-[#374151] hover:border-gray-400'
                        }`}
                      >
                        {time} hs
                      </button>
                    ))}
                  </div>
                </div>

                {/* Paso 3: Datos del paciente */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono font-bold text-teal-400 uppercase block">
                    3. DATOS DEL PACIENTE
                  </span>
                  <div>
                    <label className="block text-xs text-gray-300 mb-1">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Laura Gómez"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full bg-[#111827] border border-[#374151] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-300 mb-1">DNI / Documento de Identidad</label>
                    <input
                      type="text"
                      placeholder="Ej: 38.450.912"
                      value={patientId}
                      onChange={(e) => setPatientId(e.target.value)}
                      className="w-full bg-[#111827] border border-[#374151] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-600 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                >
                  Confirmar Turno Médico con la IA
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-teal-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white">¡Turno Médico Asignado!</h3>
                <p className="text-xs text-gray-300 max-w-md mx-auto">
                  Paciente: <strong className="text-white">{patientName}</strong> &bull; Horario: <strong className="text-teal-400">{selectedTime} hs ({selectedDate})</strong>.
                </p>
                <div className="bg-[#111827] p-4 rounded-xl border border-teal-500/40 text-xs font-mono text-left max-w-sm mx-auto space-y-1">
                  <p className="text-teal-400 font-bold">{selectedSpecialty.name}</p>
                  <p className="text-gray-400">{selectedSpecialty.doctor}</p>
                  <p className="text-gray-500 text-[10px] pt-1 border-t border-gray-800">
                    Se envió recordatorio con enlace de confirmación a WhatsApp.
                  </p>
                </div>
                <button
                  onClick={() => setConfirmed(false)}
                  className="text-xs text-teal-400 hover:underline pt-2 cursor-pointer"
                >
                  Solicitar otro turno
                </button>
              </div>
            )}
          </div>

          {/* RESUMEN LATERAL (5 cols) */}
          <div className="lg:col-span-5 bg-[#1f2937] rounded-2xl border border-[#374151] p-6 space-y-4">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
              ESTADO DEL SISTEMA CLÍNICO
            </span>
            <div className="bg-[#111827] p-4 rounded-xl border border-[#374151] space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Especialidad:</span>
                <span className="font-semibold text-white">{selectedSpecialty.name.split('&')[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Duración Consulta:</span>
                <span className="font-mono text-teal-400">{selectedSpecialty.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tasa de Asistencia:</span>
                <span className="font-mono text-emerald-400 font-bold">97.4% (+28% con IA)</span>
              </div>
            </div>

            <div className="p-3 bg-teal-950/40 border border-teal-800/40 rounded-xl text-[11px] text-teal-300">
              💡 <strong>Impacto Operativo:</strong> El agente reduce las llamadas en recepción un 65% y elimina las inasistencias mediante recordatorios interactivos 24 hs antes.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
