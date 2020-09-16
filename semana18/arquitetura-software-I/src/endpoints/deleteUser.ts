import {Request, Response} from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const token = req.headers.authorization as string;

        const userBussines = new UserBusiness();
        await userBussines.deleteUser(id, token)

        res
            .status(200)
            .send({
                message: "Usuário apagado com sucesso"
            })
    } catch(e) {
        res
            .status(400)
            .send({
                message: e.sqlMessage || e.message
            })
    }
    await BaseDatabase.destroyConnection();
}