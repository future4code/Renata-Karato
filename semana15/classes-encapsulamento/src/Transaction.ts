import moment from "moment";

moment.locale("pt-br");

export class Transaction {
    private value: number;
    private date: string = moment().format("DD/MM/YYYY")
    private description: string;

    constructor(
        value: number,
        date: string,
        description: string
    ) {
        this.value = value;
        this.date = date;
        this.description = description;
    }

    getValue = () => this.value
    getDate = () => this.date
    getDescription = () => this.description
}