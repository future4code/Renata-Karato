import moment from "moment";
import Transactions from "./transactions";

moment.locale("pt-br");

export default class userAccount {
    private name: string;
    private CPF: number;
    private birthday: moment.Moment
    private balance: number = 0;
    // private operations: Transactions[];

    constructor(
        name: string,
        CPF: number,
        birthday: moment.Moment,
    ) {
        this.name = name
        this.CPF = CPF
        this.birthday = birthday
    }

    public getName() : string {
        return this.name
    }

    public getCPF(): number {
        return this.CPF
    }

    public getBirthday(): moment.Moment {
        return this.birthday
    }

    // public getBalance(): number {
        
    // }

    // public addBalance (value: number) : void {
    //     console.log("Saldo atualizado com sucesso!")
    // }
}