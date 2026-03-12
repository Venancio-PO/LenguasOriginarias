// Seleccionar los botones
const botones = document.querySelectorAll('#contenedor2 button');

// Función para mostrar mensaje
function mostrarMensaje() {
    // Ocultar el contenido original Y el contenedor de atrás
    document.querySelector('h1').style.display = 'none';
    document.querySelector('#contenedor2').style.display = 'none';
    document.querySelector('#contenedorAtras').style.display = 'none'; // ← AÑADE ESTA LÍNEA
    
    // Crear el contenedor del mensaje
    const mensajeDiv = document.createElement('div');
    mensajeDiv.id = 'mensaje-contenedor';
    mensajeDiv.innerHTML = `
        <h2>CONTENIDO NO DISPONIBLE POR AHORA, ESTAMOS TRABAJANDO EN ELLO</h2>
        <button id="btnRegresar">Regresar</button>
    `;
    
    document.body.appendChild(mensajeDiv);
    
    // Agregar evento al botón regresar
    document.getElementById('btnRegresar').addEventListener('click', function() {
        document.querySelector('h1').style.display = 'block';
        document.querySelector('#contenedor2').style.display = 'flex';
        document.querySelector('#contenedorAtras').style.display = 'grid'; // ← AÑADE ESTA LÍNEA
        mensajeDiv.remove();
    });
}

// Agregar eventos a los botones (excepto el primero que va a content.html)
botones[1].addEventListener('click', mostrarMensaje); // Chatino de Juquila
botones[2].addEventListener('click', mostrarMensaje); // Chatino de Quehije
botones[3].addEventListener('click', mostrarMensaje); // Chatino de Jamiltepec
botones[4].addEventListener('click', mostrarMensaje); // Chatino de Tataltepec

document.getElementById('btnZenzontepec').addEventListener('click', function() {
    window.location.href = 'content.html';
});

document.getElementById('btnAtras').addEventListener('click', function() {
    window.location.href = 'home.html';
});