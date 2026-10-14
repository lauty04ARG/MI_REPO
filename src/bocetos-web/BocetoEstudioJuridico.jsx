import React from 'react';
import { 
  Scale, 
  ShieldCheck, 
  FileText, 
  Users, 
  ArrowLeft, 
  Phone, 
  Mail, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Building 
} from 'lucide-react';

// EDITAR AQUÍ: Datos del Estudio Jurídico
const FIRM_INFO = {
  name: "GUTIÉRREZ, SILVA & ASOCIADOS",
  tagline: "Abogados & Consultores Corporativos",
  whatsapp: "5492210000000",
  email: "consultas@gutierrezsilva.com"
};

// EDITAR AQUÍ: Áreas de especialidad legal
const PRACTICE_AREAS = [
  {
    title: "Derecho Societario & M&A",
    desc: "Fusiones, adquisiciones, reestructuración patrimonial de accionistas y redacción de estatutos comerciales."
  },
  {
    title: "Litigios Complejos & Arbitraje",
    desc: "Representación judicial de alta intensidad ante fueros comerciales, civiles y tribunales arbitrales nacionales."
  },
  {
    title: "Compliance & Derecho Laboral Empresario",
    desc: "Prevención de contingencias laborales, negociación de convenios colectivos y programas de ética corporativa."
  },
  {
    title: "Propiedad Intelectual & Contratos Tech",
    desc: "Registro de marcas, patentes, contratos de licencia de software y protección de secretos comerciales."
  }
];

export default function BocetoEstudioJuridico({ onBack }) {
  return (
    <div className="min-h-screen bg-[#0b111e] text-[#EDEDED] font-sans">
      
      {/* BARRA SUPERIOR DE LA DEMO */}
      <div className="bg-[#080d17] border-b border-[#1e293b] py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1e293b] hover:bg-[#DA0037] text-xs font-semibold transition-all border border-[#334155] cursor-pointer text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a RED Soluciones Digitales</span>
          </button>

          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#38bdf8] uppercase bg-[#0f172a] px-3 py-1 rounded-full border border-[#38bdf8]/30">
            BOCETO WEB 02 &bull; ESTUDIO JURÍDICO &amp; NOTARIAL
          </span>
        </div>
      </div>

      {/* HEADER CORPORATIVO */}
      <header className="border-b border-[#1e293b] py-6 px-4 sm:px-8 bg-[#0b111e]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#1e293b] border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8]">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-white block">
                {FIRM_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-gray-400 tracking-wider block uppercase">
                {FIRM_INFO.tagline}
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-gray-400">
            <a href="#areas" className="hover:text-[#38bdf8] transition-colors">Áreas de Práctica</a>
            <a href="#respaldo" className="hover:text-[#38bdf8] transition-colors">Socios</a>
            <a href="#contacto" className="hover:text-[#38bdf8] transition-colors">Canal Confidencial</a>
          </nav>

          <a
            href={`https://wa.me/${FIRM_INFO.whatsapp}?text=Hola,%20solicito%20una%20consulta%20legal%20confidencial`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-[#1e293b] hover:bg-[#38bdf8] hover:text-black border border-[#38bdf8]/50 text-[#38bdf8] font-mono text-xs uppercase tracking-wider transition-all duration-300"
          >
            Consulta Inicial
          </a>
        </div>
      </header>

      {/* HERO SECTION DE RIGOR */}
      <section className="py-24 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-6">
        <span className="text-xs font-mono tracking-widest uppercase text-[#38bdf8] block">
          30 AÑOS DE EXPERIENCIA &bull; DERECHO EMPRESARIAL
        </span>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium text-white tracking-tight leading-tight">
          Seguridad jurídica estratégica para decisiones de alta complejidad.
        </h1>

        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
          Acompañamos a directorios y patrimonios familiares en la estructuración de acuerdos sólidos, prevención de riesgos y litigación de máxima envergadura.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-mono">
          <div className="bg-[#1e293b]/70 px-4 py-2 rounded border border-[#334155] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />
            <span>Confidencialidad Rigurosa</span>
          </div>
          <div className="bg-[#1e293b]/70 px-4 py-2 rounded border border-[#334155] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
            <span>Respuesta en menos de 24 hs</span>
          </div>
        </div>
      </section>

      {/* ÁREAS DE PRÁCTICA */}
      <section id="areas" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#1e293b]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest block mb-1">
            ESPECIALIDADES
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white">
            Áreas de Práctica Focalizada
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRACTICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a] border border-[#1e293b] hover:border-[#38bdf8]/50 p-8 rounded-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-[#38bdf8] bg-[#1e293b] px-2.5 py-1 rounded">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-serif font-bold text-white">
                  {area.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CANAL SEGURO DE CONTACTO */}
      <section id="contacto" className="py-20 px-4 sm:px-8 max-w-4xl mx-auto text-center border-t border-[#1e293b]">
        <div className="bg-[#0f172a] border border-[#38bdf8]/30 rounded-2xl p-8 sm:p-12 space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif text-white">
            Inicie una consulta confidencial con un socio
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
            Tratamiento directo y bajo estricto secreto profesional. Responderemos a la brevedad.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${FIRM_INFO.whatsapp}?text=Deseo%20coordinar%20una%20consulta%20con%20un%20socio%20del%20estudio`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#38bdf8] hover:bg-[#0ea5e9] text-black font-semibold text-xs font-mono uppercase tracking-wider rounded transition-all"
            >
              <span>Abrir Canal WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1e293b] py-8 text-center text-xs font-mono text-gray-500 bg-[#080d17]">
        <p>&copy; {new Date().getFullYear()} {FIRM_INFO.name} &bull; Maquetado por RED Soluciones Digitales</p>
      </footer>

    </div>
  );
}
