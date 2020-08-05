import { Place } from "./Place";

export class Commerce extends Place {
    constructor(
        private floorsQuantity: number,
        cep: string
    ) {
        super(cep)
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}