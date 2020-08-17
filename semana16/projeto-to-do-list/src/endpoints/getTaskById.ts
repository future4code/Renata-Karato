import { Request, Response } from "express";
import { connection, taskTableName, userTableName } from "../index";
import moment from "moment";

export default async function getTaskById(req: Request, res: Response) {
    try {
        const result = await connection.raw(`
            SELECT ${taskTableName}.*, nickname  
            FROM ${taskTableName}
            JOIN ${userTableName} 
            ON creator_user_id = ${userTableName}.id 
            WHERE ${taskTableName}.id = "${req.params.id as string}"
        `)

        if (!result[0][0]) {
            res
                .status(404)
                .send({
                    message: "Tarefa não encontrada"
                });
        }

        res
            .status(200)
            .send({
                message: "Sucesso!",
                task: {
                    "taskId": result[0][0].id,
                    "title": result[0][0].title,
                    "description": result[0][0].description,
                    "limitDate": moment(result[0][0].limit_date, "YYYY-MM-DD").format("DD/MM/YYYY"),
                    "status": result[0][0].status,
                    "creatorUserId": result[0][0].creator_user_id,
                    "creatorUserNickname": result[0][0].nickname
                }
            });
    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            });
    }
}