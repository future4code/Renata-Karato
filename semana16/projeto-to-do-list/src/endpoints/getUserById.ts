import { Request, Response } from "express";
import { connection, userTableName } from "../index";

export default async function getUserById(req: Request, res: Response) {
    try {
        const result = await connection.raw(`
            SELECT id, nickname FROM ${userTableName}
            WHERE id = "${req.params.id as string}"
        `)

        if (!result[0][0]) {
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
                user: result[0][0]
            });
    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            });
    }
}