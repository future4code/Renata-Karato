import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import Authenticator from "../services/Authenticator";

export default async function getUserProfile (req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string;
    
        const authenticationData = Authenticator.getTokenData(token);
    
        const userDb = new UserDatabase();
        const user = await userDb.getUserById(authenticationData.id);
        
        if (authenticationData.role !== "NORMAL") {
            throw new Error ("Não autorizado!")
        }
        
        if (!user) {
            res
                .status(404)
                .send({
                    message: "Usuário não encontrado"
                });
        }

        res
            .status(200)
            .send({
                message: "Sucesso!",
                id: user.id,
                email: user.email,
            });
        
    } catch (err) {
        res
            .status(400)
            .send({
                message: err.sqlMessage || err.message,
        });
    }
}