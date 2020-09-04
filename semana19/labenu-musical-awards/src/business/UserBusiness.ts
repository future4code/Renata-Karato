import { UserInputDTO, LoginInputDTO, User, stringToUserRole } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public async createUser(
        user: UserInputDTO
    ) {

        if (!user.name || !user.email || !user.password || !user.role) {
            throw new Error("Missing input");
        }

        if (user.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        if (user.password.length < 6) {
            throw new Error("Invalid password");
        }

        const id = this.idGenerator.generate();

        const hashPassword = await this.hashManager.hash(user.password);

        await this.userDatabase.createUser(
            new User (id, user.name, user.email, hashPassword, stringToUserRole(user.role))
        );

        const accessToken = this.authenticator.generateToken({ 
            id, 
            role: user.role 
        });

        return { accessToken };
    }

    public async getUserByEmail(email: string, password:string) :Promise<string> {

        if (!email || !password) {
            throw new Error("Missing input");
        }
      
        const user = await this.userDatabase.getUserByEmail(email);

        if (!user) {
            throw new Error("User not found");
        }

        const hashCompare = await this.hashManager.compare(
            password, 
            user.getPassword()
        );

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        const token = this.authenticator.generateToken({ 
            id: user.getId(), 
            role: user.getRole()
        });

        return token;
    }
}