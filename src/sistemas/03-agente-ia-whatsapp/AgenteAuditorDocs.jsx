import React, { useState } from 'react';
import { 
  FileSearch, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  ArrowLeft, 
  Play, 
  Download, 
  Sparkles, 
  Cpu, 
  ShieldAlert, 
  Code 
} from 'lucide-react';
import { sound } from '../../utils/soundEffects.js';
import { triggerConfetti } from '../../utils/confetti.js';

const SAMPLE_DOCS = [
  {
    id: 'contract_nda',
    title: 'Contrato de Prestación de Servicios & NDA',
    type: 'PDF &bull; 8 Páginas',
    riskScore: 'Bajo',
    extracted: {
      parties: 'TechCorp S.A. vs Innova Solutions S.R.L.',
      penalties: 'Cláusula 9: Penalidad de $5.000 USD por rescisión unilateral sin preaviso de 30 días.',
      jurisdiction: 'Tribunales Ordinarios de CABA',
      ndaPeriod: '3 años a partir de la firma',
      totalValue: '$36.000 USD anual'
    }
  },
  {
    id: 'invoice_tax',
    title: 'Factura de Proveedor Internacional con Retenciones',
    type: 'PDF &bull; 2 Páginas',
    riskScore: 'Atención Requerida',
    extracted: {
      parties: 'Cloud Provider Inc. &bull; CUIT Extranjero',
      penalties: 'Interés por mora del 3.5% mensual a partir del día 10.',
      jurisdiction: 'Delaware, USA',
      ndaPeriod: 'N/A',
      totalValue: '$14.280 USD (Falta comprobante retención ganancias)'
    }
  }
];

