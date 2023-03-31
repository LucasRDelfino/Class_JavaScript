function alerta() {
alert ("Hello World")
console.log("TESTANDO")
}

function nome(){
const nome = prompt("Qual o seu nome")
alert("Olá " + nome)
}

function dobro(){
const num = prompt("Número:" )
const dobro = num * 2 
alert("O dobro é " + dobro)
}

function soma() {
   const num1 = Number(prompt("1º Número :    "))
   const num2 = Number(prompt("2 Número :    "))
   const soma = num1 + num2
   alert(`A soma é ${soma}`)
}



dobro()