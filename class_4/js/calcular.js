function calcular(){
  let formulario = document.getElementById("formulario");
  console.log(formulario)
  let valor01 = parseFloat(formulario.elements.vl01.value);
  let valor02 = parseFloat(formulario.elements.vl02.value);
  let calcular = valor01 === valor02;
  formulario.elements.resultado.value = calcular;
}
