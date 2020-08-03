import moment from "moment";

moment.locale("pt-br");

export default class Transactions {
    private value: number;
    private date: moment.Moment;
    private description: string;

    constructor(
        value: number,
        date: moment.Moment,
        description: string
    ) {
        this.value = value;
        this.date = date;
        this.description = description;
    }
}