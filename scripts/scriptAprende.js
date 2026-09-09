// Datos de ejemplo por tema — agrega más entradas o temas aquí
const temas = {
    frutas: {
        titulo: 'Frutas',
        tituloChatino: "Nchi'yú",
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
            { es: 'Melón', chatino: 'Melö' },
            { es: 'Nanche', chatino: 'Ndachi' },
            { es: 'Naranja', chatino: 'Ntsëë-chinyä' },
            { es: 'Papaya', chatino: 'Payaa' },
            { es: 'Piña', chatino: "Ngutyitsu'" },
            { es: 'Plátano', chatino: "Ngo'o" },
            { es: 'Sandía', chatino: 'Chojo-peru' },
            { es: 'Tamarindo', chatino: "Ua'a-jlya" },
            { es: 'Tuna', chatino: "Chundi'" },
        ]
    },
    familia: {
        titulo: 'Familia',
        tituloChatino: 'Letaa',
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
        tituloChatino: 'Numero',
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
        tituloChatino: 'Kulor',
        palabras: [
            { es: 'Amarillo', chatino: "Ngachi" },
            { es: 'Amarillo-claro', chatino: "Ngachi-lee" },
            { es: 'Anaranjado', chatino: "Ngachi-chojo" },
            { es: 'Azul', chatino: "Kuikye'" },
            { es: 'Azul-claro', chatino: "Kuikye'-kuää" },
            { es: 'Azul-marino', chatino: "Nga'a̱-kuää-lee" },
            { es: 'Blanco', chatino: "Ngatë" },
            { es: 'Café', chatino: "Kajue" },
            { es: 'Gris', chatino: "Jií" },
            { es: 'Morado', chatino: "Kuikye'" },
            { es: 'Negro', chatino: "Ngatá" },
            { es: 'Rojo', chatino: "Ngá'a̱" },
            { es: 'Rosa', chatino: "Kuishi" },
            { es: 'Verde', chatino: "Nga'a̱" },
            { es: 'Verde-claro', chatino: "Nga'a̱-jií" },
            { es: 'Verde-oscuro', chatino: "Nga'a̱-lee" },
            { es: 'Verde-tierno', chatino: "Nga'a̱-kuenë'" }
        ]
    },
    tiempo: {
        titulo: 'Tiempo',
        tituloChatino: "Kuea'",
        palabras: [
            { es: 'Ahora', chatino: "Nyi" },
            { es: 'A-los-5-días', chatino: "Latyikaꞌyú-tsää" },
            { es: 'Amanecer', chatino: "Ndesushi" },
            { es: 'Anochecer', chatino: "Tsu'-ndetakabi'" },
            { es: 'Antes', chatino: "Tsuꞌ- nanëꞌ" },
            { es: 'Antier', chatino: "Latii" },
            { es: 'Año', chatino: "Ñajä" },
            { es: 'Atardecer', chatino: "Tsu'kushë" },
            { es: 'Ayer', chatino: "Laká" },
            { es: 'Cada-tres-días', chatino: "Kotsá" },
            { es: 'Después', chatino: "Nchaa-tya-tsuꞌ-ndoo" },
            { es: 'Día', chatino: "Tyitsää" },
            { es: 'En-el-almuerzo', chatino: "Kuea'-romosaa" },
            { es: 'En-la-cena', chatino: "Kuea'-shëë" },
            { es: 'En-la-comida', chatino: "Kuea'-jlyá" },
            { es: 'En-la-mañana', chatino: "Tsu'-jlyaa" },
            { es: 'En-la-noche', chatino: "Tsu'-telaa" },
            { es: 'En-la-tarde', chatino: "Tsu'-kushëë" },
            { es: 'Esta-semana', chatino: "Sumanä-ndee" },
            { es: 'Este-año', chatino: "Ñajä-ndee" },
            { es: 'Este-mes', chatino: "Koo'-ndee" },
            { es: 'Hoy', chatino: "Nyi" },
            { es: 'Madrugada', chatino: "Tsu'-latsá" },
            { es: 'Mañana', chatino: "Laki" },
        ]
    },
    animales: {
        titulo: 'Animal',
        tituloChatino: "Nya'ne",
        palabras: [
            { es: 'Águila', chatino: "Kue'ya" },
            { es: 'Ardilla', chatino: "Kuañö" },
            { es: 'Armadillo', chatino: "Kukuëꞌ" },
            { es: 'Avestruz', chatino: "Pii" },
            { es: 'Becerro', chatino: "Mbeeꞌ" },
            { es: 'Borrego', chatino: "Orregu" },
            { es: 'Buho', chatino: "Kukö" },
            { es: 'Burraca', chatino: "Lusu'" },
            { es: 'Burro', chatino: "Lyeshtyä" },
            { es: 'Caballo', chatino: "kuayu" },
            { es: 'Calandria', chatino: "Kuii'" },
            { es: 'Camarón', chatino: "Kueꞌ-kela" },
            { es: 'Cangrejo', chatino: "Kue'-sukuaꞌ" },
            { es: 'Cerdo', chatino: "Kue'" },
            { es: 'Chacal', chatino: "Kutunü" },
            { es: 'Chango', chatino: "Machë" },
            { es: 'Charal', chatino: "Suku" },
            { es: 'Chivo', chatino: "Tentsu" },
            { es: 'Codorniz', chatino: "Kuichëë" },
            { es: 'Colibrí', chatino: "Tseyu'" },
            { es: 'Conejo', chatino: "Kuichi̱" },
            { es: 'Cotorra', chatino: "Saa'" },
            { es: 'Coyote', chatino: "Kueta'" },
            { es: 'Cuervo', chatino: "Kyeká" },
        ]
    },
    plantas: {
        titulo: 'Plantas',
        tituloChatino: "Kishë'",
        palabras: [
            { es: 'Albahaca', chatino: "kishë'-lya'a" },
            { es: 'Algodón', chatino: "Jlyaaꞌ" },
            { es: 'Chepil', chatino: "Keta-yaka" },
            { es: 'Chilar', chatino: "Yajnyäꞌ" },
            { es: 'Cilandro', chatino: "Kulantru" },
            { es: 'Epazote', chatino: "Kueje" },
            { es: 'Flor', chatino: "Kyee" },
            { es: 'Maguey', chatino: "Choo'" },
            { es: 'Milpa', chatino: "Kela" },
            { es: 'Pasto', chatino: "Kii" },
            { es: 'Pitiona', chatino: "Kyunöꞌ-kuachi'" },
            { es: 'Ruda', chatino: "Rura" },
            { es: 'Telimon', chatino: "Kii-lya'a" },
            { es: 'Tomatal', chatino: "Lutí-nkuishí" },
            { es: 'Yerba-buena', chatino: "Kyunöꞌ-jlya" },
            { es: 'Yerba-santa', chatino: "Yuaꞌ" },
            { es: 'Huichicata', chatino: "Lato'" },
            { es: 'Siempre-viva', chatino: "Kuityi'" },
            { es: 'Tecomachiche', chatino: "Chojo-kekaꞋ-jnyäꞋä" },
            { es: 'Sábila', chatino: "ChooꞋ kïï" },
            { es: 'Quintonil', chatino: "Ketá-lyityá" },
            { es: 'Violeta', chatino: "Ketá-miriu" },
            { es: 'Frijolar', chatino: "Ketá-ndaa" },
        ]
    },
    herramientas: {
        titulo: 'Herramienta',
        tituloChatino: "Yaa'jnyä",
        palabras: [
            { es: 'Adobe', chatino: "Lyityú" },
            { es: 'Aguja', chatino: "Tyekuä" },
            { es: 'Bule', chatino: "Keka'" },
            { es: 'Cadena', chatino: "karenä" },
            { es: 'Canasta', chatino: "Kikäꞌä" },
            { es: 'Clavo', chatino: "Nkuekuä" },
            { es: 'Escalera', chatino: "Nduyaa'" },
            { es: 'Escoba', chatino: "Lyukuá" },
            { es: 'Hacha', chatino: "Jacha" },
            { es: 'Hilo', chatino: "Jöökanatu" },
            { es: 'Horcón', chatino: "Mityäꞌ" },
            { es: 'Leña', chatino: "Yanchakïï" },
            { es: 'Machete', chatino: "Matyi" },
            { es: 'Martillo', chatino: "Martiyu" },
            { es: 'Metro', chatino: "Metru" },
            { es: 'Ocote', chatino: "Kitye" },
            { es: 'Pala', chatino: "Palya" },
            { es: 'Pico', chatino: "Piku" },
            { es: 'Pinzas', chatino: "pintsa" },
            { es: 'Rastrillo', chatino: "Lyukuá-ndeꞌya" },
            { es: 'Reata', chatino: "Jüü-reta" },
            { es: 'Rede', chatino: "Kesu" },
            { es: 'Serrucho', chatino: "Kikuände'ya" },
            { es: 'Tabla', chatino: "Yaka-uajua" },
        ]
    },
    naturaleza: {
        titulo: 'Naturaleza',
        tituloChatino: "Tselayuu",
        palabras: [
            { es: 'Arcoiris', chatino: "Kuenätaa" },
            { es: 'Arena', chatino: "Yusë" },
            { es: 'Arroyo', chatino: "Kyéku̱" },
            { es: 'Bosque', chatino: "Loshë'" },
            { es: 'Camino', chatino: "Tyakuë" },
            { es: 'Cielo', chatino: "Kuää" },
            { es: 'Cueva', chatino: "Ketu-ngula" },
            { es: 'Derrumbe', chatino: "Nkuetë'ë" },
            { es: 'Hoja', chatino: "Laka'" },
            { es: 'Lluvia', chatino: "Choo" },
            { es: 'Luna', chatino: "Koo'" },
            { es: 'Montaña', chatino: "Kyajo'o" },
            { es: 'Mundo', chatino: "Tselayu" },
            { es: 'Nido', chatino: "Nyátë" },
            { es: 'Nube', chatino: "Koo" },
            { es: 'Pueblo', chatino: "Kitsë" },
            { es: 'Río', chatino: "Tyakela" },
            { es: 'Sol', chatino: "Jo'o" },
            { es: 'Trueno', chatino: "Kuityi'yu" },
            { es: 'Viento', chatino: "Kuë'ë" },
            { es: 'Granizo', chatino: "Choo-kyee̱" },
            { es: 'Tormenta', chatino: "Choo-kuëꞌë" },
        ]
    },
    partescuerpo: {
        titulo: 'Partes del cuerpo',
        tituloChatino: "Yuu ngutii",
        palabras: [
            { es: 'Barba', chatino: "Lusu" },
            { es: 'Barbilla', chatino: "Shinkuee" },
            { es: 'Boca', chatino: "Tu'ua" },
            { es: 'Brazo', chatino: "Shikö" },
            { es: 'Cabello', chatino: "Kitsäꞌ-ikye" },
            { es: 'Cabeza', chatino: "Ikye" },
            { es: 'Ceja', chatino: "Kitsäꞌ-ndoo" },
            { es: 'Cerebro', chatino: "Yukua-ikye" },
            { es: 'Codo', chatino: "Shikuku'" },
            { es: 'Corazón', chatino: "Tyikyee-ngutu" },
            { es: 'Costillas', chatino: "Tyijiä-shii'" },
            { es: 'Cuello', chatino: "Yanë" },
            { es: 'Dedo', chatino: "Jnee̱" },
            { es: 'Dedos-de-la-mano', chatino: "Jnee-yaa'" },
            { es: 'Dedos-del-pie', chatino: "Jnee-kia'" },
            { es: 'Dientes', chatino: "Nde'ya" },
            { es: 'Espalda', chatino: "Itsöꞌ" },
            { es: 'Estómago', chatino: "Nanë'" },
            { es: 'Hombro', chatino: "Tyashikö" },
            { es: 'Lengua', chatino: "Lutse'" },
            { es: 'Manos', chatino: "Yaa'" },
            { es: 'Muñeca', chatino: "Yanë-yaa'" },
            { es: 'Nalgas', chatino: "Toshuꞌ" },
            { es: 'Nariz', chatino: "Shëëꞌ" },
            { es: 'Ojo', chatino: "Ndoo" },
            { es: 'Oreja', chatino: "Ñakä" },
        ]
    },
    comida: {
        titulo: 'Comida-bebida',
        tituloChatino: "Súkua",
        palabras: [
            { es: 'Aceite', chatino: "Sete" },
            { es: 'Agua', chatino: "Itya" },
            { es: 'Caldo', chatino: "Kantu" },
            { es: 'Agua-de-sabor', chatino: "Itya-tyikala'" },
            { es: 'Camote', chatino: "Köö" },
            { es: 'Atole', chatino: "Tyatyikyeꞌ" },
            { es: 'Carne', chatino: "Kuenä'" },
            { es: 'Café', chatino: "Kajue" },
            { es: 'Harina', chatino: "Keta-chajlya" },
            { es: 'Chocolate', chatino: "Chukula" },
            { es: 'Huevo', chatino: "Sue" },
            { es: 'Leche', chatino: "Shityi'" },
            { es: 'Manteca', chatino: "Tää" },
            { es: 'Masa', chatino: "Sukuä" },
            { es: 'Mazorca', chatino: "Lyitya" },
            { es: 'Memela', chatino: "Mbele'" },
            { es: 'Miel', chatino: "Kuinyä'" },
            { es: 'Mole', chatino: "Ti'i" },
            { es: 'Pan', chatino: "Chajlya" },
            { es: 'Queso', chatino: "Keshu" },
            { es: 'Tamal', chatino: "Chaja-kuuꞌ" },
            { es: 'Tortilla', chatino: "Chaja" },
            { es: 'Arroz', chatino: "Ru" },
        ]
    },
    arboles: {
        titulo: 'Tipos de árboles',
        tituloChatino: "Lashu'u yaka",
        palabras: [
            { es: 'Aguacatal', chatino: "Yalyisu̱" },
            { es: 'Bonete', chatino: "Yapaya-kishëꞌ" },
            { es: 'Cacahuanano', chatino: "Yataa" },
            { es: 'Cacalotillo', chatino: "Yasöjlyaꞌ" },
            { es: 'Cactus', chatino: "Yatiiꞌ" },
            { es: 'Caoba', chatino: "Yakela'-tsu'" },
            { es: 'Casahuate', chatino: "Yalateꞌ" },
            { es: 'Caulote', chatino: "Yankyuꞌ" },
            { es: 'Ceiba', chatino: "Yantsukuꞌ" },
            { es: 'Chirimoyal', chatino: "Yanchulua" },
            { es: 'Clavellina', chatino: "Yakyetyikyë'" },
            { es: 'Cuachepil', chatino: "Yapitya" },
            { es: 'Cuapinole', chatino: "Yantsúku̱" },
            { es: 'Equimite', chatino: "Yamastyi" },
            { es: 'Espino', chatino: "Yakitseꞌ" },
            { es: 'Frutillo', chatino: "Yanga'a" },
            { es: 'Guajillo', chatino: "Yayatë" },
            { es: 'Guamúchil', chatino: "Yaua'a" },
            { es: 'Higo', chatino: "Yakityi" },
            { es: 'Jícaro', chatino: "Yashika'" },
            { es: 'Limonar', chatino: "Yantsëë-tyieꞌ" },
            { es: 'Mameyal', chatino: "Yakelaꞌ" },
            { es: 'Nacaxtle', chatino: "Yankyitya̱" },
            { es: 'Nanchal', chatino: "Yandachi" },
            { es: 'Naranjal', chatino: "Yantsëë-chinyä" },
        ]
    },
};

const temasGrid = document.getElementById('temas-grid');
const contenidoTema = document.getElementById('contenido-tema');
const temaTitulo = document.getElementById('tema-titulo');
const temaLista = document.getElementById('tema-lista');

document.querySelectorAll('.tema-btn').forEach(function(boton) {
    boton.addEventListener('click', function() {
        const clave = boton.getAttribute('data-tema');
        const tema = temas[clave];

        temaTitulo.innerHTML = `
            <span class="tema-titulo-chatino">${tema.tituloChatino}</span>
            <span class="tema-titulo-espanol">${tema.titulo}</span>
        `;
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