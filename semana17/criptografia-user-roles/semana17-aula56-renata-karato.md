### EXERCÍCIO 1

a) Os rounds são números que são pegos das variaveis de ambiente. O salt acrescenta aleatoriamente sequências de caracteres a senha, projetando resultados criptográficos complexos e aumentado a segurança contra ataques, como o rainbow table. Um hash sempre será diferente, mesmo que a senha seja igual.

b) e c)
import * as bcrypt from "bcryptjs";

export default class HashManager {
    async hash(text: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const cypherText = await bcrypt.hash(text, salt)

        return cypherText;
    }

    async compare(text: string, cypherText: string): Promise<boolean> {
        const result = await bcrypt.compare(text, cypherText)

        return result;
    }
}

### EXERCÍCIO 2

a) Primeiro, modificamos o endpoint de cadastro (signup), porque aí a senha será cadastrada criptografada. Então fazemos alteração no endpoint de login, que já devolve a senha criptografada

b)
export default async function signUp(req: Request, res: Response) {
    try {
        const { email, password } = req.body
        const id = IdGenerator.execute();

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
        }
    
        if (!req.body.password || req.body.password.length < 6) {
          throw new Error("Invalid password");
        }
    
        const cypherPassword = await new HashManager().hash(req.body.password)
    
        await new UserDatabase().createUser(id, email, cypherPassword);
    
        const token = Authenticator.generateToken({
          id,
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

c)
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

d) Não é necessário modificar este endpoint pois ele nos retorna id e email e não o password.

### EXERCÍCIO 3

a) No workbench:
ALTER TABLE User
ADD role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL";

b) 
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

interface AutehticationData {
  id: string,
  role: USER_ROLES
}


export default abstract class Authenticator {
  static generateToken(input: AutehticationData) {
      return jwt.sign(
          input,
          process.env.JWT_KEY as string,
          {expiresIn: process.env.JWT_EXPIRES_IN}
      )
  }

  static getTokenData(token: string): any {
      const tokenData = jwt.verify(
          token,
          process.env.JWT_KEY as string
      )

      return tokenData as AutehticationData
  }
}

c) 
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

d) 
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

### EXERCÍCIO 4

a)
export default async function getUserProfile (req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string;
    
        const authenticationData = Authenticator.getTokenData(token);
    
        const userDb = new UserDatabase();
        const user = await userDb.getUserById(authenticationData.id);
        
        if (authenticationData.role !== "NORMAL") {
            throw new Error ("Não autorizado!")
        }
        
        if (!user) {
            res
                .status(404)
                .send({
                    message: "Usuário não encontrado"
                });
        }

        res
            .status(200)
            .send({
                message: "Sucesso!",
                id: user.id,
                email: user.email,
            });
        
    } catch (err) {
        res
            .status(400)
            .send({
                message: err.sqlMessage || err.message,
        });
    }
}

### EXERCÍCIO 5

public async deleteUser(id: string) : Promise<any> {
await this.getConnection()
    .delete()
    .from(UserDatabase.tableName)
    .where({ id })

await this.destroyConnection()
}

export default async function deleteUser (req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string;

        const authenticationData = Authenticator.getTokenData(token)

        if (authenticationData.role !== "admin") {
            throw new Error("Only a admin user can access this funcionality")
        }

        const id = req.params.id;

        const userDatabase = new UserDatabase;
        await userDatabase.deleteUser(id);

        res
            .status(200)
            .send({
                message: "Usuário apagado com sucesso!"
            })

    } catch (err) {
        res
            .status(400)
            .send({
                message: err.sqlMessage || err.message
            })
    }
    
}

### EXERCÍCIO 6

export default async function getUserById(req: Request, res: Response) {
    try {
        const user = await new UserDatabase().getUserById(req.params.id)
        const token = req.headers.auth as string
        const tokenData = Authenticator.getTokenData(token)

        if(tokenData.role !== "ADMIN") {
            throw new Error("Não autorizado!")
        }

        if (!user) {
            res
                .status(404)
                .send({
                    message: "Usuário não encontrado"
                });
        }

        res
            .status(200)
            .send({
                message: "Sucesso!",
                user
            })

    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            })
    }
}

### EXERCÍCIO 7

export default abstract class BaseDB {
    private static connection: Knex | null = null

    public getConnection() {
        if (!BaseDB.connection) {

            BaseDB.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                },
            });
        }

        return BaseDB.connection
    }

    public async destroyConnection(){
        if(BaseDB.connection){
            await BaseDB.connection.destroy()

            BaseDB.connection = null
        }
    }
}