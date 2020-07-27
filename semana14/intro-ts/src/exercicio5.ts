type operacoes = {
    soma: number,
    subtracao: number,
    multiplicacao: number,
    maiorNumero: number
}

function resultadoOperacoes (a: number, b:number) {
    const resultado: operacoes = {
        soma: a + b,
        subtracao: a - b,
        multiplicacao: a * b,
        maiorNumero: a > b ? a : b
    };
    return resultado;
}

console.log(resultadoOperacoes(2,3))

// retorno:
//{ soma: 5, subtracao: -1, multiplicacao: 6, maiorNumero: 3 }