import { Request, Response } from "express";
import { connection, taskTableName } from '../index';
import moment from "moment";

export default async function createTask(req: Request, res: Response) {
    try {
        const { title, description, limitDate, creatorUserId } = req.body
        const id = Date.now() + Math.random().toString()

        if (!title || !description || !limitDate || !creatorUserId) {
            res
                .status(400)
                .send({
                    message: "\"title\",\"description\", \"limitDate\"e \"creatoUserId\" são obrigatórios"
                })
        }

        await connection
            .insert({
                id, title, description, 
                creator_user_id: creatorUserId,
                limit_date: moment(limitDate, "DD/MM/YYYY").format("YYYY-MM-DD"),
                status: "to_do"
            })
            .into(taskTableName)

        res
            .status(200)
            .send({
                message: "Nova tarefa criada!",
            });
    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            });
    }
}