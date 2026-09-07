// Datos de ejemplo por tema — agrega más entradas o temas aquí
const temas = {
    frutas: {
        titulo: 'Frutas',
        palabras: [
            { es: 'Aguacate', chatino: 'Lyisu̱' },
            { es: 'Calabaza', chatino: 'Chojo' },
            { es: 'Caña', chatino: 'Lyijia' },
            { es: 'Chayote', chatino: 'Ntsakua' },
            { es: 'Chilacayota', chatino: 'Chojo-nkuilyaa' },
            { es: 'Ciruela', chatino: 'Ntsatë' },
            { es: 'Coco', chatino: 'Ngää' },
            { es: 'Durazno', chatino: "Nchi'yú-kitsä'" },
            { es: 'Mamey', chatino: "Kela'" },
            { es: 'Mandarina', chatino: 'Mandarinä' },
            { es: 'Mango', chatino: 'Mangu' },
        ]
    },
    familia: {
        titulo: 'Familia',
        palabras: [
            { es: 'Abuela', chatino: "Nyä'ä-kula" },
            { es: 'Abuelo', chatino: 'Juti-kula' },
            { es: 'Bebé', chatino: "Pii'" },
            { es: 'Comadre', chatino: 'Mbalee' },
            { es: 'Compadre', chatino: 'Mbaa' },
            { es: 'Cuñada', chatino: 'Kuitya' },
            { es: 'Cuñado', chatino: 'Kuilya' },
            { es: 'Esposa', chatino: "lyo'o" },
            { es: 'Esposo', chatino: "lyo'o" },
            { es: 'Gemelos', chatino: 'Kuachi' },
            { es: 'Hermana', chatino: "Tya'" },
            { es: 'Hermano', chatino: "Kuityi'" },
            { es: 'Hermanos', chatino: 'Tyanä' },
            { es: 'Madrina', chatino: "Nyä'ä-tya" },
            { es: 'Mamá', chatino: "Nyä'ä" },
            { es: 'Nietos', chatino: "Jnï'-ñakä" },
            { es: 'Padrino', chatino: 'Jutyítya' },
            { es: 'Papá', chatino: 'Juti' },
            { es: 'Pareja', chatino: "Sá'a̱" },
            { es: 'Pariente', chatino: 'Letaa' }
        ]
    },
    numeros: {
        titulo: 'Números',
        palabras: [
            { es: 'Uno', chatino: "Tsaka" },
            { es: 'Dos', chatino: "Tukuá" },
            { es: 'Tres', chatino: "Tsunä" },
            { es: 'Cuatro', chatino: "Jakua̱" },
            { es: 'Cinco', chatino: "Ka'yú" },
            { es: 'Seis', chatino: "Sukuá" },
            { es: 'Siete', chatino: "Káti̱" },
            { es: 'Ocho', chatino: "Jnö'" },
            { es: 'Nueve', chatino: "Kaá" },
            { es: 'Diez', chatino: "Tií" },
            { es: 'Once', chatino: "Tyi'-tsaka" },
            { es: 'Doce', chatino: "Tyi'-tukuá" },
            { es: 'Trece', chatino: "Tyi'-tsunä" },
            { es: 'Catorce', chatino: "Lyi'-jakua̱" },
            { es: 'Quince', chatino: "Tyi'nyú" },
            { es: 'Dieciséis', chatino: "Tyi'nyú-tsaka" },
            { es: 'Diecisiete', chatino: "Tyi'nyú-tukuá" },
            { es: 'Dieciocho', chatino: "Tyi'nyú-tsunä" },
            { es: 'Diecinueve', chatino: "Tyi'nyú-jakua̱" },
            { es: 'Veinte', chatino: "Kalá" }
        ]
    },
    colores: {
        titulo: 'Colores',
        palabras: [
            { es: 'Amarillo', chatino: "Ngachi" },
            { es: 'Amarillo-claro', chatino: "Ngachi-lee" },
            { es: 'Anaranjado', chatino: "Ngachi-chojo" },
            { es: 'Azul', chatino: "Kuikye'" },
            { es: 'Azul-claro', chatino: "Kuikyeꞌ-kuää" },
            { es: 'Azul-marino', chatino: "Ngaꞌa̱-kuää-lee" },
            { es: 'Blanco', chatino: "Ngatë" },
            { es: 'Café', chatino: "Kajue" },
            { es: 'Gris', chatino: "Jií" },
            { es: 'Morado', chatino: "Kuikyeꞌ" },
            { es: 'Negro', chatino: "Ngatá" },
            { es: 'Rojo', chatino: "Ngáꞌa̱" },
            { es: 'Rosa', chatino: "Kuishi" },
            { es: 'Verde', chatino: "Nga'a̱" },
            { es: 'Verde-claro', chatino: "Nga'a̱-jií" },
            { es: 'Verde-oscuro', chatino: "Nga'a̱-lee" },
            { es: 'Verde-tierno', chatino: "Nga'a̱-kuenë'" }
        ]
    }
};

const temasGrid = document.getElementById('temas-grid');
const contenidoTema = document.getElementById('contenido-tema');
const temaTitulo = document.getElementById('tema-titulo');
const temaLista = document.getElementById('tema-lista');

document.querySelectorAll('.tema-btn').forEach(function(boton) {
    boton.addEventListener('click', function() {
        const clave = boton.getAttribute('data-tema');
        const tema = temas[clave];

        temaTitulo.textContent = tema.titulo;
        temaLista.innerHTML = '';

        tema.palabras.forEach(function(par) {
            const li = document.createElement('li');
            li.textContent = par.es + ' — ' + par.chatino;
            temaLista.appendChild(li);
        });

        temasGrid.classList.add('oculto');
        contenidoTema.classList.remove('oculto');
    });
});

document.getElementById('btnCerrarTema').addEventListener('click', function() {
    contenidoTema.classList.add('oculto');
    temasGrid.classList.remove('oculto');
});

document.getElementById('btnAtrasAprende').addEventListener('click', function() {
    window.location.href = '../content.html';
});