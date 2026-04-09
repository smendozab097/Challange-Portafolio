
const misProyectos = [
    {
        id: "affinity",
        titulo: "App Red Social - Mascotas",
        descripcion: "Este fue mi primer proyecto creado en Android Studio durante mi aprendizaje en desarrollo de aplicaciones móviles, fue un reto bastante desafiante para mi que apenas iniciaba en el mundo de la programación, pero así mismo fue emocionante y enriquecedor.",
        imagen: "assets/Affinity_app.png"
    },
    {
        id: "encriptador",
        titulo: "Encriptador de Texto",
        descripcion: "Este fue mi primer proyecto desarrollado con Alura, en el cual se debia encriptar o desencriptar un texto, está desarrollado en HTML, CSS y JavaScript. Fue una experiencia con la que pude aprender sobre el desarrollo web al desarrollar el reto por mi cuenta.",
        imagen: "assets/encriptador.png"
    },
    {
        id: "pong",
        titulo: "Juego de Pong",
        descripcion: "Este fue un proyecto desarrollado con Alura haciendo uso de las IA's como chat GPT o Copilot, la idea era desarrollar un juego usando de base, guia o ayuda un codigo generado por la inteligencia artificial y de ahí implementar las correcciones o mejoras necesarias. Fue una experiencia bastante interesante y pude ver la utilidad de las IA's en el desarrollo web.",
        imagen: "assets/pong_game.png"
    }
];

// Seleccionamos los elementos del DOM que necesitamos para el modal
const modal = document.getElementById("project-modal");
const closeBtn = document.querySelector(".close-btn");
const modalBody = document.getElementById("modal-body");


// 3. FUNCIONES DE LÓGICA
function abrirModal(idProyecto) {
    // Buscamos el objeto que coincida con el ID que viene del botón
    const proyecto = misProyectos.find(p => p.id === idProyecto);

    if (proyecto) {
        // Inyectamos el contenido al modal
        modalBody.innerHTML = `
            <h2 style="color: var(--color-neon-azul); margin-bottom: 1.5rem; font-size: 1.8rem;">
                ${proyecto.titulo}
            </h2>
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}" 
                 style="width: 100%; border-radius: 12px; margin-bottom: 1.5rem; border: 1px solid var(--glass-border);">
            <p style="line-height: 1.8; font-size: 1.1rem; color: #e0e0e0;">
                ${proyecto.descripcion}
            </p>
        `;

        // Mostramos el modal usando flex para que el centrado de CSS funcione
        modal.style.display = "flex";
        
        // Evitamos que el fondo haga scroll mientras el modal está abierto
        document.body.style.overflow = "hidden";
    }
}

function cerrarModal() {
    modal.style.display = "none";
    // Devolvemos el scroll al body
    document.body.style.overflow = "auto";
}

// 4. EVENTOS DE CIERRE (SEGURIDAD Y UX)

// Cerrar si el usuario hace clic fuera de la caja de cristal (en el fondo oscuro)
window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }
};

// Cerrar si el usuario presiona la tecla 'Escape'
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        cerrarModal();
    }
});