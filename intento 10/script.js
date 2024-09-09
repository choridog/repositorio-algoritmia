// script.js

function toggleVisibility(id) {
    const popup = document.getElementById(id); // Obtiene el elemento con el ID proporcionado
    if (popup.style.display === 'block') { // Si la ventana emergente está visible
        popup.style.display = 'none'; // Oculta la ventana emergente
    } else {
        popup.style.display = 'block'; // Muestra la ventana emergente
    }
}