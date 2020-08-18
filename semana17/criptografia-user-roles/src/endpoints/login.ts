import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import UserDatabase from "../data/UserDatabase";
import HashManager from "../services/HashManager";

export default async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body

        const user = await new UserDatabase().getUserByEmail(email)
        const passwordIsCorrect = await new HashManager().compare(password, user.password)

  
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
        }
    
        if (!email || !passwordIsCorrect) {
          throw new Error("Incorrect user or password");
        }
    
        const token = Authenticator.generateToken({
          id: user.id,
          role: user.role
        });
    
        res
            .status(200)
            .send({
                message: "Usuário logado",
                token,
            });
    } catch (err) {
        res
            .status(400)
            .send({
                message: err.sqlMessage || err.message,
            });
    }
}