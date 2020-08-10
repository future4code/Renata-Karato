import { Client } from "./Client";

export class ClientManager {
 private clients: Client[] = []

 public registerClient(client: Client): void {
     this.clients.push(client)
 }

 public getClientsQuantity(): number {
     return this.clients.length
 }

 public calculateBillOfClient(registrationNumber: number): number {
     const foundClient = this.clients.find((client) => {
         return client.registrationNumber === registrationNumber
     })

     if (foundClient) {
         return foundClient.calculateBill()
     }
     return 0
 }

 public calculateTotalIncome(): number {
     let total: number = 0
     this.clients.forEach((client) => {
         total += client.calculateBill()
     })
     return total
 }

 public deleteUser(registrationNumber: number): void {
     let registrationIndex = undefined;

     for (let i=0; i<this.clients.length; i++) {
         if(this.clients[i].registrationNumber === registrationNumber) {
             registrationIndex = i;
         }
     }

     if (registrationIndex !== undefined) {
         this.clients.splice(registrationIndex, 1)
         console.log("Registro de cliente apagado com sucesso!")
     }

     if (registrationIndex === undefined) {
        console.log("Ocorreu um erro ao apagar registro.")
    }
 }

 public printClients(): void {
     this.clients.forEach((client) => {
         console.log(`
            NOME: ${client.name} - NÚMERO DE REGISTRO: ${client.registrationNumber} - CONSUMO: ${client.consumedEnergy}kW - VALOR: R$${client.calculateBill()}
         `)
     })
 }
}