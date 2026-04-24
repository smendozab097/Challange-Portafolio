document.addEventListener('DOMContentLoaded', () => {

    const boton = document.getElementById('btn__idioma');
    
    // Variable global para que otros scripts la lean
    window.idiomaActual = 'es';

    const traducciones = {
        en: {
            // Navegación
            nav_sobre: 'About me',
            nav_skills: 'Skills',
            nav_hobbies: 'Hobbies',
            nav_formacion: 'Education',
            nav_proyectos: 'Projects',
            nav_contacto: 'Contact',

            // Presentación
            subtitulo: 'Web Dev & Mechanical Engineer',
            presentacion: 'Mechanical Engineer transitioning into the world of web development. I have participated in programs such as Oracle ONE in collaboration with Alura Latam and corporate training programs like Riwi.',

            // Títulos de sección
            titulo_sobre: 'About me',
            titulo_skills: 'Skills',
            titulo_hobbies: 'Hobbies',
            titulo_formacion: 'Education',
            titulo_proyectos: 'Professional Experience & Projects',
            titulo_contacto: 'Contact',

            // Sobre mí
            texto_sobre: `I'm a mechanical engineer who recently entered the world of web development after seeing a bit of what can be done in this field. I had my first interaction with programming when I participated in a programming fundamentals diploma, and that's when I decided my new path would be in web development. Then I joined an Oracle program called Oracle Next Education (ONE) where I was able to further develop my skills as a Web Dev and learned about databases, GitHub and AI usage throughout my time in the program.<br><br>I enjoy applying logic and creativity, so having the opportunity to venture into the world of programming is exciting for me. I'm currently part of the developer training offered by Riwi.`,

            // Aficiones
            hobby_ciclismo: 'Cycling',
            hobby_videojuegos: 'Gaming',
            hobby_pintar: 'Painting',
            hobby_series: 'Watching series',
            hobby_viajar: 'Traveling',
            hobby_senderismo: 'Hiking',

            // Formación (solo títulos)
            formacion_ONE: 'Web Development - Front end',
            formacion_UA: 'Mechanical Engineering',
            formacion_uninorte: 'Basic Programming & Software Development Diploma',

            // Proyectos
            proyecto_affinity: "Affinity Pet - Mobile App",
            proyecto_encriptador:"Text Encryptor",
            proyecto_pong: "Pong Game",
            proyecto_aluraflix: "AluraFlix Project",

            // Botones
            btn_ver: 'See more',
            btn_enviar: 'Send',

            // Contacto
            texto_contacto: `I'm available to discuss <strong>new opportunities</strong> and <strong>projects</strong>. <em>Send me a message!</em>`,

            // Placeholders
            ph_nombre: 'Name',
            ph_email: 'Email',
            ph_asunto: 'Subject',
            ph_mensaje: 'Message'
        },

        es: {
            nav_sobre: 'Sobre mí',
            nav_skills: 'Habilidades',
            nav_hobbies: 'Aficiones',
            nav_formacion: 'Formación',
            nav_proyectos: 'Proyectos',
            nav_contacto: 'Contacto',

            subtitulo: 'Web Dev & Mechanical Engineer',
            presentacion: 'Ingeniero Mecánico en transicion al mundo del desarrollo web, he participado en algunos programas como Oracle ONE en conjunto con Alura Latam y entrenamientos empresariales como Riwi.',

            titulo_sobre: 'Sobre mí',
            titulo_skills: 'Habilidades',
            titulo_hobbies: 'Aficiones',
            titulo_formacion: 'Formación académica',
            titulo_proyectos: 'Experiencia Profesional y Proyectos',
            titulo_contacto: 'Contacto',

            texto_sobre: `Soy un ingeniero mecanico que no hace mucho entro al mundo del desarrollo web después de ver un poco de lo que se puede hacer en este campo. Tuve mi primera interaccion con la programación al participar en un diplomado de fundamentos de programacion, con esto decidí que mi nuevo camino sería con el desarrollo web. Luego entre a un programa de Oracle llamado Oracle Next Education (ONE) en el cual pude desarrollar un poco más mis skills-hobbies como Web Dev y aprendí algo de base de datos, github y uso de la IA a lo largo de mi estancia en el programa.<br><br>Disfruto aplicar la lógica y la creatividad, por lo que tener la oportunidad de incursionar en el mundo de la programación es emocionante para mí. Actualmente hago parte del entrenamiento como desarrolladores que ofrece Riwi.`,

            hobby_ciclismo: 'Ciclismo',
            hobby_videojuegos: 'Videojuegos',
            hobby_pintar: 'Pintar',
            hobby_series: 'Ver series',
            hobby_viajar: 'Viajar',
            hobby_senderismo: 'Senderismo',

            formacion_ONE: 'Desarrollo Web - Front end',
            formacion_UA: 'Ingeniería Mecánica',
            formacion_uninorte: 'Diplomado en programación Básica & Software Development',

            proyecto_affinity: 'Affinity Pet - App movil',
            proyecto_encriptador: 'Encriptador de texto',
            proyecto_pong: 'Juego de Pong',
            proyecto_aluraflix: 'Proyecto Aluraflix',

            btn_ver: 'Ver más',
            btn_enviar: 'Enviar',

            texto_contacto: `Estoy disponible para discutir <strong>nuevas oportunidades</strong> y <strong>proyectos</strong> <em>¡Enviame un mensaje!</em>`,

            ph_nombre: 'Nombre',
            ph_email: 'Correo Electrónico',
            ph_asunto: 'Asunto',
            ph_mensaje: 'Mensaje'
        }
    };

    function cambiarIdioma(idioma) {
        const elementos = document.querySelectorAll('[data-lang]');
        elementos.forEach(elemento => {
            const clave = elemento.getAttribute('data-lang');
            if (traducciones[idioma][clave]) {
                elemento.innerHTML = traducciones[idioma][clave];
            }
        });

        const placeholders = document.querySelectorAll('[data-lang-placeholder]');
        placeholders.forEach(elemento => {
            const clave = elemento.getAttribute('data-lang-placeholder');
            if (traducciones[idioma][clave]) {
                elemento.placeholder = traducciones[idioma][clave];
            }
        });
    }

    boton.addEventListener('click', () => {
        window.idiomaActual = window.idiomaActual === 'es' ? 'en' : 'es';

        boton.title = window.idiomaActual === 'es' 
            ? 'Translate to English' 
            : 'Traducir a Español';

        cambiarIdioma(window.idiomaActual);

        console.log(`🌐 Idioma cambiado a: ${window.idiomaActual.toUpperCase()}`);
    });

});