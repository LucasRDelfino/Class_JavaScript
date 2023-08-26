let numeroAleatorio = Math.floor(Math.random() * 10);
let tentativas = 0; 

function verificarChute(){
    let chuteElement = document.getElementById('chute'); 
    let adivinhacao = parseInt(chuteElement.value);
    let resultadoElement = document.getElementById('resultado');

    tentativas ++; 

    if(adivinhacao === numeroAleatorio){
        resultadoElement. textContent = `Parabens, Acertou após ${tentativas} tentativas`; 
        resultadoElement.style.color = "green"; 
        desabilitarEntrada();
    }else{ 
        resultadoElement.textContent = "Continue Tentando...";
        resultadoElement.style.color = "Red"; 
    }
}

function desistir(){
    let resultadoElement = document.getElementById('resultado'); 
    resultadoElement.textContent = `Desisto! O Número correto era ${numeroAleatorio}`;
    resultadoElement.style.color = "Blue";

}

function desabilitarEntrada(){
    document.getElementById('chute').disabled = true;
    document.querySelectorAll('button').forEach(btn => btn.disabled = true);  
}