# Challenge ONE | Front End -  Portafolio


### ¡Bienvenido a mi Portafolio! :

Un portafolio web moderno y responsivo que showcasea mi transición desde la ingeniería mecánica hacia el desarrollo web, incluyendo una sección/galería dedicada a mis mascotas.

---

#### Te invito a que le eches un ojo ⭐ 
[ir a portafolio](https://smendozab097.github.io/)
#### Si te gusta o tienes sugerencias estoy abierto a escucharlas 📚

### Proximamente estaré personalizandolo aun más!
---

## 🌟 Características Principales

### 📱 Diseño Responsivo
- Totalmente adaptable a dispositivos móviles, tablets y desktops
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
├── index.html             # Página principal del portafolio
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

**Metodología:**
- Mobile-First
- Modularización de CSS
- Grid responsivo escalable
- Optimización de performance
- SEO optimizado

### Características CSS Avanzadas
- `backdrop-filter: blur()` para efectos glass-morphism
- `clip-path` para formas personalizadas
- `perspective` y `rotateY` para efectos 3D
- `radial-gradient` y `linear-gradient` para fondos dinámicos


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

### Tema Mascotas
- Fondo: `#f6f2ec`
- Texto: `#1a1613`
- Acentos: `#4a89c9`, `#96c0e8`
- Bordes: `#d9cfc0`

### Tema Portafolio
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


## Sobre mi
- **Autor**: Sebastian Mendoza Brieva  
- **link**: smendozab097.github.io
- **Año**: 2026 
- **Estado**: En desarrollo y personalización continua

> 💝 *"Hecho con cariño para Kikin, Luke, Titi y Bingo"*