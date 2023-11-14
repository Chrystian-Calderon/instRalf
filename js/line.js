const groupLine = document.getElementById('group-line');
let random = number => Math.floor(Math.random() * number);
let cont_ = 0;
let posY = ['100px', '200px', '400px', '500px', '600px', '800px'];

document.addEventListener('DOMContentLoaded', () => {
    function posRandom() {
        if (cont_ < 3) {
            groupLine.style.display = "flex";
            groupLine.style.top = posY[random(posY.length)];

            setTimeout(() => {
                groupLine.style.display = "none";
                setTimeout(posRandom, 150);
            }, 150);
            cont_++;
        } else {
            cont_ = 0;
            setTimeout(() => {
                posRandom();
            }, 10000);
        }
    }

    posRandom();
});