import moment from "moment";
import { Transaction } from "./Transaction";

moment.locale("pt-br");

export class UserAccount {
    constructor(
        private name: string,
        private CPF: string,
        private birthday: string,
        private balance: number = 0,
        private operations: Transaction[] = []

    ) {
        this.name = name
        this.CPF = CPF
        this.birthday = birthday
        this.balance = balance
        this.operations = operations
    }

    getName = () => this.name
    getCPF = () => this.CPF
    getBirthday = () => this.birthday
    getBalance = () => this.balance
    getOperations = () => this.operations

    // public getBalance(): number {
        
    // }

    // public addBalance (value: number) : void {
    //     console.log("Saldo atualizado com sucesso!")
    // }
}