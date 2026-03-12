// Seleccionar los botones
const botones = document.querySelectorAll('#contenedor1 button');

// Función para mostrar mensaje
function mostrarMensaje() {
    // Ocultar el contenido original
    document.querySelector('h1').style.display = 'none';
    document.querySelector('#contenedor1').style.display = 'none';
    
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
        document.querySelector('#contenedor1').style.display = 'flex';
        mensajeDiv.remove();
    });
}

// Agregar eventos a los botones (Zapoteco y Mixteco)
botones[1].addEventListener('click', mostrarMensaje); // Zapoteco
botones[2].addEventListener('click', mostrarMensaje); // Mixteco

document.getElementById('btnChatino').addEventListener('click', function() {
    window.location.href = 'main.html';
});