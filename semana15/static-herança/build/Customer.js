"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const User_1 = require("./User");
class Customer extends User_1.User {
    constructor(id, email, name, password, creditCard) {
        super(id, email, name, password);
        this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }
    getCreditCard() {
        return this.creditCard;
    }
}
exports.Customer = Customer;
const customer = new Customer("2", "hellokitty@gmail.com", "Hello Kitty", "oioioi", "3020 2000 0000 4465");
customer.introduceYouserlf();
console.log(customer.introduceYouserlf());
