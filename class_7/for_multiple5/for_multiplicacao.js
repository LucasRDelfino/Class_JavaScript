function encontrarMultiplos(){
    let inicio = parseInt(document.getElementById('inicio').value);
    let fim = parseInt(document.getElementById('fim').value);
    let resultadoElement = document.getElementById('resultado');
    let multiplos = []; 

    for (let i = inicio; i <=fim; i++){
        if (i % 5 === 0){
            multiplos.push(i);
        }
    }

    if (multiplos.length > 0){
        resultadoElement.textContent = `Mútiplos de 5 entre ${inicio} e ${fim}: ${multiplos.join(', ')}.`;
    }else{
        resultadoElement.textContent = `Não Há múltiplos de 5 entre ${inicio} e ${fim}.`;
    }
}