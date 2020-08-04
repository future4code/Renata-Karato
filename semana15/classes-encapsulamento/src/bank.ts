import moment from "moment";

import { UserAccount } from "./UserAccount";
import { JSONFileManager } from "./JSONFileManager";

export class Bank {
    private accounts: UserAccount[] = []
    private fileManager: JSONFileManager = new JSONFileManager("./data.json")

    constructor() {
        const fileData: any = this.fileManager.readDatabase()
        this.accounts = fileData.map((item : any) => {
            return new UserAccount(
                item.name,
                item.cpf,
                item.birthday,
                item.balance,
                item.operations
            )}
        )
    }
   
    createAccount (name: string, cpf:string, birthday:string) : void {
        const duplicateCpf: UserAccount | undefined = this.accounts.find((account) => {
            return account.getCPF() === cpf }
        )
            
        if (duplicateCpf) {
            throw new Error ("CPF informado já possui uma conta cadastrada.")
        }

        const birthdayDateAsObject = moment(birthday, "DD/MM/YYYY")
        const age = moment().diff(birthdayDateAsObject, "years")

        if (age < 18) {
            throw new Error("Usuário deve ter mais de 18 anos.")
        }

        this.accounts.push(
            new UserAccount (name, cpf, birthday)
        )

        this.fileManager.writeToDatabase(this.accounts)
    }

    getBalance(name: string, cpf: string) : number {
        const userAccount: UserAccount | undefined = this.accounts.find((account) => {
            return account.getCPF() === cpf && account.getName() === name }
        )

        if (userAccount) {
            return userAccount.getBalance()
        } else {
            throw new Error("Usuário não encontrado.")
        }
    }
}