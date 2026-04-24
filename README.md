# Challenge ONE | Front End -  Portafolio


### ¡Bienvenido a mi Portafolio! :
---
#### Este es mi proyecto final y te invito a que le eches un ojo ⭐
#### Si te gusta o tienes sugerencias estoy abierto a escucharlas 📚

### Proximamente estaré personalizandolo aun más!
---


Un portafolio web moderno y responsivo que showcasea mi transición desde la ingeniería mecánica hacia el desarrollo web, incluyendo una sección/galería dedicada a mis mascotas.

## 🌟 Características Principales

### 📱 Diseño Responsivo
- Totalmente adaptable a dispositivos móviles, tablets y desktops
- Implementación de breakpoints: `480px`, `640px`, `768px`, `1024px`, `1280px`, `1536px`
- Arquitectura mobile-first con escalado progresivo

### 🎨 Interfaz de Usuario
- **Glass Morphism Design**: Efectos de vidrio esmerilado con `backdrop-filter` y bordes translúcidos
- **Gradientes Dinámicos**: Múltiples gradientes lineales personalizados en logos y elementos interactivos
- **Animaciones Suaves**: Transiciones y transformaciones CSS3 fluidas
- **Tema Visual**: Paleta de colores neon (azul `#00d2ff`, púrpura `#9d50bb`) sobre fondo oscuro

### 🎡 Componentes Interactivos
- **Carrusel 3D**: Presentación de fotos destacadas con transformaciones 3D (`rotateY`, `perspective`)
- **Sistema de Filtrado CSS-only**: Filtros de mascotas usando radio inputs sin JavaScript
- **Modal Dinámico**: Visualización de proyectos con animación `slideIn`
- **Menú Hamburguesa**: Navegación adaptativa para móviles

### 🐾 Sección de Mascotas
- Galería de fotos organizadas por mascota (Kikin, Luke, Titi, Bingo)
- Sistema de filtrado CSS puro
- Tarjetas con etiquetas de identificación
- Footer dedicado con narrativa personal

## 📁 Estructura del Proyecto

```
project/
├── index.html              # Página principal del portafolio
├── README.md
├── public/
│   ├── icons/             # Iconos SVG y PNG
│   └── imgs/              # Imágenes de proyectos y mascotas
├── src/
│   ├── css/
│   │   ├── mascotas/            # Carpeta de estilos para pagina Mis mascotas
|   |   |       ├── stylesMascotas.css              # Hoja de estilos principal
│   │   |       ├── headerPets.css                  # Header y navegacion
│   │   |       ├── hero.css                        # hero
│   │   |       ├── estilosTitulosSeccion.css       # estilos titulos
│   │   |       ├── destacadasCarrusel.css          # carrusel fotos destacadas
│   │   |       ├── carruselNav.css                 # navegacion del carrusel
│   │   |       ├── divider.css                     # componente divider
│   │   |       ├── seccionGaleria.css              # Seccion principal galeria
│   │   |       ├── filtrosGaleria.css              # Filtros de foto en galeria
│   │   |       ├── gridGaleria.css                 # grid de fotos en galeria
│   │   |       └── footer.css                      # footer
│   │   └── portafolio/           # CSS principal
|   |           ├── styles.css           # Hoja de estilos principal
│   │           ├── mascota.css          # Estilos para sección de mascotas
│   │           ├── header.css           # Navegación y header
│   │           ├── landing.css          # Sección de presentación
│   │           ├── aboutMe.css          # Sobre mí
│   │           ├── skills-hobbies.css   # Habilidades y aficiones
│   │           ├── formation.css        # Formación académica
│   │           ├── projects.css         # Proyectos profesionales
│   │           ├── contactMe.css        # Formulario de contacto
│   │           └── modal.css            # Estilos de modales
│   ├── js/
|   |   ├── toast.js               # Lógica para el toast con el mensaje de bienvenida
|   |   ├── cambioIdioma.js        # Lógica para cambio de idioma En-Es & Es-En para toda la pagina
|   |   ├── Modal.js               # Lógica de modales y proyectos
│   │   ├── carrusel.js            # Funcionalidad del carrusel 3D
│   │   └── menuHamburguesa.js     # Toggle del menú móvil
│   └── views/
│       └── mascotas.html         # Página completa de mascotas
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Semántica moderna y meta tags optimizados
- **CSS3**: 
  - Grid y Flexbox
  - Transforms 3D
  - Backdrop-filter
  - Keyframes y animaciones
  - Media queries responsivas
- **JavaScript**: Manipulación del DOM, event listeners

### Características CSS Avanzadas
- `backdrop-filter: blur()` para efectos glass-morphism
- `clip-path` para formas personalizadas
- `perspective` y `rotateY` para efectos 3D
- `radial-gradient` y `linear-gradient` para fondos dinámicos

## 📋 Secciones Principales

### 1. **Presentación** (landing.css)
- Introducción personal con foto de perfil circular
- Firma animada con stroke animation
- Enlaces a redes sociales (GitHub, LinkedIn, Instagram, Mascotas)

### 2. **Sobre Mí** (aboutMe.css)
- Descripción de trayectoria profesional
- Transición de ingeniería mecánica a desarrollo web

### 3. **Habilidades** (skills-hobbies.css)
- Grid de tecnologías: HTML5, CSS, JavaScript, Python, Node.js, React
- Cards con efecto glass-morphism
- Animaciones al hover

### 4. **Aficiones** 
- Ciclismo, Videojuegos, Pintura, Series, Viajes, Senderismo
- Layout adaptativo con grid responsivo

### 5. **Formación Académica** (formation.css)
- Diseño sticky cards con scroll animations
- Integración con Oracle ONE y Alura Latam
- Universidad del Atlántico
- Universidad del Norte

### 6. **Proyectos Profesionales** (projects.css)
- **Outlier**: AI Content Evaluator
- **Upwork**: Operator Support Agent
- **Affinity**: App de red social para mascotas
- **Encriptador**: Desencriptador de texto
- **Pong Game**: Juego interactivo
- **AluraFlix**: Plataforma inspirada en Netflix

### 7. **Sección de Mascotas** (mascota.css)
- **Carrusel destacado**: 7 fotos con navegación 3D
- **Galería**: 20 fotos filtradas por mascota
- **Sistema de filtros CSS-only**: Sin dependencias JavaScript
- **Cards responsivos**: Adaptables a todos los tamaños

### 8. **Contacto** (contactMe.css)
- Formulario interactivo con validación
- Gradiente dinámico en botón
- Imagen decorativa responsive

## 🎯 Funcionalidades JavaScript

### carrusel.js
```javascript
// Navegación del carrusel 3D
const carousel = document.getElementById('carousel');
const items = carousel.querySelectorAll('.carousel-item');
const dotsContainer = document.getElementById('dots');

