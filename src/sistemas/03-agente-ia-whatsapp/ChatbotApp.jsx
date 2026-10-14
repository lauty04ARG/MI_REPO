import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  ArrowLeft, 
  Sparkles, 
  Phone, 
  Video, 
  MoreVertical, 
  CheckCheck, 
  Clock, 
  Calendar, 
  Smile, 
  Paperclip 
} from 'lucide-react';

// EDITAR AQUÍ: Respuestas inteligentes del agente según palabras clave
const BOT_KNOWLEDGE_BASE = [
  {
    keywords: ["precio", "costo", "tarifa", "cuanto", "cuánto", "presupuesto"],
    answer: "Nuestros proyectos se adaptan a la escala de tu negocio. Una Landing Page o evento interactivo parte desde $250 USD, agentes de IA desde $350 USD y sistemas a medida o logística desde $600 USD. ¿Qué tipo de solución buscas?"
  },
  {
    keywords: ["turno", "agenda", "reunión", "reunion", "horario", "cita", "agendar"],
    answer: "¡Claro! Tengo disponibilidad para coordinar una videollamada técnica de 20 minutos mañana a las 11:00 hs o a las 16:30 hs. ¿Cuál te queda más cómodo?"
  },
  {
    keywords: ["horario", "atención", "atencion", "abierto", "abren"],
    answer: "Nuestro agente de IA atiende y filtra prospectos las 24 horas, los 7 días de la semana. Nuestro equipo de ingeniería humana responde de lunes a viernes de 09:00 a 18:00 hs."
  },
  {
    keywords: ["donde", "dónde", "ubicacion", "ubicación", "oficina"],
    answer: "Nuestra base central de ingeniería está en La Plata / Buenos Aires (Argentina), y desarrollamos software para clientes en todo el país y el exterior (remoto)."
  },
  {
    keywords: ["hola", "buenas", "buen dia", "buenas noches", "hey"],
    answer: "¡Hola! Bienvenido a RED Soluciones Digitales. Soy el asistente inteligente de demostración. ¿En qué puedo ayudarte hoy?"
  }
];

export default function ChatbotApp({ onBack }) {
  // Historial de mensajes en el chat
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '¡Hola! Bienvenido a RED Soluciones Digitales 🚀. Soy el agente inteligente activo 24/7. ¿En qué podemos optimizar tu negocio hoy?',
      time: '03:14 AM'
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const message = textToSend || inputMessage;
    if (!message.trim()) return;

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsg = {
      id: Date.now(),
      sender: 'user',
      text: message,
      time: userTime
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Retardo natural de tipeo
    setTimeout(() => {
      const lower = message.toLowerCase();
      let foundAnswer = null;

      for (const item of BOT_KNOWLEDGE_BASE) {
        if (item.keywords.some(k => lower.includes(k))) {
          foundAnswer = item.answer;
          break;
        }
      }

      if (!foundAnswer) {
        foundAnswer = "Excelente consulta. Registré tus requerimientos y puedo agendar una consultoría técnica o pasarte con un ingeniero especializado. ¿Prefieres coordinar una llamada?";
      }

      const botTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: foundAnswer,
          time: botTime
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  const quickQuestions = [
    "¿Qué precios tienen las soluciones?",
    "Quiero agendar un turno para mañana",
    "¿Cómo funciona el agente de WhatsApp 24/7?",
    "¿Dónde están ubicados?"
  ];

  return (
    <div className="min-h-screen bg-[#111b21] text-[#e9edef] py-6 px-3 sm:px-6 lg:px-8 font-sans flex flex-col justify-between">
      
      {/* BARRA SUPERIOR DE NAVEGACIÓN */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between mb-4 pb-3 border-b border-[#2a3942]">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#202c33] hover:bg-[#DA0037] text-xs font-semibold transition-all border border-[#2a3942] cursor-pointer text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio RED</span>
        </button>

        <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#DA0037] uppercase bg-[#202c33] px-3 py-1 rounded-full border border-[#DA0037]/30">
          DEMO FUNCIONAL &bull; SISTEMA 03
        </span>
      </div>

      {/* CONTENEDOR PRINCIPAL TIPO WHATSAPP WEB */}
      <div className="max-w-4xl mx-auto w-full bg-[#111b21] rounded-2xl border border-[#2a3942] shadow-2xl flex flex-col h-[78vh] overflow-hidden">
        
        {/* CABECERA DEL CHAT */}
        <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between border-b border-[#2a3942]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#DA0037] flex items-center justify-center text-white font-black text-sm shadow">
                RED
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#202c33] absolute bottom-0 right-0" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                RED Bot Asistente IA
                <Sparkles className="w-3.5 h-3.5 text-[#DA0037]" />
              </p>
              <p className="text-[11px] text-emerald-400">
                {isTyping ? 'Escribiendo respuesta...' : 'En línea &bull; Respuesta promedio 0.4s'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <span className="text-[11px] font-mono text-[#DA0037] bg-[#111b21] px-2 py-1 rounded border border-[#DA0037]/30 hidden sm:inline">
              Simulador 24/7
            </span>
          </div>
        </div>

        {/* ÁREA DE MENSAJES (FONDO CON PATRÓN SUTIL DE CHAT) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0b141a]/90">
          
          {/* Banner de cifrado simulado */}
          <div className="flex justify-center my-2">
            <span className="text-[10px] text-amber-200/80 bg-[#182229] px-3 py-1 rounded-md text-center max-w-md border border-[#222e35]">
              🔒 Los mensajes están protegidos de extremo a extremo. Demostración de atención automatizada.
            </span>
          </div>

          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[70%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm shadow-md ${
                  m.sender === 'user'
                    ? 'bg-[#005c4b] text-[#e9edef] rounded-tr-none'
                    : 'bg-[#202c33] text-[#e9edef] rounded-tl-none border border-[#2a3942]'
                }`}
              >
                {m.sender === 'bot' && (
                  <p className="text-[10px] font-mono font-bold text-[#DA0037] mb-1 flex items-center gap-1">
                    <Bot className="w-3 h-3" /> RED Asistente
                  </p>
                )}
                <p className="leading-relaxed whitespace-pre-wrap">{m.text}</p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-gray-400 mt-1">
                  <span>{m.time}</span>
                  {m.sender === 'user' && <CheckCheck className="w-3.5 h-3.5 text-blue-400" />}
                </div>
              </div>
            </div>
          ))}

          {/* Indicador de tipeo */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[#202c33] rounded-2xl rounded-tl-none px-4 py-3 border border-[#2a3942] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* BOTONES DE PREGUNTAS RÁPIDAS */}
        <div className="bg-[#202c33]/70 px-4 py-2 border-t border-[#2a3942] flex items-center gap-2 overflow-x-auto text-[11px] no-scrollbar">
          <span className="text-gray-400 text-[10px] uppercase font-mono shrink-0">Sugerencias:</span>
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="shrink-0 px-3 py-1 rounded-full bg-[#111b21] hover:bg-[#DA0037] hover:text-white text-gray-300 border border-[#2a3942] transition-colors cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>

        {/* BARRA INFERIOR DE ESCRITURA */}
        <div className="bg-[#202c33] p-3 border-t border-[#2a3942] flex items-center gap-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Escribe un mensaje de prueba (ej: cuánto cuesta un bot?)..."
            className="flex-1 bg-[#2a3942] border border-transparent focus:border-[#DA0037] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none"
          />

          <button
            onClick={() => handleSendMessage()}
            className="p-2.5 rounded-xl bg-[#DA0037] hover:bg-[#b0002c] text-white shadow transition-colors cursor-pointer"
            aria-label="Enviar mensaje"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
