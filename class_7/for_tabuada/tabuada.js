function gerarTabuada(){
    let numero = parseInt(document.getElementById('numero').value);
    let resultadoElement = document.getElementById('resultado'); 

    if (isNaN(numero)){
        resultadoElement.textContent = "Por favor, insira um número válido."; 
        return; 
    }

    let tabuada = `<h2>Tabuada do ${numero}</h2>`; 
    for(let i = 1; i<=10; i++){
        //tabuada += `$`
        tabuada += `<p>${numero} x ${i} = ${numero*i}</p>`; 
    }

    resultadoElement.innerHTML = tabuada; 
}