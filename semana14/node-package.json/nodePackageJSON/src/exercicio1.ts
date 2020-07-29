/* Exercício 1.a. */

//Para acessar os parâmetros passados na linha de comando damos:
//console.log(process.argv)
//O retorno é um array com os dois primeiros parâmetros preenchidos:

/* [
    'C:\\Program Files\\nodejs\\node.exe',
    'D:\\LABENU\\Renata-Karato\\semana14\\node-package.json\\nodePackageJSON\\build\\exercicio1.js'
  ] */


/* Exercício 1.b. */

const nome: string = process.argv[2]
const age: number = Number(process.argv[3])

console.log("\x1b[31m",`Olá, ${nome}! Você tem ${age} anos.`)

/* Exercício 1.c. */
console.log("\x1b[35m",`Olá, ${nome}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.`)