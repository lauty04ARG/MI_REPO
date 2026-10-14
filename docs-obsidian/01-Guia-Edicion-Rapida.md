# 🛠️ Guía de Edición Rápida &bull; RED Soluciones Digitales

Este documento detalla los puntos exactos donde puedes modificar información crítica sin necesidad de buscar en todo el código fuente.

Ver también: [[00-Indice-Arquitectura]] | [[02-Prompts-Mantenimiento]]

---

## 📱 1. Cambiar el Número de WhatsApp
El número telefónico para recibir cotizaciones y consultas está centralizado con la etiqueta `// EDITAR AQUÍ:` en los siguientes archivos:

1. **`src/components/Navbar.jsx`**:
   ```javascript
   // EDITAR AQUÍ: Número de WhatsApp para cotizaciones directas
   const WHATSAPP_PHONE = "5492210000000";
   ```
2. **`src/components/Footer.jsx`**:
   ```javascript
   // EDITAR AQUÍ: Tu número de WhatsApp
   const WHATSAPP_PHONE = "5492210000000";
   const CONTACT_EMAIL = "contacto@redsolucionesdigitales.com";
   ```
3. **`src/components/QuoteCalculator.jsx`**:
   ```javascript
   // EDITAR AQUÍ: Teléfono de WhatsApp para recibir cotizaciones
   const WHATSAPP_PHONE = "5492210000000";
   ```

*(Recuerda ingresar el número en formato internacional, sin el signo `+` ni espacios, ej: `5492210000000`)*.

---

## 💰 2. Modificar Precios y Servicios
Para ajustar los precios base de los servicios o las opciones de la calculadora:

- **Servicios Principales (`src/components/Services.jsx`)**:
  Modifica el arreglo `SERVICES_DATA`:
  - `tiempo`: Tiempo estimado de entrega (ej: `"2 a 4 semanas"`).
  - `inversion`: Valor referencial (ej: `"Desde $250 USD"`).

- **Calculadora Interactiva (`src/components/QuoteCalculator.jsx`)**:
  - `PROJECT_TYPES`: Arreglo con `basePrice` y `baseWeeks` de cada categoría de proyecto.
  - `OPTIONAL_MODULES`: Costo adicional por cada módulo (Base de datos, integración de pagos, agente IA RAG).

---

## 🚚 3. Modificar Datos del Sistema de Logística
- **Ubicación:** `src/sistemas/02-logistica-flotas/LogisticaApp.jsx`
- Busca la constante `FLEET_CONFIG`:
  ```javascript
  const FLEET_CONFIG = {
    fuelPricePerLiter: 1.15, // Precio de diésel por litro en USD
    baseUnitsTotal: 25,
    companyName: "Logística Nacional S.A."
  };
  ```

---

## 🤖 4. Entrenar / Modificar Respuestas del Bot de WhatsApp
- **Ubicación:** `src/sistemas/03-agente-ia-whatsapp/ChatbotApp.jsx`
- Busca el arreglo `BOT_KNOWLEDGE_BASE`. Puedes agregar nuevas palabras clave (`keywords`) y la respuesta automática correspondiente (`answer`).

---

## 🎨 5. Personalizar Bocetos Web Estáticos
- **Inmobiliaria (`src/bocetos-web/BocetoInmobiliaria.jsx`)**: Modifica `PROPERTIES` para cambiar fotos simuladas, precios y metros cuadrados.
- **Gastronomía (`src/bocetos-web/BocetoGastronomia.jsx`)**: Modifica `MENU_ITEMS` para actualizar cafés, notas de cata y precios en pesos/dólares.
- **Agro-Industrial (`src/bocetos-web/BocetoAgroIndustrial.jsx`)**: Modifica `MACHINERY_CATALOG` para alterar modelos de tolvas y condiciones de financiación.
- **Estudio Jurídico (`src/bocetos-web/BocetoEstudioJuridico.jsx`)**: Modifica `PRACTICE_AREAS` para ajustar ramas legales.
