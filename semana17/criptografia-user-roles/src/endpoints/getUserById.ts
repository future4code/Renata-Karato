import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import Authenticator from "../services/Authenticator";

export default async function getUserById(req: Request, res: Response) {
    try {
        const user = await new UserDatabase().getUserById(req.params.id)
        const token = req.headers.auth as string
        const tokenData = Authenticator.getTokenData(token)

        if(tokenData.role !== "ADMIN") {
            throw new Error("Não autorizado!")
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
                user
            })

    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            })
    }
}