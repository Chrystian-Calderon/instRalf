//obtener un numero aleatorio
function getRamdom(num) {
    return Math.floor(Math.random() * num);
}

//crear cajas de texto , dependiendo cuantas letras tiene cada palabra
function createBoxText(tamano) {
    let cajas = "";
    for (let caja = 0; caja < tamano; caja++) {
        cajas += '<div id="box' + (caja + 1) + '" class="textBox"></div>';
    }
    document.getElementById("caja_palabra").innerHTML = cajas;
}

//creando unas cajas de las letras del abecedario
function mostrarLetras(abecedario) {
    let cajas = "";
    for (let caja = 1; caja < abecedario.length + 1; caja++) {
        if (caja % 9 == 0) {
            cajas += '<span onclick="letraClick(this);" class="textBox">' + abecedario[caja - 1] + '</span><br>';
        } else {
            cajas += '<span onclick="letraClick(this);" class="textBox">' + abecedario[caja - 1] + '</span>';
        }
    }
    document.getElementById("cajas-letras").innerHTML = cajas;
}

//añadiendo letras de las palabras si son correctas
function mostrarResultado(palabra, letra) {
    for (let pos = 0; pos < palabra.length; pos++) {
        if (palabra[pos] == letra) {
            let cajaId = "box" + (pos + 1);
            document.getElementById(cajaId).innerHTML = letra;
        }
    }
}

//texto para intentos
function textIntentos(){
    let text = 5 - error;
    document.getElementById("textIntento").innerHTML = "Intentos: " + text;
}

//verificando si la letra existe en la palabra
function verificarLetra(contenedor, palabra) {
    if (palabra.includes(contenedor.textContent)) {
        mostrarResultado(palabra, contenedor.textContent);
        contenedor.className += " true";
    } else {
        error++;
        dibujoHombre(error);
        textIntentos();
        contenedor.className += " false";
    }
}

//manda el contenedor seleccionado para verificar la letra clickeada
function letraClick(contenedor) {
    verificarLetra(contenedor, posicionPalabras);
}



//diccionario de palabras a adivinar
var palabras = ["MANZANA", "PERA", "FLASH", "AUTO", "FE", "PALMEIRAS", "COMPUTADORA", "ALIEN", "CELULAR", "RESIDENCIA", "DICCIONARIO", "MOTOR", "CABEZA", "CELULAR", "JUEGOS", "PANTALLA", "PLANTAS", "FRUTAS", "COCO", "PADRE"];
var abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var posicionPalabras = palabras[getRamdom(palabras.length)];//obtener una palabra random

var error = 0;//errores de palabra

//creando cajas de texto
createBoxText(posicionPalabras.length);

//creando opciones de letras
mostrarLetras(abecedario);
textIntentos();

var reload = document.getElementById("reload");
reload.addEventListener("click", () => {
    location.reload();
});