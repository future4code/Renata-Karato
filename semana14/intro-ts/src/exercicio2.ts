// Exercício 2.a.
//A função tem como entrada um array de números e a saída são dados estatisticos do maior, menor e a media do array

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
};

// Exercício 2.b.
type dadosEstatisticas = {
    maior: number;
    menor: number;
    media: number;
};

// Exercício 2.c.
type amostraDeIdades = {
    numeros: number[];
    obterEstatisticas: () => dadosEstatisticas;
};


