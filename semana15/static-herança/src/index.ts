import { User } from "./User";
import { Customer } from "./Customer";
import { Employee } from "./Employee";
import { Seller } from "./Seller";

/* ---------- Exercício 1 ---------- */
// a. Sim, é possível imprimir a senha.
// b. A mensagem foi impressa uma vez.

const MyUser = new User("1", "rmkarato@gmail.com", "Renata", "oioioi")
console.log(MyUser)

/* ---------- Exercício 2 ---------- */
// a. A mensagem "Chamando o construtor da classe Customer" foi impressa uma vez.
// b. A mensagem "Chamando o construtor da classe User" foi impressa duas vezes, pois ela foi chamada na classe User e depois chamada novamente na classe Customer(que é a classe filha do User).

const MyCustomer = new Customer("2", "hellokitty@gmail.com", "Hello Kitty", "gatinha-feliz", "4004 2010 1200 0016")
console.log(MyCustomer)

/* ---------- Exercício 3 ---------- */
// a.

/* ---------- Exercício 4 ---------- */
// public introduceYouserlf(): string {
//     return `Olá, bom dia!`
// }

/* ---------- Exercício 5 ---------- */
console.log(MyCustomer.introduceYouserlf())

/* ---------- Exercício 6 ---------- */
const MyEmployee = new Employee("3", "snoopy@gmail.com", "Snoopy", "123456",new Date(15/10/2019), 1500)
console.log(MyEmployee)

//a. A mensagem foi impressa uma vez.
//b. 
    /* Employee {
    id: '3',
    email: 'snoopy@gmail.com',
    name: 'Snoopy',
    password: '123456',
    admissionDate: 1970-01-01T00:00:00.000Z,
    baseSalary: 1500
    } */

/* ---------- Exercício 7 ---------- */
console.log(`O Salário total do empregado ${MyEmployee.getName()} é de R$${MyEmployee.calculateTotalSalary()}.`)

/* ---------- Exercício 8 ---------- */
//a. Parâmetros passados para o construtor: id, email, name, password, admissionDate, baseSalary;
//b. 
const MySeller = new Seller("4", "mickeymouse@gmail.com", "Mickey Mouse", "disneylandia", new Date(1/1/2020), 2000, 5)
console.log(MySeller)

/* ---------- Exercício 9 ---------- */
console.log(MySeller.setSalesQuantity(7))

/* ---------- Exercício 10 ---------- */
const MySeller2 = new Seller("5", "patoDonald@gmail.com", "Pato Donald", "patoAquiPatoAcola", new Date(10/4/2020), 1200, 10)
console.log(`O salário total do vendedor ${MySeller2.getName()} é de R$${MySeller2.calculateTotalSalary()}.`)

/* ---------- Exercício 11 ---------- */
// Employee.BENEFIT_VALUE
// Seller.SELLING_COMMISSION