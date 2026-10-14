# Sistema 03: Agente de IA para WhatsApp 24/7

## Propósito
Demostración interactiva de un bot con procesamiento de lenguaje natural integrado a la API de WhatsApp, capaz de calificar prospectos, cotizar y agendar turnos las 24 horas.

## Componentes y Estado
- `ChatbotApp.jsx`:
  - Simulación gráfica con el estilo visual auténtico de WhatsApp Dark.
  - Preguntas rápidas precargadas y caja de texto para escribir cualquier mensaje.
  - Indicador dinámico de tipeo ("Escribiendo...") con retardo natural (0.6s - 1.2s).
  - Lógica de detección de intenciones: Precios, Horarios, Turnos, Servicios y Ubicación.
  - Enlace dinámico directo para continuar la conversación con WhatsApp real.

## Edición Rápida
- Respuestas de la base de conocimiento en `BOT_KNOWLEDGE_BASE`.
