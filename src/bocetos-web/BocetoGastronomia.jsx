import React, { useState } from 'react';
import { 
  Coffee, 
  Clock, 
  MapPin, 
  ArrowLeft, 
  UtensilsCrossed, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Heart, 
  Award 
} from 'lucide-react';

// EDITAR AQUÍ: Datos del Café / Restó
const CAFE_INFO = {
  name: "ORIGEN & TOSTADORES",
  tagline: "Café de Especialidad & Cocina Estacional",
  location: "Calle 50 #742, La Plata / Palermo Soho",
  hours: "Mar a Dom: 08:30 - 20:30 hs",
  whatsapp: "5492210000000"
};

// EDITAR AQUÍ: Carta destacada y notas de cata
const MENU_ITEMS = [
  {
    category: "Café de Especialidad",
    name: "Flat White Doble Shot",
    origin: "Etiopía Yirgacheffe &bull; Lavado",
    notes: "Jazmín, bergamota y acidez cítrica brillante con leche microtexturizada.",
    price: "$3.800 ARS"
  },
  {
    category: "Café de Especialidad",
    name: "Cold Brew Macerado 18hs",
    origin: "Colombia Huila &bull; Proceso Natural",
    notes: "Cuerpo denso, notas a chocolate amargo, frutos rojos y final dulce.",
    price: "$4.100 ARS"
  },
  {
    category: "Brunch & Pastelería",
    name: "Tostón Brioche con Palta & Huevo Poché",
    origin: "Pan de masa madre con 48hs de fermentación",
    notes: "Semillas tostadas, queso crema a las finas hierbas y emulsión de lima.",
    price: "$6.500 ARS"
  },
  {
    category: "Brunch & Pastelería",
    name: "Croissant Relleno Pistacho & Frambuesa",
    origin: "Laminado con manteca 100% de pastura",
    notes: "Crema diplomata de pistachos tostados y coulis casero de frambuesas silvestres.",
    price: "$4.900 ARS"
  }
];

export default function BocetoGastronomia({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredMenu = selectedCategory === 'Todos'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#14100e] text-[#f5ede6] font-sans">
      
      {/* BARRA SUPERIOR DE LA DEMO */}
      <div className="bg-[#1b1411] border-b border-[#30221c] py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#291b15] hover:bg-[#DA0037] text-xs font-semibold transition-all border border-[#452d24] cursor-pointer text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a RED Soluciones Digitales</span>
          </button>

          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#f59e0b] uppercase bg-[#241710] px-3 py-1 rounded-full border border-[#f59e0b]/30">
            BOCETO WEB 03 &bull; CAFETERÍA DE ESPECIALIDAD &amp; RESTÓ
          </span>
        </div>
      </div>

      {/* HEADER GASTRONOMÍA */}
      <header className="border-b border-[#30221c] py-6 px-4 sm:px-8 bg-[#14100e]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/40 flex items-center justify-center text-[#f59e0b]">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-wider text-[#f5ede6] block">
                {CAFE_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-[#c4a999] tracking-wider block uppercase">
                {CAFE_INFO.tagline}
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-[#c4a999]">
            <a href="#carta" className="hover:text-[#f59e0b] transition-colors">Carta de Estación</a>
            <a href="#filosofia" className="hover:text-[#f59e0b] transition-colors">Tueste &amp; Granos</a>
            <a href="#ubicacion" className="hover:text-[#f59e0b] transition-colors">Visítanos</a>
          </nav>

          <a
            href={`https://wa.me/${CAFE_INFO.whatsapp}?text=Hola,%20quisiera%20reservar%20una%20mesa`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-[#14100e] font-bold text-xs uppercase tracking-wider transition-all duration-300"
          >
            Reservar Mesa
          </a>
        </div>
      </header>

      {/* HERO SECTION CÁLIDA */}
      <section className="py-24 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-6">
        <span className="text-xs font-mono tracking-widest uppercase text-[#f59e0b] block flex items-center justify-center gap-2">
          <Award className="w-4 h-4" /> GRANOS SELECCIONADOS 86+ PUNTOS SCA
        </span>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-white tracking-tight leading-tight">
          El aroma del grano recién tostado, el ritmo de una pausa merecida.
        </h1>

        <p className="text-sm sm:text-base text-[#c4a999] max-w-2xl mx-auto font-light leading-relaxed">
          Tostamos en pequeños lotes semanales y horneamos nuestra bollería al amanecer para ofrecerte una experiencia sensorial sin prisas.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-mono">
          <div className="bg-[#241710] px-4 py-2 rounded-full border border-[#452d24] flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#f59e0b]" />
            <span>{CAFE_INFO.hours}</span>
          </div>
          <div className="bg-[#241710] px-4 py-2 rounded-full border border-[#452d24] flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#f59e0b]" />
            <span>{CAFE_INFO.location.split('/')[0]}</span>
          </div>
        </div>
      </section>

      {/* CARTA DE ESTACIÓN */}
      <section id="carta" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-[#30221c]">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#f59e0b] uppercase tracking-widest block mb-1">
            SELECCIÓN DE LA SEMANA
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white">
            Nuestra Carta de Cafetería &amp; Brunch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMenu.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1b1411] border border-[#30221c] hover:border-[#f59e0b]/50 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-lg font-serif font-bold text-white">
                    {item.name}
                  </h3>
                  <span className="text-sm font-mono font-bold text-[#f59e0b] shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs font-mono text-[#f59e0b]/80 mb-2">
                  {item.origin}
                </p>
                <p className="text-xs text-[#c4a999] leading-relaxed">
                  {item.notes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UBICACIÓN Y RESERVAS */}
      <section id="ubicacion" className="py-16 px-4 sm:px-8 max-w-4xl mx-auto text-center border-t border-[#30221c]">
        <div className="bg-[#1b1411] border border-[#f59e0b]/30 p-8 sm:p-12 rounded-3xl space-y-4">
          <Coffee className="w-8 h-8 text-[#f59e0b] mx-auto" />
          <h3 className="text-2xl font-serif text-white">¿Organizas un encuentro o cata?</h3>
          <p className="text-xs sm:text-sm text-[#c4a999] max-w-md mx-auto">
            Disponemos de mesas para grupos, espacio pet-friendly en el patio interior y wifi de alta velocidad.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${CAFE_INFO.whatsapp}?text=Hola,%20quiero%20hacer%20una%20reserva%20en%20Origen`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-[#14100e] font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Consultar Disponibilidad</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#30221c] py-8 text-center text-xs font-mono text-[#8f7465] bg-[#110c0a]">
        <p>&copy; {new Date().getFullYear()} {CAFE_INFO.name} &bull; Maquetado por RED Soluciones Digitales</p>
      </footer>

    </div>
  );
}
