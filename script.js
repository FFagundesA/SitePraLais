function ask() {
    let comoTa = prompt("Oiiiii minha lindaaa como você tá?");

    if (comoTa === null) {
        function ask2() {
            comoTa = prompt("Oiiiii minha lindaaa como você tá?");
            let comoTaMin = comoTa.toLocaleLowerCase();
    
            if (/otima|bem|ótima/.test(comoTaMin)) {
                alert("Aiii que bommm meu amooorr");
                alert("O que vc fezz nesse meio tempooo meu amooorr? Diga três coisinhaass uma por uma, apertando enter dps de cada umaaaa")
                
                let lista = [];
                let n = 1;
                
                while (lista.length < 3) {
                    lista.push(prompt('Coisa '+n+';'));
                    n = n+1;
                }
                
                let listaU = document.getElementById("lista");
                
                lista.forEach(function(Coisa) {
                let li = document.createElement('li');
                li.textContent = Coisa;
                listaU.appendChild(li);
                });
                
                let orgTxt = document.getElementById(`orgTxt`);
                orgTxt.style.display = `block`;
                
                let h2 = document.getElementById(`h2`);
                h2.style.display = `block`;
            } else {
                alert(`pqqqqqq amoriznhoooo (me conta no whats)`);
                alert("O que vc fezz nesse meio tempooo meu amooorr? Diga três coisinhaass uma por uma, apertando enter dps de cada umaaaa")
                
                let lista = [];
                let n = 1;
                
                while (lista.length < 3) {
                    lista.push(prompt('Coisa '+n+';'));
                    n = n+1;
                }
                
                let listaU = document.getElementById("lista");
                
                lista.forEach(function(Coisa) {
                    let li = document.createElement('li');
                    li.textContent = Coisa;
                    listaU.appendChild(li);
                });
                
                let orgTxt = document.getElementById(`orgTxt`);
                orgTxt.style.display = `block`;
                
                let h2 = document.getElementById(`h2`);
                h2.style.display = `block`;
            }
        }

        setTimeout(ask2, 2000);
    }

    let comoTaMin = comoTa.toLocaleLowerCase();
    
    if (/otima|bem|ótima/.test(comoTaMin)) {
        alert("Aiii que bommm meu amooorr");
        alert("O que vc fezz nesse meio tempooo meu amooorr? Diga três coisinhaass uma por uma, apertando enter dps de cada umaaaa")
                
        let lista = [];
        let n = 1;
                
        while (lista.length < 3) {
            lista.push(prompt('Coisa '+n+';'));
            n = n+1;
        }
                
        let listaU = document.getElementById("lista");
                
        lista.forEach(function(Coisa) {
            let li = document.createElement('li');
            li.textContent = Coisa;
            listaU.appendChild(li);
        });
                
        let orgTxt = document.getElementById(`orgTxt`);
        orgTxt.style.display = `block`;
                
        let h2 = document.getElementById(`h2`);
        h2.style.display = `block`;
    } else {
        alert(`pqqqqqq amoriznhoooo (me conta no whats)`);
        alert("O que vc fezz nesse meio tempooo meu amooorr? Diga três coisinhaass uma por uma, apertando enter dps de cada umaaaa")
                
        let lista = [];
        let n = 1;
                
        while (lista.length < 3) {
            lista.push(prompt('Coisa '+n+';'));
            n = n+1;
        }
                
        let listaU = document.getElementById("lista");
                
        lista.forEach(function(Coisa) {
            let li = document.createElement('li');
            li.textContent = Coisa;
            listaU.appendChild(li);
        });
                
        let orgTxt = document.getElementById(`orgTxt`);
        orgTxt.style.display = `block`;
                
        let h2 = document.getElementById(`h2`);
        h2.style.display = `block`;
    }
}

setTimeout(ask, 7000);

let listaK = [];
function kissMe() {
    window.location.href = 'kissMe.html';
}

document.addEventListener('keydown', function(event) {
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
