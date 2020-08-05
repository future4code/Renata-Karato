import { Place } from "./Place";

export class Industry extends Place {
    constructor(
        public machinesQuantity: number,
        cep: string
    ) {
        super(cep)
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}