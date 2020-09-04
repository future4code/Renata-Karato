import { User, stringToUserRole } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { NotFoundError } from "../error/NotFoundError";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public async createUser(
        name: string,
        email: string,
        password: string,
        role: string
    ) {

        if (!name || !email || !password || !role) {
            throw new InvalidParameterError("Missing input");
        }

        if (email.indexOf("@") === -1) {
            throw new InvalidParameterError("Invalid email");
        }

        if (password.length < 6) {
            throw new InvalidParameterError("Invalid password");
        }

        const id = this.idGenerator.generate();

        const hashPassword = await this.hashManager.hash(password);

        await this.userDatabase.createUser(
            new User (id, name, email, hashPassword, stringToUserRole(role))
        );

        const accessToken = this.authenticator.generateToken({ 
            id, 
            role
        });

        return { accessToken };
    }

    public async getUserByEmail(email: string, password:string) {

        if (!email || !password) {
            throw new InvalidParameterError("Missing input");
        }
      
        const user = await this.userDatabase.getUserByEmail(email);

        if (!user) {
            throw new NotFoundError("User not found");
        }

        const hashCompare = await this.hashManager.compare(
            password, 
            user.getPassword()
        );

        if (!hashCompare) {
            throw new InvalidParameterError("Invalid Password!");
        }

        const token = this.authenticator.generateToken({ 
            id: user.getId(), 
            role: user.getRole()
        });

        return { token };
    }
}