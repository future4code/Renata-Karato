"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arthur = exports.lucila = exports.lucas = exports.renata = void 0;
const minhaString = "bom dia";
const meuNumero = 8;
const meuNumero2 = 8;
exports.renata = {
    nome: "Renata",
    idade: 31,
    corFavorita: "azul"
};
exports.lucas = {
    nome: "Lucas",
    idade: 32,
    corFavorita: "preto"
};
exports.lucila = {
    nome: "Lucila",
    idade: 30,
    corFavorita: "rosa"
};
var ARCOIRIS;
(function (ARCOIRIS) {
    ARCOIRIS["VERMELHO"] = "vermelho";
    ARCOIRIS["LARANJA"] = "laranja";
    ARCOIRIS["AMARELO"] = "amarelo";
    ARCOIRIS["VERDE"] = "verde";
    ARCOIRIS["AZUL"] = "azul";
    ARCOIRIS["CIANO"] = "ciano";
    ARCOIRIS["VIOLETA"] = "violeta";
})(ARCOIRIS || (ARCOIRIS = {}));
exports.arthur = {
    nome: "Arthur",
    idade: 3,
    corFavorita: ARCOIRIS.VERMELHO
};
const arrayDePessoas = [exports.renata, exports.lucas, exports.lucila, exports.arthur];
console.log(arrayDePessoas);
//# sourceMappingURL=exercicio1.js.map