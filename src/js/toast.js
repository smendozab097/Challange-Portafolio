document.addEventListener('DOMContentLoaded', () => {

    // 1. Creamos el elemento
    const toast = document.createElement('div');
    toast.textContent = '¡Hola! Bienvenido a mi portafolio 👋';

    // 2. Aplicamos los estilos directamente desde JS
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 210, 255, 0.3)',
        borderRadius: '12px',
        padding: '1rem 1.5rem',
        color: '#cce0fd',
        fontSize: '0.95rem',
        fontFamily: 'Raleway, sans-serif',
        zIndex: '9999',
        boxShadow: '0 2px 20px rgba(0, 210, 255, 0.15)',
        opacity: '0',
        transform: 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease'
    });

    // 3. Lo inyectamos en el body
    document.body.appendChild(toast);

    // 4. Pequeño delay para que el navegador registre el estado inicial
    //    y luego aplicamos el estado "visible" (activa la transición)
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 100);

    // 5. Después de 4 segundos, lo hacemos desaparecer
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';

        // 6. Cuando termina la transición, lo eliminamos
        toast.addEventListener('transitionend', () => {
            toast.remove();
            console.log('🍞 Toast eliminado');
        });

    }, 4000);

});