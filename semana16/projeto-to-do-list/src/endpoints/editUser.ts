import { Request, Response } from "express";
import { userTableName, connection } from "..";

export default async function editUser(req: Request, res: Response) {
    try {
        const { name, nickname, email } = req.body

        let queryFields = [
            name && `name = "${name}"`,
            nickname && `nickname = "${nickname}"`,
            email && `email = "${email}"`
        ]

        queryFields = queryFields.filter(field => field)    // remove valores undefined
       
        if (name === "" || nickname === "" || email === "") {
            res
                .status(400)
                .send({
                    message: "Não pode haver chaves vazias"
                })
        }

        if (!queryFields.length) {
            res
                .status(400)
                .send({
                    message: "Informe ao menos um valor para alterar"
                })
        }

        await connection.raw(`
            UPDATE ${userTableName} 
            SET ${queryFields.join(",")}
            WHERE id = "${req.params.id}"
        `)

        res
            .status(200)
            .send({
                message: "Usuário atualizado!",
            });
    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            });
    }
}