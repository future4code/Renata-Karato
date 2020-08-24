import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";
import HashManager from "../services/HashManager";
import UserDatabase from "../data/UserDatabase";

export default async function signUp(req: Request, res: Response) {
    try {
        const { email, password, role } = req.body
        const id = IdGenerator.execute();

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
        }
    
        if (!req.body.password || req.body.password.length < 6) {
          throw new Error("Invalid password");
        }
    
        const cypherPassword = await new HashManager().hash(req.body.password)
    
        await new UserDatabase().createUser(id, email, cypherPassword, role);
    
        const token = Authenticator.generateToken({
          id,
          role
        });
    
        res
            .status(200)
            .send({
                message: "Usuário criado com sucesso!",
                token
            });
    } catch (err) {
        res
            .status(400)
            .send({
                message: err.sqlMessage || err.message,
            });
    }
};