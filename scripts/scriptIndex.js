const botones = document.querySelectorAll('#contenedor2 button');

function mostrarMensaje() {
    document.querySelector('h1').style.display = 'none';
    document.querySelector('#contenedor2').style.display = 'none';
    
    const mensajeDiv = document.createElement('div');
    mensajeDiv.id = 'mensaje-contenedor';
    mensajeDiv.innerHTML = `
    <h2>
        <span class="mensaje-chatino">Natukui ntsu'u ndee tsa nyi, ti' ndea'</span>
        <span class="mensaje-espanol">CONTENIDO NO DISPONIBLE POR AHORA, ESTAMOS TRABAJANDO EN ELLO</span>
    </h2>
    <button id="btnRegresar">
        <span class="nombre-chatino-regresar">Tya tsutsö'</span>
        <span class="nombre-espanol-regresar">Atrás</span>
    </button>
`;
    
    document.body.appendChild(mensajeDiv);
    
    document.getElementById('btnRegresar').addEventListener('click', function() {
        document.querySelector('h1').style.display = 'flex';
        document.querySelector('#contenedor2').style.display = 'flex';
        mensajeDiv.remove();
    });
}

botones[1].addEventListener('click', mostrarMensaje); // Chatino de Juquila
botones[2].addEventListener('click', mostrarMensaje); // Chatino de Quehije
botones[3].addEventListener('click', mostrarMensaje); // Chatino de Jamiltepec
botones[4].addEventListener('click', mostrarMensaje); // Chatino de Tataltepec

document.getElementById('btnZenzontepec').addEventListener('click', function() {
    window.location.href = 'content.html';
});