import { Request, Response } from "express";
import { connection } from '../index'

export default async function testEndpoint(req: Request, res: Response) {
    try {
        const result = await connection.raw(`SHOW TABLES`)

        res
            .status(200)
            .send(result[0]);
    } catch (error) {
        res
            .status(400)
            .send(error.message);
    }
}