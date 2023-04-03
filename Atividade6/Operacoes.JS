function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let produto = num1 * num2;
    let divisao = num1 / num2;
    let resto = num1 % num2;

    document.getElementById("soma").innerHTML = "A soma de " + num1 + " e " + num2 + " é: " + soma;
    document.getElementById("subtracao").innerHTML = "A subtração de " + num1 + " pelo " + num2 + " é: " + subtracao;
    document.getElementById("produto").innerHTML = "O produto de " + num1 + " e " + num2 + " é: " + produto;
    document.getElementById("divisao").innerHTML = "A divisão de " + num1 + " pelo " + num2 + " é: " + divisao;
    document.getElementById("resto").innerHTML = "O resto da divisão de " + num1 + " pelo " + num2 + " é: " + resto;
}