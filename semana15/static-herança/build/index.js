"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Customer_1 = require("./Customer");
const MyUser = new User_1.User("1", "rmkarato@gmail.com", "Renata", "oioioi");
console.log(MyUser);
/* ---------- Exercício 1 ---------- */
// a. Sim, é possível imprimir a senha.
// b. A mensagem foi impressa uma vez.
const MyCustomer = new Customer_1.Customer("1", "rmkarato@gmail.com", "Renata", "oioioi", "4004 2010 1200 0016");
console.log(MyCustomer);
/* ---------- Exercício 2 ---------- */
// a. A mensagem "Chamando o construtor da classe Customer" foi impressa uma vez.
// b. A mensagem "Chamando o construtor da classe User" foi impressa duas vezes, pois ela foi chamada na classe User e depois chamada novamente na classe Customer(que é a classe filha do User).
/* ---------- Exercício 3 ---------- */
// a.
/* ---------- Exercício 4 ---------- */
