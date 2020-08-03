import moment from "moment";

import UserAccount from "./userAccount";
import { JSONFileManager } from "./JSONFileManager";

export default class bank {
 private accounts: UserAccount[]
 private fileManager: JSONFileManager

constructor(
    accounts: UserAccount[],
    fileManager: JSONFileManager
) {
    this.accounts = accounts
    this.fileManager = fileManager
}

public createAccount (userAccount: UserAccount) : void {
    
    const newAccount : UserAccount = new UserAccount (
        userAccount.getName(), userAccount.getCPF(), userAccount.getBirthday()
    )

    const data :JSONFileManager = new JSONFileManager("./data.json")
    const allAccounts: any = this.fileManager.readDatabase()

    const today: moment.Moment = moment()
    const checkAge = today.diff(userAccount.getBirthday(), "years")

    if(!userAccount.getName() || !userAccount.getCPF() || !userAccount.getBirthday()) {
        console.log("Necessário preencher todos os campos!");
    } 

    for (let client of this.accounts) {
        if (client.getCPF() === userAccount.getCPF()) {
            console.log("CPF já cadastrado!")
        }
    }
    
    if (checkAge < 18) {
        console.log("Cliente precisa ter mais de 18 anos para criar uma conta.")
    } 
    
    if(userAccount.getName && userAccount.getCPF && userAccount.getBirthday) {
        allAccounts.push(newAccount);
        data.writeToDatabase(allAccounts)
    }
}

//  public getAllAcounts() : UserAccount[] {

//  }

//  public getAccountByNameAndCPF(name: string, cpf: number) : UserAccount | undefined {

//  }
}