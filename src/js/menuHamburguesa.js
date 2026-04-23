// Esperamos a que el "chasis" esté listo
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mapeo de componentes (Selección)
    const botonHamburguesa = document.querySelector('.menu__toggle');
    const menuNavegacion = document.querySelector('.navegacion');

    // 2. Comprobación (Multímetro)
    if (botonHamburguesa && menuNavegacion) {
        console.log("✅ Sistema eléctrico conectado: Botón y Menú encontrados.");
    } else {
        console.error("❌ Error de ensamblaje: No se encontraron las clases. Revisa tu HTML.");
    }

    // 3. Instalamos el actuador (El Event Listener)
    botonHamburguesa.addEventListener('click', (e) => {
        // Evitamos cualquier comportamiento por defecto (por si acaso)
        e.preventDefault(); 
        
        // Accionamos el cambio de estado en el menú
        menuNavegacion.classList.toggle('nav--active');

        // Feedback visual en consola para nosotros
        console.log("Palanca accionada: Estado del menú cambiado.");
    });
});