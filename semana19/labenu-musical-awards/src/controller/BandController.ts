import { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { BandDatabase } from "../data/BandDatabase";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export class BandController {

    private static BandBusiness = new BandBusiness(
        new BandDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    );

    public async registerBand(req: Request, res: Response) {
        try {
           
            const name = req.body.name;
            const musicGenre = req.body.music_genre;
            const responsible = req.body.responsible;
               
            const token = req.headers.authorization as string;

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();
            
            const authenticator = new Authenticator();
            const authenticationData = authenticator.getData(token)
            
            if (authenticationData.role !== "ADMIN") {
                throw new Error("Only a admin user can access this funcionality")
            }

            const bandDatabase = new BandDatabase();
            await bandDatabase.registerBand(
                id,
                name,
                musicGenre,
                responsible
            )

            res
                .status(200)
                .send({
                    message: "Band successfully registered!"
                })
        } catch (error) {
            res
                .status(400)
                .send({error: error.messagr})
        }
        await BaseDatabase.destroyConnection();
    }

}