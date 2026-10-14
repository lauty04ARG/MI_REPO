# 📋 Prompts de Mantenimiento para Agentes IA &bull; RED

Copia y pega cualquiera de estos prompts directamente en tu asistente de IA para realizar modificaciones con mínimo consumo de tokens y máxima precisión técnica.

Ver también: [[00-Indice-Arquitectura]] | [[01-Guia-Edicion-Rapida]]

---

### Prompt 1: Actualizar Precios y Teléfono de WhatsApp
```text
Actúa como desarrollador frontend en el repositorio de RED Soluciones Digitales.
Revisa los archivos que contienen el comentario "// EDITAR AQUÍ:" y actualiza:
- Número de WhatsApp a: [INSERTAR NUEVO NÚMERO INTERNACIONAL]
- Precio base del servicio [INSERTAR SERVICIO] a: $[VALOR] USD.
Asegúrate de no modificar la paleta de colores Dark Elegance (#171717, #222222, #DA0037) ni romper los imports.
```

---

### Prompt 2: Agregar un Nuevo Sistema Interactivo
```text
Actúa como Arquitecto Frontend Senior en el proyecto RED Soluciones Digitales.
Necesito crear un nuevo sistema funcional con estado reactivo (useState) en una nueva carpeta dentro de 'src/sistemas/'.
El sistema debe ser: [DESCRIBIR SISTEMA, EJ: Módulo de Turnos Médicos con calendario y estado de atención].
Reglas:
1. Sigue la paleta Dark Elegance (#171717, #222222, acento #DA0037, texto #EDEDED).
2. Agrega botón "Volver al Portafolio RED" mediante la prop 'onBack'.
3. Registra el nuevo sistema en 'src/App.jsx' dentro de renderView() y en el 'Explorador de Ecosistema'.
4. Crea su propio README.md en la carpeta del sistema.
Escribe el código 100% completo, sin abreviaciones.
```

---

### Prompt 3: Diseñar un Nuevo Boceto Web Estático
```text
Actúa como Diseñador UI y Frontend Senior en RED Soluciones Digitales.
Crea un nuevo boceto web estático en 'src/bocetos-web/' llamado 'Boceto[NombreRubro].jsx'.
Rubro objetivo: [INSERTAR RUBRO, EJ: Concesionaria de Autos de Colección / Gimnasio Boutique].
Requisitos:
1. Header temático con navegación rápida y botón de contacto por WhatsApp.
2. Hero section con propuesta de valor adaptada al rubro.
3. Catálogo o carta con tarjetas visuales simuladas (sin <img> vacías).
4. Botón superior para volver al portafolio principal de RED.
5. Regístralo en 'src/components/WebTemplatesGrid.jsx' y 'src/App.jsx'.
```

---

### Prompt 4: Verificación de Build y Cero Errores
```text
Ejecuta 'npm run build' en la terminal para verificar que no existan errores de importación de módulos, tipos o iconos faltantes en 'lucide-react'. Reporta el resultado exacto de la compilación.
```
