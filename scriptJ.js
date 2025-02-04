let lais = document.getElementById('lais');
let eu = document.getElementById('eu');
let posX = lais.getBoundingClientRect().x;
let posY = lais.getBoundingClientRect().y;
let speed = 20;
let celSpeed = 5;
let upPos;
let check = setInterval(() => {
    let laisPos = lais.getBoundingClientRect();
    let euPos = eu.getBoundingClientRect();

    if ((Math.abs(laisPos.left - euPos.left) < 90) && (Math.abs(laisPos.top - euPos.top) < 90)) {
        clearInterval(upC);
        clearInterval(upB);
        clearInterval(upE);
        clearInterval(upD);
        clearInterval(check);
        clearInterval(upPos);
        window.location.href = "kiss.html";
    }
});

document.getElementById("felipe").addEventListener('click', () => {
    lais = document.getElementById('eu');
    eu = document.getElementById('lais');
    posX = lais.getBoundingClientRect().x
    posY = lais.getBoundingClientRect().y;
});

document.getElementById('jLais').addEventListener("click", () => {
    lais = document.getElementById('lais');
    eu = document.getElementById('eu');
    posX = lais.getBoundingClientRect().x;
    posY = lais.getBoundingClientRect().y;
});

function kissMe() {
    window.location.href = "kissMe.html";
}

document.addEventListener('keydown', (event) => {
    const tecla = event.key;

    if (tecla === 'ArrowUp') {
        posY -= speed;
    } else if (tecla === 'ArrowDown') {
        posY += speed;
    } else if (tecla === 'ArrowLeft') {
        posX -= speed;
    } else if (tecla === 'ArrowRight') {
        posX += speed;
    } else if (event.key === '1') {
        speed = 20;
    } else if (event.key === '2') {
        speed = 60;
    }

    lais.style.left = `${posX}px`;
    lais.style.top = `${posY}px`;
});


document.getElementById('voltar').addEventListener('click', () => {
    window.location.href = "index.html";
});

let celPosY = lais.getBoundingClientRect().y;
let celPosX = lais.getBoundingClientRect().x;

function updateY() {
    lais.style.top = `${celPosY}%`;
}

function updateX() {
    lais.style.left = `${celPosX}%`;
}

document.getElementById("auto").addEventListener('click', () => {
    upPos = setInterval(() => {
        updateY();
        updateX();
        celPosY = celPosY + 0.2;
        celPosX = celPosX + 0.2;
    });
});

let listaK = [];

document.addEventListener('keydown', (event) => {
    let tecla = event.key;
    let teclaFormat = tecla.toLowerCase();

    listaK.push(teclaFormat);

    if (/kissme/.test(listaK.join(''))) {
        kissMe();
    }
});

document.getElementById("enviar").addEventListener('click', () => {
    let input = document.getElementById('kissMe').value;
    let inputFormat = input.replace(/\s+/g, "").toLowerCase()
    if (/kissme/.test(inputFormat)) {
        kissMe();
    }
});

let cima = document.getElementById("cima");
let baixo = document.getElementById("baixo");
let esquerda = document.getElementById("esquerda");
let direita = document.getElementById("direita");

let upC;
let upB;
let upE;
let upD;


function updateC() {
    posY -= celSpeed;
    lais.style.top = `${posY}px`;
}

function updateB() {
    posY += celSpeed;
    lais.style.top = `${posY}px`;
}

function updateE() {
    posX -= celSpeed;
    lais.style.left = `${posX}px`;
}

function updateD() {
    posX += celSpeed;
    lais.style.left = `${posX}px`;
}

cima.addEventListener('touchstart', () => {
    upC = setInterval(updateC);
});

cima.addEventListener('touchend', () => {
    clearInterval(upC);
});

baixo.addEventListener('touchstart', () => {
    upB = setInterval(updateB);
});

baixo.addEventListener('touchend', () => {
    clearInterval(upB);
});

esquerda.addEventListener('touchstart', () => {
    upE = setInterval(updateE);
});

esquerda.addEventListener('touchend', () => {
    clearInterval(upE);
});

direita.addEventListener('touchstart', () => {
    upD = setInterval(updateD);
});

direita.addEventListener('touchend', () => {
    clearInterval(upD);
});
