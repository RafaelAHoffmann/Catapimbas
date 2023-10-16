function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla').onclick = tocaSom('#som_tecla_');

let contador = 0;

while (contador < listaDeTeclas.length) {
    
    listaDeTeclas[contador].onclick = tocaSomPom
    
    contador += 1
    
}
