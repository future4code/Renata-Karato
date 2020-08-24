### Exercício 1

a) Simn, concordo. Representar o id com strings faz com que eles sejam mais autênticos e mais dificil de se encontrar ids iguais.

b) 
import { v4 } from "uuid";

export class IdGenerator {
  public generate(): string {
    return v4();
  }
}

### Exercício 2

a) O knex é a biblioteca que permite fazer conexões com vários bancos SQL. O env serve para proteger os dados que são passados, para que eles não sejam visíveis para todos que acessam o código. A const createUser é uma função que cria um usuário dentro da tabela User.

b) 
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

c)
import knex from "knex";

export class UserDatabase {
  private connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
    },
  });

	private static TABLE_NAME = "User";

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.connection
      .insert({
        id,
        email,
        password,
      })
		.into(UserDatabase.TABLE_NAME);
  }
}

### Exercício 3

a) A linha as string tipa a JWT_KEY como uma string.

b) 
interface AuthenticationData{
    id: string
}

export default abstract class authenticathor {
    static generateToken(input: any){
        return jwt.sign(
            input,
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_EXPIRES_IN}  
        )
    }

    static getTokenData(token: string): any{
        const tokenData = jwt.verify(
            token,
            process.env.JWT_KEY as string
        )

        return tokenData as AuthenticationData;
    }
}

### Exercício 4

export default async function createUser(req: Request, res: Response) {
    try {
        const { email, password } = req.body
        const id = idGenerator.execute();

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        }
        
        if ( !email || !password) {
            throw new Error ("\"name\" e \"email\" são obrigatórios")
        }

        await connection
            .insert({ id, email, password })
            .into(userTableName)

        const token = authenticathor.generateToken({id})

        res
            .status(200)
            .send({
                message: "Usuário criado com sucesso!",
                token
            });
    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            });
    }
}

### Exercício 5
export default async function getUserByEmail (req: Request, res: Response) {
    try {
        const result = await connection.raw(`
            SELECT * FROM ${userTableName}
            WHERE ${req.params.email as string}
        `)

        if (!result[0][0]) {
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
                    user: result[0]
                });

    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            });
    }
}

### Exercício 6
export default async function login (req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }
        
        if (!email || !password) {
            throw new Error("\"email\" e \"password\" são obrigatórios")
        }

        const result = await connection(userTableName)
            .select()
            .where({
                email, password
            })

        if(!result[0]) {
            throw new Error ("Not found")
        }

        const token = authenticathor.generateToken({
            id: result[0].id
        })

        res
            .status(200)
            .send({
                message: "Usuário logado",
                token
            })
    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            })
    }
 }




