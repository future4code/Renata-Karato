import { IdGenerator } from "../services/IdGenerator";
import { BandInputDTO, Band } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class BandBusiness {
    constructor(
        private bandDatabase: BandDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public async registerBand(
        name: string,
        music_genre: string,
        responsible: string
    ) {
        if(!name || !music_genre || !responsible) {
            throw new Error("Missing input");
        }

        const id = this.idGenerator.generate();

        await this.bandDatabase.registerBand(
            id, 
            name, 
            music_genre, 
            responsible
        )

        const accessToken = this.authenticator.generateToken({
            id
        })

        return { accessToken }
    }
}