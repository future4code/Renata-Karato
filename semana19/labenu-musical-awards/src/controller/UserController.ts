import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class UserController {

    private static UserBusiness = new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    );
        
    public async signup(req: Request, res: Response) {
        try {
            const result = await UserController.UserBusiness.createUser(
                req.body.name,
                req.body.email,
                req.body.password,
                req.body.role
            );

            res
                .status(200)
                .send(result);

        } catch (error) {
            res
                .status(error.errorCode || 400)
                .send({ 
                     message: error.message
                });
        }
        await BaseDatabase.destroyConnection();
    }

    async login(req: Request, res: Response) {
        const email =  req.body.email;
        const password = req.body.password;

        try {
            const result = await UserController.UserBusiness.getUserByEmail(email, password);

            res
                .status(200)
                .send(result);

        } catch (error) {
            res
                .status(error.errorCode || 400)
                .send({
                    error: error.message 
                });
        }
        await BaseDatabase.destroyConnection();
    }
}