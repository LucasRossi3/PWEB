
numMat = 3;
var numero = new Array(3);

for(var i = 0; i < numMat; i++)
    numero[i] = parseInt(prompt("Digite o número " + (i + 1)));

function maiorNum(numero)
{
    var max = 0;

    for(i = 0; i < numMat; i++)
    {
        if(numero[i] > max)
            max = numero[i];
    }

    return max;
}

function ordenarCresc(numero)
{
    n = n.sort(function(a, b){ return a - b; } );
    return numero;
}

document.write("O maior número é: " + maiorNum(numero) + "<br>");
document.write("Os três ordenados são: " + ordenarCresc(numero) + "<br>");
