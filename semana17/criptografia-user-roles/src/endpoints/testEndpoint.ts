import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";

export default async function testEndpoint(req: Request, res: Response) {
    try {
        const tables = await new UserDatabase().getAllTables()

        res
            .status(200)
            .send(tables);
    } catch (error) {
        res
            .status(400)
            .send(error.message);
    }
}