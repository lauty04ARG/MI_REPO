import React, { useState } from 'react';
import { 
  Terminal, 
  Bot, 
  CheckCircle, 
  AlertTriangle, 
  ArrowLeft, 
  Play, 
  RotateCcw, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Sparkles 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

const COMMON_INCIDENTS = [
  {
    id: 'ssl',
    title: 'Certificado SSL TLS/HTTPS Expirado',
    severity: 'Alta',
    system: 'Nginx Gateway',
    steps: [
      'Iniciando verificación de puertos 80 y 443...',
      'Detectado error: SEC_ERROR_EXPIRED_CERTIFICATE',
      'Ejecutando certbot renew --nginx en contenedor...',
      'Nuevo certificado emitido con éxito por Let\'s Encrypt (Validez 90 días).',
      'Recargando configuración de proxy inverso sin downtime.'
    ]
  },
  {
    id: 'db_latency',
    title: 'Cuello de Botella y Locks en PostgreSQL',
    severity: 'Crítica',
    system: 'Cluster DB Primario',
    steps: [
      'Analizando pg_stat_activity...',
      'Detectada consulta huérfana en tabla "pedidos_log" (duración > 450s).',
      'Ejecutando pg_terminate_backend(PID: 8492)...',
      'Liberando índices bloqueados y optimizando buffer pool.',
      'Latencia de lectura restablecida a 8.4 ms (Normal).'
    ]
  },
  {
    id: 'docker_memory',
    title: 'Alerta de OOM Killer en Contenedor Docker',
    severity: 'Media',
    system: 'Worker Node 03',
    steps: [
      'Monitoreando cgroups v2 memoria de contenedores...',
      'Worker Celery superó umbral del 92% RAM (3.8GB / 4.0GB).',
      'Iniciando rotación suave de workers y drenado de tareas.',
      'Liberados 2.1 GB de caché volátil.',
      'Contenedor estabilizado al 38% de consumo.'
    ]
  }
];

export default function AgenteHelpdeskIT({ onBack }) {
  const [selectedIncident, setSelectedIncident] = useState(COMMON_INCIDENTS[0]);
  const [isFixing, setIsFixing] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [resolved, setResolved] = useState(false);

  const handleRunDiagnostic = () => {
    sound.playLaser();
    setIsFixing(true);
    setResolved(false);
    setConsoleLogs([]);

    selectedIncident.steps.forEach((step, idx) => {
      setTimeout(() => {
        sound.playBlip();
        setConsoleLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${step}`]);

        if (idx === selectedIncident.steps.length - 1) {
          setIsFixing(false);
          setResolved(true);
          sound.playSuccess();
          triggerConfetti();
        }
      }, (idx + 1) * 700);
    });
  };

  return (
    <div className="min-h-screen bg-[#0e1117] text-[#c9d1d9] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* BARRA SUPERIOR */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#21262d]">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161b22] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#30363d] cursor-pointer text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#58a6ff] uppercase bg-[#161b22] px-3 py-1.5 rounded-full border border-[#58a6ff]/30">
          DEMO IA 03 &bull; AGENTE AUTÓNOMO DE INFRAESTRUCTURA IT
        </span>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* CABECERA */}
        <div className="bg-[#161b22] rounded-2xl border border-[#30363d] p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Bot className="w-6 h-6 text-[#58a6ff]" />
              <h1 className="text-xl sm:text-2xl font-bold text-white font-mono">
                Agente IA SRE &amp; Helpdesk Autónomo
              </h1>
            </div>
            <p className="text-xs text-[#8b949e]">
              Agente especializado en diagnóstico de incidentes de servidor, ejecución de scripts correctivos y auto-remediación en tiempo real.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-800/40 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AGENTE EN GUARDA ACTIVA</span>
          </div>
        </div>

        {/* INCIDENTES SIMULADOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COMMON_INCIDENTS.map((inc) => (
            <div
              key={inc.id}
              onClick={() => {
                if (isFixing) return;
                sound.playPop();
                setSelectedIncident(inc);
                setConsoleLogs([]);
                setResolved(false);
              }}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                selectedIncident.id === inc.id
                  ? 'bg-[#1f242c] border-[#58a6ff] shadow-lg'
                  : 'bg-[#161b22] border-[#30363d] hover:border-[#8b949e]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold ${
                  inc.severity === 'Crítica'
                    ? 'bg-rose-950/60 text-rose-400 border border-rose-800/40'
                    : 'bg-amber-950/60 text-amber-400 border border-amber-800/40'
                }`}>
                  Severidad: {inc.severity}
                </span>
                <span className="text-[10px] font-mono text-[#8b949e]">{inc.system}</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{inc.title}</h3>
              <p className="text-xs text-[#8b949e] font-mono">
                {inc.steps.length} pasos de auto-remediación definidos
              </p>
            </div>
          ))}
        </div>

        {/* CONSOLA DE DIAGNÓSTICO EN VIVO */}
        <div className="bg-[#0d1117] rounded-2xl border border-[#30363d] overflow-hidden shadow-2xl">
          {/* Cabecera de la terminal */}
          <div className="bg-[#161b22] px-4 py-3 border-b border-[#30363d] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-[#8b949e] ml-2">
                red-agent@core-infra:~# auto-remediate --target={selectedIncident.id}
              </span>
            </div>

            <button
              onClick={handleRunDiagnostic}
              disabled={isFixing}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#58a6ff] hover:bg-[#388bfd] text-black font-mono font-bold text-xs transition-all cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>{isFixing ? 'Ejecutando Remedio...' : 'Ejecutar Auto-Remediación'}</span>
            </button>
          </div>

          {/* Cuerpo de la consola */}
          <div className="p-6 font-mono text-xs sm:text-sm min-h-[260px] max-h-[360px] overflow-y-auto space-y-2 bg-[#090d12]">
            <p className="text-[#8b949e]">
              // RED Autonomous Diagnostic Engine v3.4 &bull; Presiona "Ejecutar Auto-Remediación" para resolver el incidente.
            </p>

            {consoleLogs.map((log, lIdx) => (
              <p key={lIdx} className="text-emerald-400 flex items-start gap-2 leading-relaxed">
                <span className="text-[#58a6ff] select-none">&gt;</span>
                <span>{log}</span>
              </p>
            ))}

            {isFixing && (
              <p className="text-amber-400 flex items-center gap-2 animate-pulse">
                <span>&gt;</span>
                <span>El agente está ejecutando comandos en el cluster...</span>
              </p>
            )}

            {resolved && (
              <div className="pt-4 border-t border-[#30363d] text-emerald-400 font-bold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>INCIDENTE RESUELTO. TICKET CERRADO AUTOMÁTICAMENTE EN 3.4 SEGUNDOS.</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
