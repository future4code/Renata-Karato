// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1
//O código abaixo serve para testar se um número é par ou ímpar
const respostaDoUsuario = prompt("Digite o número que você quer testar.") //usuário digita um número que gostaria de testar
const numero = Number(respostaDoUsuario) //a const é transformada em uma variável do tipo number
//as tagas if/else permitem fazer uma condicional
if(numero % 2 === 0) { //se a divisão do número dado pelo usuário por 2 tiver resto 0, então...
  console.log("Passou no teste.") //a mensagem que será dada é essa
} else {
  console.log("Não passou no teste.") //se o resto não for igual a 0, então a mensagem será essa
}

// EXERCÍCIO 2
let fruta = prompt("Escolha uma fruta") //usuário digita uma fruta
let preco //o preço varia de acordo com a fruta escolhida
switch (fruta) { //switch é utilizado no lugar de if/else if e serve para simplificar o código
  case "Laranja": //case é a condição, neste caso, se o usuário escolher a fruta Laranja...
    preco = 3.5 //este será o valor impresso no terminal
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default: //caso o usuário escolha uma fruta fora das opções acima, será usado o preço dado no default
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//2.a. O código acima serve para descobrir o preço de frutas
//2.b. "O preço da fruta Maçã é R$2.25".
//2.c. 2 laranjas - 2 x R$3.50 = R$7.00 / 1 maçã - R$2.25 / 3 bananas - 3 x R$5.00 = R$15.00 / 1 uva - R$0.30 / VALOR TOTAL - R$15.30
//2.d. Se retiramos o break, o valor da Pêra será considerado o do default. O break serve para interromper uma instrução, então se não é colocado, ele pega a instrução abaixo dele.

// EXERCÍCIO 3

//Ao rodar este código com os números digitados, dará a seguinte mensagem no terminal: "Uncaught ReferenceError: mensagem is not defined"
//Houve um erro, pois cada trecho do código que está ebtre chaves {} é considerado um bloco. Como cada bloco possui seu próprio escopo, não é possível o acesso de variáveis entre eles.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 4.a.

const resposta1 = prompt("Digite o primeiro número.")
const resposta2 = prompt("Digite o segundo número.")

const num1 = Number(resposta1)
const num2 = Number(resposta2)

if(num1>num2) {
    console.log (num1, num2)
} else if (num2>num1) {
    console.log (num2, num1)
}
//se os dois números forem iguais, o programa não imprime nada;

// EXERCÍCIO 4.b.

const resposta1 = prompt("Digite o primeiro número.")
const resposta2 = prompt("Digite o segundo número.")
const resposta3 = prompt("Digite o terceiro número.")

const num1 = Number(resposta1)
const num2 = Number(resposta2)
const num3 = Number(resposta3)

if((num1>num2 && num1>num3) && (num2>num3)) {
    console.log (num1, num2, num3)
} else if ((num1>num2 && num1>num3) && (num3>num2)) {
    console.log (num1, num3, num2)
} else if ((num2>num1 && num2>num3) && (num1>num3)){
    console.log (num2, num1, num3)
} else if ((num2>num1 && num2>num3) && (num3>num1)) {
    console.log (num2, num1, num3)
} else if ((num3>num1 && num3>num2) && (num1>num2)) {
    console.log (num3, num1, num2)
} else if ((num3>num1 && num3>num2) && (num2>num1)) {
    console.log (num3, num2, num1)
}
//se os três números forem iguais, o programa não imprime nada;

// EXERCÍCIO 4.c.

const resposta1 = prompt("Digite o primeiro número.")
const resposta2 = prompt("Digite o segundo número.")
const resposta3 = prompt("Digite o terceiro número.")

const num1 = Number(resposta1)
const num2 = Number(resposta2)
const num3 = Number(resposta3)

if (num1 === num2 && num1 === num3 && num2 === num3) {
    console.log ("Insira ao menos um número diferente.") //alerta de que o usuário escreveu numeros iguais
} else if ((num1>num2 && num1>num3) && (num2>num3)) {
    console.log (num1, num2, num3)
} else if ((num1>num2 && num1>num3) && (num3>num2)) {
    console.log (num1, num3, num2)
} else if ((num2>num1 && num2>num3) && (num1>num3)){
    console.log (num2, num1, num3)
} else if ((num2>num1 && num2>num3) && (num3>num1)) {
    console.log (num2, num1, num3)
} else if ((num3>num1 && num3>num2) && (num1>num2)) {
    console.log (num3, num1, num2)
} else if ((num3>num1 && num3>num2) && (num2>num1)) {
    console.log (num3, num2, num1)
}

// EXERCÍCIO 5.a.
//https://drive.google.com/file/d/19sUqtqF7YpYceTpaSWXeXTLg3J6Dpvy2/view?usp=sharing

// EXERCÍCIO 5.b.

const quest1 = prompt ("Possui ossos?")
const quest2 = prompt ("Tem pelos?")
const quest3 = prompt ("É racional?")
const quest4 = prompt ("Possui penas?")
const quest5 = prompt ("É terrestre?")
const quest6 = prompt ("Vive em ambiente aquático?")

if (quest1 === "Não") {
    console.log ("É um invertebrado!")
} else if (quest1 && quest2 && quest3 === "Sim") {
    console.log ("É um ser humano")
} else if (quest1 && quest2 === "Sim" && quest3 === "Não") {
    console.log ("É um mamífero não humano!")
} else if (quest1 && quest4 === "Sim" && quest2 === "Não") {
    console.log ("É uma ave!")
} else if (quest1 === "Sim" && quest2 && quest4 && quest5 === "Não") {
    console.log ("É um peixe!")
} else if (quest1 && quest5 && quest6 === "Sim" && quest2 && quest4 === "Não") {
    console.log ("É um anfíbio!")
} else if (quest1 && quest5 === "Sim" && quest2 && quest4 && quest6 === "Não") {
    console.log ("É um réptil!")
} else {
    console.log ("A classificação é desconhecida!")
}