import { Bank } from "./Bank";
import { UserAccount } from "./UserAccount";
import { Transaction } from "./Transaction";

const bank: Bank = new Bank()

const action: string = process.argv[2]

switch (action) {
    case "createAccount":
        bank.createAccount(
            process.argv[3],
            process.argv[4],
            process.argv[5]
        )
        console.log("Conta criada com sucesso!")
        break;
    case "getBalance":
        console.log(
            bank.getBalance(
                process.argv[3],
                process.argv[4],
            )
        )

    default:
        break;
}