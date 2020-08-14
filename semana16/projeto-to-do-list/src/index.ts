import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

/* CRIAR USUÁRIO */

const createUser = async (
  name: string,
  nickname: string,
  email: string
) => {
  await connection
    .insert({
      name: name,
      nickname: nickname,
      email: email
    })
    .into("ToDoListUser")
}

app.put('/user', async (req: Request, res: Response) => {
  try {
    await createUser(
      req.body.name,
      req.body.nickname,
      req.body.email
    )
    res.status(200).send({
      message: "Usuário criado com sucesso!"
    })
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
})

/**************************************************************/

/* PEGAR USUÁRIO PELO ID */

const getUserById = async (
  id: string
) => {
  const result = await connection.raw(`
  SELECT * FROM ToDoListUser WHERE id = '${id}'
  `)

  return result[0][0]
}

app.get('/user/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await getUserById(id);

    if (user[0] === null) {
      res.status(400).send("Usuário não encontrado")
    }
    res.status(200).send(user)
  } catch (error) {
    res.status(400).send({
      message: "ID não encontrado!"
    })
  }
})

/**************************************************************/

/* EDITAR USUÁRIO  */

const editUserById = async (
  id: string,
  name: string,
  nickname: string
) => {
  await connection
    .update({
      name: name,
      nickname: nickname
    })
    .where("id", id)
    .into("ToDoListUser")
}


app.post('/user/edit/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const getUser = await getUserById(id)
    await editUserById(
      id,
      req.body.name,
      req.body.nickname
    )
    if (getUser[0] === null) {
      res.status(400).send("Usuário não encontrado")
    }
    res.status(200).send({
      message: "Usuário alterado com sucesso!"
    })
  } catch(error) {
    res.status(400).send({
      message: "ID não encontrado!"
    })
  }
});

/**************************************************************/

/* CRIAR TAREFA  */

const createTask = async (
  title: string,
  description: string,
  limitDate: Date,
  creatorUserId: string
) => {
  await connection
    .insert({
      title: title,
      description: description,
      limit_date: limitDate,
      creator_user_id: creatorUserId
    })
    .into("ToDoListTask")
}

app.put('/task', async (req: Request, res: Response) => {
  try {
    await createTask(
      req.body.title,
      req.body.description,
      req.body.limitDate,
      req.body.creatorUserId
    )
    res.status(200).send({
      message: "Tarefa criada com sucesso!"
    })
  } catch (error) {
    res.status(400).send({
      message: "Não foi possível criar tarefa :("
    })
  }
})

/**************************************************************/

/* PEGAR TAREFA PELO ID  */

const getTaskById = async (
  id: string
) => {
  const result = await connection.raw(`
  SELECT * FROM ToDoListTask WHERE id = '${id}'
  `)

  return result[0][0]
}

app.get('/task/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const task = await getTaskById(id);
    if (task[0] === null) {
      res.status(400).send("Tarefa não encontrada")
    }
    res.status(200).send(task)
  } catch (error) {
    res.status(400).send({
      message: "ID não encontrado!"
    })
  }
})

/**************************************************************/

/* PEGAR TODOS OS USUÁRIOS  */

// async function getAllUsers(): Promise<any> {
//   const result = await connection.raw(`
//     SELECT * FROM ToDoListUser
//   `)

//   return result[0]
// }

// app.get('/user/all', async (req: Request, res: Response) => {
//   try {
//     const users = await getAllUsers();

//     res.send(users).status(200)
//   } catch (error) {
//     res.status(400).send({
//       message: "erro"
//     })
//   }
// })

app.get('/user/all', getAllUsers)

async function getAllUsers (req: Request, res: Response): Promise<any> {
  try {
    const users = await connection.raw(`
      SELECT * FROM ToDoListUser
    `)
    res.status(200).send(users[0])
  } catch (error) {
    res.status(400).send({
      message: "Erro!"
    })
  }
}

/**************************************************************/

/* PEGAR TAREFAS CRIADAS POR UM USUÁRIO */

const getTaskCreatedByUser = async(
  creatorUserId: any
) => {
  const result = await connection.raw(`
  SELECT * FROM ToDoListTask WHERE creator_user_id = '${creatorUserId}'
  `)

  return result[0][0]
}

app.get('/task?creatorUserId=id', async ( req: Request, res: Response) => {
  try {
    const id = req.query.creatorUserId
    const tasks = await getTaskCreatedByUser(id)

    res.status(200).send(tasks)
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
})

