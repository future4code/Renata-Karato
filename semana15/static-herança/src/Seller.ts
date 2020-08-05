import { Employee } from "./Employee";

export class Seller extends Employee {
    static SELLING_COMMISSION: number = 5
    private salesQuantity: number = 0;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: Date,
        baseSalary: number,
        salesQuantity: number
    ) {
        super(id, email, name, password, admissionDate, baseSalary)
        this.salesQuantity = salesQuantity
    }

    public getSalesQuantity(): number {
        return this.salesQuantity
    }

    public setSalesQuantity(quantity: number): void {
        this.salesQuantity = quantity
    } 

    public calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFIT_VALUE + (this.salesQuantity*Seller.SELLING_COMMISSION)
    }
}