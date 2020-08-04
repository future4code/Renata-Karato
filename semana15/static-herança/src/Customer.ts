import { User } from "./User";

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const customer = new Customer("2", "hellokitty@gmail.com", "Hello Kitty", "oioioi", "3020 2000 0000 4465")
customer.introduceYouserlf();
console.log(customer.introduceYouserlf())