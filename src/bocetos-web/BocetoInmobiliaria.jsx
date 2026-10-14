import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Maximize2, 
  BedDouble, 
  Bath, 
  ArrowLeft, 
  Phone, 
  Mail, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';

// EDITAR AQUÍ: Información de la inmobiliaria
const REAL_ESTATE_INFO = {
  agencyName: "VALOIS &amp; CO. Real Estate",
  location: "Buenos Aires &bull; Punta del Este",
  whatsapp: "5492210000000"
};

// EDITAR AQUÍ: Propiedades destacadas en venta / alquiler
const PROPERTIES = [
  {
    id: 1,
    title: "Residencia Las Encinas",
    location: "Nordelta, Los Castores",
    price: "$890.000 USD",
    area: "480 m²",
    beds: 4,
    baths: 5,
    tag: "Exclusiva",
    desc: "Arquitectura brutalista con ventanales de piso a techo, piscina infinita y muelle privado al lago central."
  },
  {
    id: 2,
    title: "Penthouse Boulevard Alvear",
    location: "Recoleta, CABA",
    price: "$1.250.000 USD",
    area: "340 m²",
    beds: 3,
    baths: 4,
    tag: "Venta Directa",
    desc: "Piso entero de categoría clásica con terraza privada, master suite con vestidor doble y seguridad 24 hs."
  },
  {
    id: 3,
    title: "Villa Mirador del Sol",
    location: "Barrio Cerrado San Jorge",
    price: "$650.000 USD",
    area: "390 m²",
    beds: 4,
    baths: 3,
    tag: "A Estrenar",
    desc: "Diseño bioclimático con paneles solares, galería con quincho integrado y parque arbolado de 1.200 m²."
  }
];

export default function BocetoInmobiliaria({ onBack }) {
  const [filterType, setFilterType] = useState('Todas');

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e0e0e0] font-sans">
      
      {/* BARRA SUPERIOR DE LA DEMO */}
      <div className="bg-[#171717] border-b border-[#2a2a2a] py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#222222] hover:bg-[#DA0037] text-xs font-semibold transition-all border border-[#444444] cursor-pointer text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a RED Soluciones Digitales</span>
          </button>

          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#d4af37] uppercase bg-[#1f1a14] px-3 py-1 rounded-full border border-[#d4af37]/30">
            BOCETO WEB 01 &bull; INMOBILIARIA DE LUJO
          </span>
        </div>
      </div>

      {/* HEADER DE LA INMOBILIARIA */}
      <header className="border-b border-[#222222] py-6 px-4 sm:px-8 bg-[#121212]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-widest uppercase text-white block">
                VALOIS &amp; CO.
              </span>
              <span className="text-[9px] font-mono text-gray-400 tracking-widest block uppercase">
                Private Real Estate
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-gray-400">
            <a href="#propiedades" className="hover:text-white transition-colors">Propiedades</a>
            <a href="#arquitectura" className="hover:text-white transition-colors">Desarrollos</a>
            <a href="#contacto" className="hover:text-white transition-colors">Tasaciones</a>
          </nav>

          <a
            href={`https://wa.me/${REAL_ESTATE_INFO.whatsapp}?text=Hola,%20solicito%20información%20sobre%20propiedades`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-mono text-xs uppercase tracking-wider transition-all duration-300"
          >
            Contacto Privado
          </a>
        </div>
      </header>

      {/* HERO SECTION DE LUJO */}
      <section className="relative py-28 px-4 sm:px-8 overflow-hidden bg-gradient-to-b from-[#141414] via-[#0d0d0d] to-[#0a0a0a]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono tracking-widest uppercase text-[#d4af37] block">
            ARQUITECTURA DE AUTOR &bull; PROPIEDADES SINGULARES
          </span>

          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white tracking-tight leading-tight">
            El arte de habitar lo <span className="italic font-normal text-[#d4af37]">extraordinario</span>.
          </h1>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Representamos las residencias y proyectos arquitectónicos más selectos con total reserva y dedicación personalizada.
          </p>

          <div className="pt-6 flex justify-center">
            <a
              href="#propiedades"
              className="px-8 py-3.5 bg-white text-black hover:bg-[#d4af37] font-semibold text-xs uppercase tracking-widest transition-all shadow-xl"
            >
              Explorar Colección
            </a>
          </div>
        </div>
      </section>

      {/* LISTADO DE PROPIEDADES */}
      <section id="propiedades" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-[#222222] pb-6">
          <div>
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">PORTAFOLIO ACTIVO</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-white mt-1">Residencias Destacadas</h2>
          </div>

          <div className="flex gap-2">
            {["Todas", "En Venta", "A Estrenar"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterType(tab)}
                className={`px-4 py-1.5 rounded text-xs font-mono tracking-wider uppercase transition-colors ${
                  filterType === tab
                    ? "bg-[#222222] text-[#d4af37] border border-[#d4af37]/40"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* GRILLA DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROPERTIES.map((p) => (
            <div
              key={p.id}
              className="bg-[#141414] border border-[#222222] hover:border-[#d4af37]/60 transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual simulada de la fachada */}
                <div className="h-56 bg-gradient-to-br from-[#1c1c1c] via-[#242424] to-[#121212] p-6 flex flex-col justify-between border-b border-[#222222] relative">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 bg-black/70 text-[#d4af37] border border-[#d4af37]/30 rounded">
                      {p.tag}
                    </span>
                    <span className="text-xs font-mono text-gray-300 bg-black/60 px-2.5 py-1 rounded">
                      {p.location.split(',')[0]}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-gray-400 block mb-1">Valor de Publicación</span>
                    <span className="text-2xl font-serif font-semibold text-white tracking-wide">
                      {p.price}
                    </span>
                  </div>
                </div>

                {/* Detalle */}
                <div className="p-6">
                  <h3 className="text-lg font-serif font-medium text-white group-hover:text-[#d4af37] transition-colors mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-400 flex items-center gap-1 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    {p.location}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 mb-6 font-light">
                    {p.desc}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#222222] text-xs font-mono text-gray-300 text-center">
                    <div>
                      <span className="text-[10px] text-gray-500 block">SUPERFICIE</span>
                      <span>{p.area}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 block">DORMITORIOS</span>
                      <span>{p.beds} Suites</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 block">BAÑOS</span>
                      <span>{p.baths}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/${REAL_ESTATE_INFO.whatsapp}?text=Hola,%20me%20interesa%20la%20propiedad%20${encodeURIComponent(p.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded bg-[#1c1c1c] hover:bg-[#d4af37] text-gray-300 hover:text-black font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Solicitar Dossier Confidencial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER DEL BOCETO */}
      <footer className="border-t border-[#222222] py-8 text-center text-xs font-mono text-gray-500 bg-[#0a0a0a]">
        <p>&copy; {new Date().getFullYear()} VALOIS &amp; CO. Real Estate &bull; Maquetado por RED Soluciones Digitales</p>
      </footer>

    </div>
  );
}
