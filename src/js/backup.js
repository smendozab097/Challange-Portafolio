const misProyectos = [
    {
        id: "Outlier",
        titulo: "AI Content Evaluator - Outlier",
        descripcion: "Este fue un empleo como freelancer en la plataforma de Outlier en el cual participe en el entrenamiento y evaluación de modelos de inteligencia articificial o LLM. En este pude poner un poco a prueba mis conocimientos en desarrollo web, pero en general se trató de evaluar las respuestas de los modelos a partir de unas rubricas diseñadas para establecer la respuesta correcta al prompt que se les proporcionaba.",
        imagen: "assets/Affinity_app.png"
    },
    {
        id: "Upwork",
        titulo: "Operator Support Agent - Upwork",
        descripcion: "Trabajé Durante 2 años como operator support agent para una empresa Estadounidense a traves de la Plataforma de Upwork, la cual es una plataforma para freelancers. Fue en esta epoca donde comencé a sentirme atraido por el mundo de la programación e inicié un curso de programación.",
        imagen: "assets/Affinity_app.png"
    },
    {
        id: "affinity",
        titulo: "App Red Social - Mascotas",
        descripcion: "Es una app de red social para dueños de mascotas que desarrollé durante mi formación de programación con MinTIC. Este fue mi primer proyecto creado en Android Studio durante mi aprendizaje en desarrollo de aplicaciones móviles, fue un reto bastante desafiante para mi que apenas iniciaba en este mundo, pero así mismo fue emocionante y enriquecedor.",
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