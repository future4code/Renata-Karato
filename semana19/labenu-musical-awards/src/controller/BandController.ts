import { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { BandInputDTO, Band } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserBusiness } from "../business/UserBusiness";

export class BandController {

    private static BandBusiness = new BandBusiness(
        new BandDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    );

    public async registerBand(req: Request, res: Response) {
        try {
            const result = await BandController.BandBusiness.registerBand(
                req.body.name,
                req.body.music_genre,
                req.body.responsible
            );
               
            const token = req.headers.authorization as string;

            const authenticator = new Authenticator();
            const authenticationData = authenticator.getData(token)
            
            if (authenticationData.role !== "ADMIN") {
                throw new Error("Only a admin user can access this funcionality")
            }
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