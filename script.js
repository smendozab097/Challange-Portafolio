
const misProyectos = {
        outlier: {
            titulo: "AI Content Evaluator - Outlier",
            descripcion: "Este fue un empleo como freelancer en la plataforma de Outlier en el cual participe en el entrenamiento y evaluación de modelos de inteligencia articificial o LLM. En este pude poner un poco a prueba mis conocimientos en desarrollo web, pero en general se trató de evaluar las respuestas de los modelos a partir de unas rubricas diseñadas para establecer la respuesta correcta al prompt que se les proporcionaba.",
            imagen: "public/imgs/Outlier_logo.png"
        },
        upwork: {
            titulo: "Operator Support Agent - Upwork",
            descripcion: "Trabajé Durante 2 años como operator support agent para una empresa Estadounidense a traves de la Plataforma de Upwork, la cual es una plataforma para freelancers. Fue en esta epoca donde comencé a sentirme atraido por el mundo de la programación e inicié un curso de programación.",
            imagen: "public/imgs/Upwork_logo.png"
        },
        affinity: {
            titulo: "App Red Social - Mascotas",
            descripcion: "Es una app de red social para dueños de mascotas que desarrollé durante mi formación de programación con MinTIC. Este fue mi primer proyecto creado en Android Studio durante mi aprendizaje en desarrollo de aplicaciones móviles, fue un reto bastante desafiante para mi que apenas iniciaba en este mundo, pero así mismo fue emocionante y enriquecedor.",
            imagen: "public/imgs/Affinity_app.png"
        },
        encriptador: {
            titulo: "Encriptador de Texto",
            descripcion: "Este fue mi primer proyecto desarrollado con Alura, en el cual se debia encriptar o desencriptar un texto, está desarrollado en HTML, CSS y JavaScript. Fue una experiencia con la que pude aprender sobre el desarrollo web al desarrollar el reto por mi cuenta.",
            imagen: "public/imgs/encriptador.png"
        },
        juego: {
            titulo: "Juego de Pong",
            descripcion: "Este fue un proyecto desarrollado con Alura haciendo uso de las IA's como chat GPT o Copilot, la idea era desarrollar un juego usando de base, guia o ayuda un codigo generado por la inteligencia artificial y de ahí implementar las correcciones o mejoras necesarias. Fue una experiencia bastante interesante y pude ver la utilidad de las IA's en el desarrollo web.",
            imagen: "public/imgs/pong_game.png"
        },


};

// Seleccionamos los elementos del DOM que necesitamos para el modal
const modal = document.getElementById("modal__proyectos");
const modalBody = document.getElementById("modal__info");
const closeBtn = document.querySelector(".close_button");


// 3. FUNCIONES DE LÓGICA
document.querySelectorAll(".btn_abrir_modal").forEach(boton => {
    boton.addEventListener("click", () => {
        const idProyecto = boton.getAttribute("data-proyecto");
        const info = misProyectos[idProyecto];

        modalBody.innerHTML = `
            <img src="${info.imagen}" class="modal_img" alt="${info.titulo}" ">
            <h2 class="titulos">${info.titulo}</h2>
            <p class="textos">${info.descripcion}</p>
        `;
        
        modal.style.display = "flex";
    });
});

// 4. Cerrar al click en la X o fuera del modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};

// Cerrar si el usuario presiona la tecla 'Escape'
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        cerrarModal();
    }
});