import { Client } from "./Client";
import { Residence } from "./Residence";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";
import { ClientManager } from "./ClientManager";
import { ResidentialClient } from "./ResidentialClient";
import { CommercialClient } from "./CommercialClient";
import { IndustrialClient } from "./IndustrialClient";
import { Console } from "console";

 /* ---------- EXERCÍCIO 1 ---------- */

// const client: Client = {
//   name: "Renata",
//   registrationNumber: 1,
//   consumedEnergy: 100,

//   calculateBill: () => {
//     return 2;
//   }
// }

// console.log(client)
// console.log(client.calculateBill())

// a. As propriedades impressas foram name, registrationNumber e consumedEnergy. CalculateBill não retorna um número, porque é uma função e precisa ser chamada com console.log(client.calculateBill())

/* ---------- EXERCÍCIO 2 ---------- */

// const place: Place = new Place("09560530")

// a. JS retorna um erro dizendo que não é possivel criar uma instância de uma classe abstrata.
// b. Precisaríamos criar uma nova classe estendendo a classe Place e assim conseguiríamos criar uma instância

/* ---------- EXERCÍCIO 3 ---------- */

// const residence: Residence = new Residence(4, "09560530")
// const commerce: Commerce = new Commerce(3, "015050000")
// const industry: Industry = new Industry(10, "01228200")
// console.log(residence)
// console.log(commerce)
// console.log(industry)

/* ---------- EXERCÍCIO 4 ---------- */

// a. Ver arquivo ResidentialClient.ts

/* ---------- EXERCÍCIO 5 ---------- */

// a. As semelhanças é que tanto o ResidentialClient como o CommercialClient possuem name, registrationNumber, consumedEnergy e cep
// b. As diferenças é q a taxa do calculateBill é diferenciada e o floorQuantity que existe somente no CommercialClient, enquanto o exclusivo do ResidentialClient é o residentsQuantity.

/* ---------- EXERCÍCIO 6 ---------- */

// a. A classe IndustrialCliente é filha da Industry
// b. IndustrialClient implementa a interface Client

/* ---------- EXERCÍCIO 7 ---------- */

// Ver arquivo ClientManager.ts

/* ---------- EXERCÍCIO 8 ---------- */
const clientManager = new ClientManager

const residentialClient = new ResidentialClient("Renata Karato", 10, 100, "36137662802", 4, "09560530")
clientManager.registerClient(residentialClient)

const commercialClient = new CommercialClient("Padaria Samara", 1001, 1000, "053054222000198", 5, "01505000" )
clientManager.registerClient(commercialClient)

const industrialClient = new IndustrialClient("General Motos", 2001, 10000, "C22235", 50, "01228200")
clientManager.registerClient(industrialClient)

console.log(`O valor da conta a ser paga é de R$${clientManager.calculateBillOfClient(10)}.`)

console.log(`O valor total recebido pela concessionária é de R$${clientManager.calculateTotalIncome()}.`)

//console.log(clientManager.deleteUser(2001))

/* ---------- DESAFIOS ---------- */

// 1. imprimir todos os clientes 
console.log(clientManager.printClients())

// 2.
