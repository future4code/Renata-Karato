import { Request, Response } from "express";
import { connection, userTableName } from '../index'

export default async function signup(req: Request, res: Response) {
    try {
        const { name, nickname, email } = req.body
        const id = Date.now() + Math.random().toString()

        if (!name || !nickname || !email) {
            res
                .status(400)
                .send({
                    message: "\"name\",\"nickname\" e \"email\" são obrigatórios"
                })
        }

        await connection
            .insert({ id, name, nickname, email })
            .into(userTableName)

        res
            .status(200)
            .end();
    } catch (error) {
        res
            .status(400)
            .end();
    }
}