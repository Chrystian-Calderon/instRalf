var pantalla = document.getElementById("pantalla");
var pincel = pantalla.getContext("2d");

pincel.strokeStyle = "000";
pincel.moveTo(10, 190);
pincel.lineTo(40, 190);
pincel.moveTo(25, 190);
pincel.lineTo(25, 20);
pincel.lineTo(100, 20);
pincel.lineTo(100, 50);
pincel.moveTo(120, 70);
pincel.arc(100, 70, 20, 0, 180);
pincel.stroke();

function gameOver() {
    let game = document.getElementById("game");
    game.className += " loser";
}

function dibujoHombre(error) {
    switch (error) {
        case 1:
            pincel.moveTo(100, 90);
            pincel.lineTo(100, 150);
            break;
        case 2:
            pincel.lineTo(110, 180);
            break;
        case 3:
            pincel.moveTo(100, 150);
            pincel.lineTo(90, 180);
            break;
        case 4:
            pincel.moveTo(100, 100);
            pincel.lineTo(110, 130);
            break;
        default:
            pincel.moveTo(100, 100);
            pincel.lineTo(90, 130);
            let panel = document.getElementById("panel");
            let boton = document.getElementById("reload");
            panel.className += "panel";
            boton.className += "boton";
            gameOver();
            break;
    }
    pincel.stroke();
}