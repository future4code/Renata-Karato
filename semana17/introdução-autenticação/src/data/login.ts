import { Request, Response } from "express";
import { connection, userTableName } from "..";
import authenticathor from "../services/authenticator";

export default async function login (req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }
        
        if (!email || !password) {
            throw new Error("\"email\" e \"password\" são obrigatórios")
        }

        const result = await connection(userTableName)
            .select()
            .where({
                email, password
            })

        if(!result[0]) {
            throw new Error ("Not found")
        }

        const token = authenticathor.generateToken({
            id: result[0].id
        })

        res
            .status(200)
            .send({
                message: "Usuário logado",
                token
            })
    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            })
    }
 }