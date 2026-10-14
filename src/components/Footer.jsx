import React from 'react';
import { Calendar, ArrowUpRight, Mail, MessageSquare } from 'lucide-react';

// EDITAR AQUÍ: Tu número de WhatsApp (código de país + número, sin + ni guiones)
const WHATSAPP_PHONE = "5492210000000";
// EDITAR AQUÍ: Tu correo de contacto
const CONTACT_EMAIL = "contacto@redsolucionesdigitales.com";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] border-t border-[#444444]/40 pt-20 pb-12 relative overflow-hidden">
      
      {/* Resplandor decorativo central */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#DA0037]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECCIÓN DE CIERRE CENTRADA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EDEDED] tracking-tight mb-4">
            ¿Listo para optimizar tu tiempo?
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed mb-8">
            Cuéntanos tu idea, evento o desafío operativo. Te mostraremos cómo resolverlo con la tecnología exacta que necesitas.
          </p>

          {/* BOTÓN GRANDE EN #DA0037 CON SOMBRA BRILLANTE E ICONO DE CALENDARIO */}
          <div className="inline-block">
            <a
              // EDITAR AQUÍ: Tu número de WhatsApp y mensaje
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Hola, quiero cotizar un proyecto con RED")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#DA0037] hover:bg-[#b0002c] text-[#EDEDED] font-bold text-base shadow-red-glow hover:shadow-red-glow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar Consultoría</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* BARRA INFERIOR CON LÍNEA DIVISORIA */}
        <div className="pt-8 border-t border-[#444444]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#A1A1AA]">
          
          {/* LADO IZQUIERDO: Punto rojo + RED Soluciones Digitales */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DA0037] shadow-red-glow" />
            <span className="font-semibold text-[#EDEDED]">RED Soluciones Digitales</span>
            <span className="text-[#A1A1AA]">&mdash; &copy; {currentYear} Todos los derechos reservados.</span>
          </div>

          {/* LADO DERECHO: Enlaces de correo y WhatsApp Directo */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-[#EDEDED] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-[#DA0037]" />
              <span>{CONTACT_EMAIL}</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EDEDED] transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4 text-[#DA0037]" />
              <span className="font-semibold text-[#EDEDED]">WhatsApp Directo</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
