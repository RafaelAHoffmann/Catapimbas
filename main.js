function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla').onclick = tocaSom('#som_tecla_');

let contador = 0;

while (contador < listaDeTeclas.length) {
    
    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_splash');
    };
    
    contador += 1
    
}

const instrumento = listaDeTeclas[contador].classList[1];

console.log(instrumento);