function updateCarousel() { /* ... */ }
function goTo(i) { /* ... */ }
```

### menuHamburguesa.js
```javascript
// Toggle del menú en dispositivos móviles
const botonHamburguesa = document.querySelector('.menu__toggle');
const menuNavegacion = document.querySelector('.navegacion');

botonHamburguesa.addEventListener('click', (e) => {
    menuNavegacion.classList.toggle('nav--active');
});
```

### script.js
```javascript
// Sistema de modales para proyectos
const misProyectos = { /* ... */ };

document.querySelectorAll(".btn_abrir_modal").forEach(boton => {
    boton.addEventListener("click", () => {
        const idProyecto = boton.getAttribute("data-proyecto");
        // ... mostrar modal con información
    });
});
```

## 📱 Responsive Design Breakpoints

| Breakpoint | Dispositivo | Cambios Principales |
|-----------|-----------|----------------------|
| **480px** | Móviles grandes | Carrusel ajustado, grid 2 columnas |
| **640px** | Tablets pequeñas | Mejora de espaciado |
| **768px** | Tablets | Grid 3 columnas, nav visible |
| **1024px** | Desktops | Grid 4 columnas, carrusel 3D avanzado |
| **1280px** | Desktops grandes | Optimización máxima |
| **1536px** | Pantallas amplias | Escalado completo |

## 🎨 Paleta de Colores

### Tema Principal (Light)
- Fondo: `#f6f2ec`
- Texto: `#1a1613`
- Acentos: `#4a89c9`, `#96c0e8`
- Bordes: `#d9cfc0`

### Tema Secundario (Dark)
- Fondo: `#050510e4`
- Neon Azul: `#00d2ff`
- Neon Púrpura: `#9d50bb`

## 🚀 Optimizaciones

- ✅ Imágenes `webp` y `jpeg` comprimidas (atributo `loading="lazy"`)
- ✅ Meta tags para SEO y Open Graph
- ✅ Estructura semántica HTML5
- ✅ CSS minificado y organizado por módulos
- ✅ Smooth scrolling integrado
- ✅ Accesibilidad: `aria-label` en botones

## 📊 Navegación

- **Header Sticky**: Mantiene la navegación visible en scroll
- **Links Internos**: Anclas a cada sección (`#sobre-mi`, `#skills`, etc.)
- **Menú Responsivo**: Hamburguesa en móviles, nav horizontal en desktop
- **Footer**: Links al portafolio y redes sociales

## 🔗 Enlaces Externos

- [GitHub](https://github.com/smendozab097)
- [LinkedIn](https://www.linkedin.com/in/smendozab/)
- [Instagram](https://www.instagram.com/sebastian.mb12/)
- Sección de Mascotas

## 💡 Características Destacadas

### CSS-Only Filtering
La sección de mascotas utiliza radio inputs y selectores CSS puros sin JavaScript:
```css
#filter-kikin:checked ~ .gallery .photo-card[data-pet="kikin"] {
    display: block;
}
```

### 3D Carousel con Perspective
```css
.carousel {
    perspective: 1500px;
    height: 500px;
}

.carousel-item.pos-right-1 {
    transform: translateX(290px) scale(0.88) rotateY(-15deg);
}
```

### Glass Morphism Effect
```css
.glass-card {
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
}
```

## 📝 Notas de Desarrollo

- Proyecto migrado de estructura inicial a arquitectura modular
- Uso extensivo de custom properties CSS (variables)
- Animaciones performantes usando `transform` y `opacity`
- Validación accesible con atributos ARIA

## 🎓 Stack Tecnológico Completo

**Frontend Moderno:**
- HTML5 Semántico
- CSS3 Avanzado (Grid, Flexbox, 3D, Animations)
- Vanilla JavaScript ES6+
- Responsive Design Mobile-First

**Metodología:**
- Modularización de CSS
- Grid responsivo escalable
- Optimización de performance
- SEO optimizado

---

**Autor**: Sebastian Mendoza Brieva  
**Año**: 2024-2025  
**Estado**: En desarrollo y personalización continua

> 💝 *"Hecho con cariño para Kikin, Luke, Titi y Bingo"*