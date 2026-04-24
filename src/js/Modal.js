document.addEventListener("DOMContentLoaded", () => {

    // Proyectos en ambos idiomas
    const misProyectos = {
        outlier: {
            es: {
                titulo: "AI Content Evaluator - Outlier",
                descripcion: "Este fue un empleo como freelancer en la plataforma de Outlier en el cual participe en el entrenamiento y evaluación de modelos de inteligencia articificial o LLM. En este pude poner un poco a prueba mis conocimientos en desarrollo web, pero en general se trató de evaluar las respuestas de los modelos a partir de unas rubricas diseñadas para establecer la respuesta correcta al prompt que se les proporcionaba."
            },
            en: {
                titulo: "AI Content Evaluator - Outlier",
                descripcion: "This was a freelance job on the Outlier platform where I participated in the training and evaluation of artificial intelligence models or LLMs. I was able to put my web development knowledge to the test, but overall it was about evaluating model responses based on rubrics designed to establish the correct answer to the prompts provided."
            },
            imagen: "public/imgs/Outlier_logo.png",
            clase: ""
        },
        upwork: {
            es: {
                titulo: "Operator Support Agent - Upwork",
                descripcion: "Trabajé durante 2 años como operator support agent para una empresa Estadounidense a través de la Plataforma de Upwork, la cual es una plataforma para freelancers. Fue en esta epoca donde comencé a sentirme atraido por el mundo de la programación e inicié un curso de programación."
            },
            en: {
                titulo: "Operator Support Agent - Upwork",
                descripcion: "I worked for 2 years as an operator support agent for an American company through the Upwork platform, which is a freelancing platform. It was during this time that I started feeling attracted to the world of programming and began a programming course."
            },
            imagen: "public/imgs/Upwork_logo.png",
            clase: ""
        },
        affinity: {
            es: {
                titulo: "App Red Social - Mascotas",
                descripcion: "Es una app de red social para dueños de mascotas que desarrollé durante mi formación de programación con MinTIC. Este fue mi primer proyecto creado en Android Studio durante mi aprendizaje en desarrollo de aplicaciones móviles, fue un reto bastante desafiante para mi que apenas iniciaba en este mundo, pero así mismo fue emocionante y enriquecedor."
            },
            en: {
                titulo: "Social Network App - Pets",
                descripcion: "It's a social network app for pet owners that I developed during my programming training with MinTIC. This was my first project created in Android Studio during my learning in mobile app development. It was quite a challenging experience for me as a beginner, but it was also exciting and enriching."
            },
            imagen: "public/imgs/Affinity_app.png",
            clase: "img_large"
        },
        encriptador: {
            es: {
                titulo: "Encriptador de Texto",
                descripcion: "Este fue mi primer proyecto desarrollado con Alura, en el cual se debia encriptar o desencriptar un texto, está desarrollado en HTML, CSS y JavaScript. Fue una experiencia con la que pude aprender sobre el desarrollo web al desarrollar el reto por mi cuenta."
            },
            en: {
                titulo: "Text Encryptor",
                descripcion: "This was my first project developed with Alura, where the goal was to encrypt or decrypt text. It's built with HTML, CSS and JavaScript. It was an experience that allowed me to learn about web development by tackling the challenge on my own."
            },
            imagen: "public/imgs/encriptador.png",
            clase: "img_large"
        },
        juego: {
            es: {
                titulo: "Juego de Pong",
                descripcion: "Este fue un proyecto desarrollado con Alura haciendo uso de las IA's como chat GPT o Copilot, la idea era desarrollar un juego usando de base, guía o ayuda un código generado por la inteligencia artificial y de ahí implementar las correcciones o mejoras necesarias. Fue una experiencia bastante interesante y pude ver la utilidad de las IA's en el desarrollo web."
            },
            en: {
                titulo: "Pong Game",
                descripcion: "This was a project developed with Alura using AIs like ChatGPT or Copilot. The idea was to develop a game using AI-generated code as a base, guide or help, and then implement the necessary corrections or improvements. It was a very interesting experience and I could see the usefulness of AIs in web development."
            },
            imagen: "public/imgs/pong_game.png",
            clase: "img_large"
        },
        alura: {
            es: {
                titulo: "Proyecto AluraFlix",
                descripcion: "Este fue mi proyecto final cuando estuve en Alura, en el usé react para su construcción. Es una página inspirada en Netflix en la cual se pueden ver vídeos de desarrollo web de alura, de manera similar a la que lo hacemos en Netflix."
            },
            en: {
                titulo: "AluraFlix Project",
                descripcion: "This was my final project at Alura, where I used React for its construction. It's a Netflix-inspired page where you can watch Alura's web development videos, similar to how we do it on Netflix."
            },
            imagen: "public/imgs/Aluraflix.png",
            clase: "img_large"
        }
    };

    const modal = document.getElementById("modal__proyectos");
    const modalBody = document.getElementById("modal__info");
    const closeBtn = document.querySelector(".close_button");

    // Función para cerrar modal
    function cerrarModal() {
        modal.style.display = "none";
    }

    document.querySelectorAll(".btn_abrir_modal").forEach(boton => {
        boton.addEventListener("click", () => {
            const idProyecto = boton.getAttribute("data-proyecto");
            const proyecto = misProyectos[idProyecto];

            // Lee el idioma actual (viene de cambioIdioma.js)
            const idioma = window.idiomaActual || 'es';
            const info = proyecto[idioma];

            modalBody.innerHTML = `
                <img src="${proyecto.imagen}" class="modal_img ${proyecto.clase}" alt="${info.titulo}">
                <h2 class="titulos">${info.titulo}</h2>
                <p class="textos">${info.descripcion}</p>
            `;

            modal.style.display = "flex";
        });
    });

    closeBtn.onclick = () => cerrarModal();
    window.onclick = (event) => {
        if (event.target == modal) cerrarModal();
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') cerrarModal();
    });

});