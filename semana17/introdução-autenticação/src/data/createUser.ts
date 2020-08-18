import { Request, Response } from "express";
import { connection, userTableName } from '../index';

import idGenerator from "../services/idGenerator";
import authenticathor from "../services/authenticator";

export default async function createUser(req: Request, res: Response) {
    try {
        const { email, password } = req.body
        const id = idGenerator.execute();

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        }
        
        if ( !email || !password) {
            throw new Error ("\"name\" e \"email\" são obrigatórios")
        }

        await connection
            .insert({ id, email, password })
            .into(userTableName)

        const token = authenticathor.generateToken({id})

        res
            .status(200)
            .send({
                message: "Usuário criado com sucesso!",
                token
            });
    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            });
    }
}