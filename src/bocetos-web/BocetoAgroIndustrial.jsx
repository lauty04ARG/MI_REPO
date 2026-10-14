import React, { useState } from 'react';
import { 
  Tractor, 
  Wrench, 
  ShieldAlert, 
  ArrowLeft, 
  Download, 
  Phone, 
  CheckCircle, 
  FileCheck, 
  Truck, 
  ArrowRight, 
  Package 
} from 'lucide-react';

// EDITAR AQUÍ: Datos de la empresa Agro-Industrial
const AGRO_INFO = {
  name: "AGRO-METÁLICA PAMPEANA S.A.",
  tagline: "Fabricación de Tolvas, Acoplados & Equipamiento para el Agro",
  location: "Parque Industrial Ruta 5, Km 260 &bull; 9 de Julio, Bs.As.",
  whatsapp: "5492210000000"
};

// EDITAR AQUÍ: Catálogo de maquinaria pesada
const MACHINERY_CATALOG = [
  {
    code: "TOL-35",
    name: "Tolva Autodescargable 35 TN",
    specs: "Tubo de descarga 480 mm &bull; Lona destape rápido &bull; Eje direccional con freno hidráulico",
    delivery: "Entrega Inmediata",
    financing: "Crédito Bancario a Tasa Fija"
  },
  {
    code: "ACO-22",
    name: "Acoplado Playo Forestal 4 Ejes",
    specs: "Chasis reforzado en chapa 1/4 &bull; Piso antideslizante 4.7 mm &bull; Luces LED homologadas",
    delivery: "Fabricación 20 días",
    financing: "Plan Canje Cereal Disponible"
  },
  {
    code: "TAN-12",
    name: "Tanque Cisterna Combustible 12.000 L",
    specs: "Boca de carga homologada &bull; Kit de despacho de 12V con caudalímetro &bull; Rompeolas triples",
    delivery: "Stock Disponible",
    financing: "12 Cheques sin interés"
  }
];

export default function BocetoAgroIndustrial({ onBack }) {
  const [downloadAlert, setDownloadAlert] = useState(false);

  const handleDownload = (code) => {
    setDownloadAlert(true);
    setTimeout(() => setDownloadAlert(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#EDEDED] font-sans">
      
      {/* BARRA SUPERIOR DE LA DEMO */}
      <div className="bg-[#1c1c1c] border-b border-[#333333] py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#262626] hover:bg-[#DA0037] text-xs font-semibold transition-all border border-[#404040] cursor-pointer text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a RED Soluciones Digitales</span>
          </button>

          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#ea580c] uppercase bg-[#26170d] px-3 py-1 rounded-full border border-[#ea580c]/30">
            BOCETO WEB 04 &bull; AGRO-INDUSTRIAL &amp; MAQUINARIA B2B
          </span>
        </div>
      </div>

      {/* HEADER ROBUSTO */}
      <header className="border-b border-[#2d2d2d] py-6 px-4 sm:px-8 bg-[#181818]/95 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#ea580c] flex items-center justify-center text-black font-black">
              <Tractor className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-mono text-base sm:text-lg font-black tracking-wider text-white block">
                {AGRO_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-[#a3a3a3] tracking-wider block uppercase">
                {AGRO_INFO.tagline}
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-gray-400">
            <a href="#catalogo" className="hover:text-white transition-colors">Maquinaria</a>
            <a href="#repuestos" className="hover:text-white transition-colors">Repuestos</a>
            <a href="#contacto" className="hover:text-white transition-colors">Ventas Mayoristas</a>
          </nav>

          <a
            href={`https://wa.me/${AGRO_INFO.whatsapp}?text=Hola,%20solicito%20cotización%20por%20maquinaria`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
          >
            Cotizar Equipo
          </a>
        </div>
      </header>

      {/* HERO SECTION INDUSTRIAL */}
      <section className="py-24 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-6">
        <span className="text-xs font-mono tracking-widest uppercase text-[#ea580c] bg-[#ea580c]/10 px-3.5 py-1.5 rounded-full border border-[#ea580c]/30 inline-block">
          ROBUSTEZ INDUSTRIAL PARA EL CAMPO ARGENTINO
        </span>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-tight">
          Ingeniería pesada construida para resistir la cosecha más exigente.
        </h1>

        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Chasis sobredimensionados, pintura poliuretánica de alta resistencia y garantía de fábrica por 3 años.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-mono">
          <div className="bg-[#222222] px-4 py-2 rounded border border-[#333] flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Homologación Vial Nacional</span>
          </div>
          <div className="bg-[#222222] px-4 py-2 rounded border border-[#333] flex items-center gap-2">
            <Package className="w-4 h-4 text-[#ea580c]" />
            <span>Repuestos con Envío en 24hs</span>
          </div>
        </div>
      </section>

      {/* CATÁLOGO DE EQUIPAMIENTO */}
      <section id="catalogo" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#262626]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono text-[#ea580c] uppercase tracking-widest">LÍNEA DE PRODUCCIÓN</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">Equipos en Fabricación</h2>
          </div>
          <span className="text-xs font-mono text-gray-400">Precios directos de fábrica sin intermediarios</span>
        </div>

        {downloadAlert && (
          <div className="mb-6 p-4 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
            <FileCheck className="w-4 h-4" />
            <span>Ficha técnica descargada correctamente con planos y cotizaciones de flete.</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MACHINERY_CATALOG.map((m) => (
            <div
              key={m.code}
              className="bg-[#1c1c1c] border border-[#2d2d2d] hover:border-[#ea580c]/60 p-6 rounded-2xl flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs font-bold text-[#ea580c] bg-[#26170d] px-2.5 py-1 rounded border border-[#ea580c]/30">
                    {m.code}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded">
                    {m.delivery}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ea580c] transition-colors uppercase">
                  {m.name}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed mb-6 font-mono">
                  {m.specs}
                </p>

                <div className="bg-[#141414] p-3 rounded-lg border border-[#282828] text-xs font-mono text-gray-400 mb-6">
                  <span className="text-[10px] text-gray-500 block uppercase">Condición Comercial</span>
                  <span className="text-white font-semibold">{m.financing}</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => handleDownload(m.code)}
                  className="w-full py-2.5 rounded bg-[#262626] hover:bg-[#333] text-gray-300 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar Ficha Técnica PDF</span>
                </button>

                <a
                  href={`https://wa.me/${AGRO_INFO.whatsapp}?text=Hola,%20quiero%20cotizar%20el%20equipo%20${encodeURIComponent(m.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Consultar Valor con Flete</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#262626] py-8 text-center text-xs font-mono text-gray-500 bg-[#111111]">
        <p>&copy; {new Date().getFullYear()} {AGRO_INFO.name} &bull; Maquetado por RED Soluciones Digitales</p>
      </footer>

    </div>
  );
}
