numMat = 3;
var numero = new Array(numMat);

numero[0] = parseInt(prompt("Digite o número " + "1"));
numero[1] = parseInt(prompt("Digite o número " + "2"));
numero[2] = parseInt(prompt("Digite o número " + "3"));

function maiorNum(numero) {
  var max = 0;

  for (i = 0; i < numMat; i++) {
    if (numero[i] > max) max = numero[i];
  }

  return max;
}

function ordenarCresc(numero) {
  numero = numero.sort(function (a, b) {
    return a - b;
  });
  return numero;
}

document.write("O maior número é: " + maiorNum(numero) + "<br>");
document.write("Os três ordenados são: " + ordenarCresc(numero) + "<br>");
