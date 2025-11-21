document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('acerca');
    const button = document.getElementById('soundToggle');

    // Inicializamos silenciado
    video.muted = true;
    // Usaremos el ícono de Silencio (X) cuando el audio esté 'Activo' para indicar que se puede silenciar.
    // Usaremos el ícono de Altavoz cuando esté 'Silenciado' para indicar que se puede activar.
    button.textContent = '🔊'; 

    button.addEventListener('click', () => {
        if (video.muted) {
            // Activamos audio
            video.muted = false;
            button.textContent = '🔊'; // Muestra el ícono de silencio
        } else {
            // Silenciamos audio
            video.muted = true;
            button.textContent = '🔇'; // Muestra el ícono de altavoz
        }
    });
});