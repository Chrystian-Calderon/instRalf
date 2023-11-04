const blockLogo = document.getElementById("logo");
let windowX = window.innerWidth;
let windowY = window.innerHeight;
let blockX = blockLogo.clientWidth;
let blockY = blockLogo.clientHeight;
let posX = windowX/2, posY = windowY/2;
let dx = 2, dy = -2;

let parametros = '0123456789ABCDEF';
let color, newColor;

function colorRandom(){
    color = '#';
    let numRandom;
    for(let i = 0; i < 6; i++){
        numRandom = Math.floor(Math.random() * parametros.length);
        color += parametros[numRandom];
    }
    return color;
}

function rebote(){
    blockLogo.style.left = posX + "px";
    blockLogo.style.top = posY + "px";
    blockLogo.style.color = newColor;
    if(posX + dx > windowX - blockX || posX + dx < 0){
        newColor = colorRandom();
        dx = -dx;
    }
    if(posY + dy > windowY - blockY || posY + dy < 0){
        newColor = colorRandom();
        dy = -dy;
    }
    posX += dx;
    posY += dy;
}

setInterval(rebote, 20);