export default function AgenteAuditorDocs({ onBack }) {
  const [selectedDoc, setSelectedDoc] = useState(SAMPLE_DOCS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [analyzed, setAnalyzed] = useState(false);

  const handleStartScan = () => {
    sound.playLaser();
    setIsScanning(true);
    setAnalyzed(false);
    setScanProgress(0);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setAnalyzed(true);
          sound.playSuccess();
          triggerConfetti();
          return 100;
        }
        return prev + 20;
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#EDEDED] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* BARRA SUPERIOR */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-8 pb-4 border-b border-[#444444]/40">
        <button
          onClick={() => { sound.playPop(); onBack(); }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#222222] hover:bg-[#DA0037] text-xs sm:text-sm font-semibold transition-all border border-[#444444]/60 cursor-pointer text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[11px] font-mono font-bold tracking-widest text-[#DA0037] uppercase bg-[#171717] px-3 py-1.5 rounded-full border border-[#DA0037]/30">
          DEMO IA 05 &bull; ESCÁNER &amp; AUDITOR DOCUMENTAL
        </span>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* CABECERA */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <FileSearch className="w-6 h-6 text-[#DA0037]" />
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Agente IA de Auditoría &amp; Extracción Documental
              </h1>
            </div>
            <p className="text-xs text-[#A1A1AA]">
              Procesamiento de contratos legales y comprobantes fiscales con OCR neuronal, detección de riesgos y estructuración a JSON.
            </p>
          </div>

          <button
            onClick={handleStartScan}
            disabled={isScanning}
            className="px-6 py-3 rounded-xl bg-[#DA0037] hover:bg-[#b0002c] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-red-glow transition-all cursor-pointer disabled:opacity-50 shrink-0"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>{isScanning ? `Escaneando (${scanProgress}%)...` : 'Escanear Documento con IA'}</span>
          </button>
        </div>

        {/* SELECTOR DE DOCUMENTOS DE PRUEBA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SAMPLE_DOCS.map((doc) => (
            <div
              key={doc.id}
              onClick={() => {
                if (isScanning) return;
                sound.playPop();
                setSelectedDoc(doc);
                setAnalyzed(false);
              }}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedDoc.id === doc.id
                  ? 'bg-[#222222] border-[#DA0037] shadow-red-glow'
                  : 'bg-[#1e1e1e] border-[#444444]/40 hover:border-gray-500'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-mono text-gray-400">{doc.type}</span>
                <span className="font-mono text-[10px] text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                  Riesgo: {doc.riskScore}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white">{doc.title}</h3>
            </div>
          ))}
        </div>

        {/* ÁREA DE ESCANEO LÁSER Y RESULTADOS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* VISTA PREVIA DEL DOCUMENTO CON LÁSER ANIMADO (6 cols) */}
          <div className="lg:col-span-6 bg-[#171717] rounded-2xl border border-[#444444]/60 p-6 relative overflow-hidden min-h-[380px] shadow-inner font-mono text-xs">
            
            {/* RAYO LÁSER ANIMADO */}
            {isScanning && (
              <div 
                className="absolute left-0 right-0 h-1 bg-[#DA0037] shadow-red-glow z-20 transition-all duration-300"
                style={{ top: `${scanProgress}%` }}
              />
            )}

            <div className="space-y-3 opacity-80 select-none">
              <div className="flex justify-between border-b border-[#333] pb-2 text-[10px] text-gray-500">
                <span>DOCUMENT REPOSITORIUM V2.8</span>
                <span>ORIGINAL HASH: 8f9b20e1</span>
              </div>
              <p className="font-bold text-white text-sm">{selectedDoc.title}</p>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                CONSTE POR EL PRESENTE DOCUMENTO el acuerdo formalizado entre las partes intervinientes con el objeto de regular los derechos y obligaciones dimanantes de la contratación técnica...
              </p>
              <div className="p-3 bg-[#1e1e1e] rounded border border-[#333] space-y-1 text-[11px]">
                <p className="text-amber-300">CLÁUSULA ESPECIAL DE PENALIDAD:</p>
                <p className="text-gray-400">{selectedDoc.extracted.penalties}</p>
              </div>
              <p className="text-gray-400 text-[11px]">
                JURISDICCIÓN APLICABLE: {selectedDoc.extracted.jurisdiction}. Monto pactado: {selectedDoc.extracted.totalValue}.
              </p>
            </div>

            {isScanning && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-[#DA0037] text-white font-mono font-bold text-xs animate-pulse">
                  Extrayendo entidades con IA... {scanProgress}%
                </span>
              </div>
            )}
          </div>

          {/* EXTRACCIÓN ESTRUCTURADA JSON / AUDITORÍA (6 cols) */}
          <div className="lg:col-span-6 bg-[#1e1e1e] rounded-2xl border border-[#444444]/50 p-6 space-y-4 shadow-xl">
            <span className="text-xs font-mono font-bold text-[#DA0037] uppercase tracking-wider block">
              REPORTE ESTRUCTURADO DE AUDITORÍA
            </span>

            {analyzed ? (
              <div className="space-y-4">
                <div className="bg-[#171717] p-4 rounded-xl border border-[#444444]/40 space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-mono block">Partes Involucradas:</span>
                    <p className="text-white font-semibold">{selectedDoc.extracted.parties}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-mono block">Monto Total Comprometido:</span>
                    <p className="text-[#DA0037] font-bold font-mono text-sm">{selectedDoc.extracted.totalValue}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-400 uppercase font-mono block">Alerta de Penalidad / Riesgo:</span>
                    <p className="text-amber-200">{selectedDoc.extracted.penalties}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-mono block">Jurisdicción:</span>
                    <p className="text-gray-300">{selectedDoc.extracted.jurisdiction}</p>
                  </div>
                </div>

                <div className="bg-[#171717] p-3 rounded-xl border border-[#333] text-[11px] font-mono text-emerald-400 flex items-center justify-between">
                  <span>Validación de firmas: 100% Auténtica</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-xs text-gray-500 font-mono border border-dashed border-[#444] rounded-xl">
                Presiona "Escanear Documento con IA" para disparar la extracción neuronal.
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
