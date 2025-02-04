let voltar = document.getElementById('voltar');

voltar.addEventListener('click', function() {
    window.location.href = "jogo.html";
});

let listaK = [];
function kissMe() {
    window.location.href = 'kissMe.html';
}

document.addEventListener('keydown', function (event) {
    let tecla = event.key;
    let teclaFormat = tecla.toLowerCase();

    listaK.push(teclaFormat);

    if (/kissme/.test(listaK.join(''))) {
        kissMe();
    }
});

function coletar() {
    let input = document.getElementById('kissMe').value;
    let inputFormat = input.replace(/\s+/g, "").toLowerCase()
    if (/kissme/.test(inputFormat)) {
        kissMe();
    }
}

let enviarBtn = document.getElementById("enviar");
enviarBtn.addEventListener('click', coletar);