document.getElementById('btnAtrasHistoria').addEventListener('click', function() {
    window.location.href = '../content.html';
});

//comportamiento carrusel
const nombresFotos = [
    'fig1.webp',
    'fig2.webp',
    'fig3.webp',
    'fig4.webp',
    'fig5.webp',
    'fig6.webp',
    'fig7.webp',
    'fig8.webp',
    'fig9.webp',
    'fig10.webp',
];

const track = document.getElementById('carouselTrack');

nombresFotos.forEach(function(nombre) {
    const img = document.createElement('img');
    img.src = '../img/album/' + nombre;
    img.alt = 'Foto del álbum';
    track.appendChild(img);
});

const fotos = document.querySelectorAll('.carousel-track img');
//const track = document.getElementById('carouselTrack');
const dotsContenedor = document.getElementById('carouselDots');
let indiceActual = 0;
let autoplay;

// Crear los puntitos
fotos.forEach(function(_, i) {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('activo');
    dot.addEventListener('click', function() {
        irAFoto(i);
    });
    dotsContenedor.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dots span');

function irAFoto(indice) {
    indiceActual = indice;
    track.style.transform = `translateX(-${indice * 100}%)`;
    dots.forEach(function(dot, i) {
        dot.classList.toggle('activo', i === indice);
    });
}

function siguienteFoto() {
    const nuevoIndice = (indiceActual + 1) % fotos.length;
    irAFoto(nuevoIndice);
}

function fotoAnterior() {
    const nuevoIndice = (indiceActual - 1 + fotos.length) % fotos.length;
    irAFoto(nuevoIndice);
}

function iniciarAutoplay() {
    autoplay = setInterval(siguienteFoto, 3000);
}

function reiniciarAutoplay() {
    clearInterval(autoplay);
    iniciarAutoplay();
}

document.getElementById('btnNext').addEventListener('click', function() {
    siguienteFoto();
    reiniciarAutoplay();
});

document.getElementById('btnPrev').addEventListener('click', function() {
    fotoAnterior();
    reiniciarAutoplay();
});

// Swipe táctil
let inicioX = 0;

track.addEventListener('touchstart', function(e) {
    inicioX = e.touches[0].clientX;
});

track.addEventListener('touchend', function(e) {
    const finX = e.changedTouches[0].clientX;
    const diferencia = inicioX - finX;

    if (Math.abs(diferencia) > 50) {
        if (diferencia > 0) {
            siguienteFoto();
        } else {
            fotoAnterior();
        }
        reiniciarAutoplay();
    }
});

iniciarAutoplay();

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
let indiceLightbox = 0;

fotos.forEach(function(foto, i) {
    foto.addEventListener('click', function() {
        indiceLightbox = i;
        abrirLightbox();
    });
});

function abrirLightbox() {
    lightboxImg.src = fotos[indiceLightbox].src;
    lightbox.classList.remove('oculto');
}

document.getElementById('lightboxCerrar').addEventListener('click', function() {
    lightbox.classList.add('oculto');
});

document.getElementById('lightboxNext').addEventListener('click', function() {
    indiceLightbox = (indiceLightbox + 1) % fotos.length;
    lightboxImg.src = fotos[indiceLightbox].src;
});

document.getElementById('lightboxPrev').addEventListener('click', function() {
    indiceLightbox = (indiceLightbox - 1 + fotos.length) % fotos.length;
    lightboxImg.src = fotos[indiceLightbox].src;
});