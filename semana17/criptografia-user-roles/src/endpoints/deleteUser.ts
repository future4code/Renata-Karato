import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import Authenticator from "../services/Authenticator";

export default async function deleteUser (req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string;

        const authenticationData = Authenticator.getTokenData(token)

        if (authenticationData.role !== "ADMIN") {
            throw new Error("Only a admin user can access this funcionality")
        }

        const id = req.params.id;

        const userDatabase = new UserDatabase;
        await userDatabase.deleteUser(id);

        res
            .status(200)
            .send({
                message: "Usuário apagado com sucesso!"
            })

    } catch (err) {
        res
            .status(400)
            .send({
                message: err.sqlMessage || err.message
            })
    }
    
}