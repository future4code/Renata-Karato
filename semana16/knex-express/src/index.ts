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

app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

/**************************************************************/

/* EXERCÍCIO 1A */

const getActorById = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0][0]
  } catch (error) {
    console.log(error)
  }
}

// getActorById("001")

/**************************************************************/

/* EXERCÍCIO 1B */

const getActorByName = async (name: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
    `)

    console.log(result[0][0]) 
  } catch (error) {
    console.log(error)
  }
}

/**************************************************************/

/* EXERCÍCIO 1C */

const countActors = async (gender: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `)

    return result[0][0].count
  } catch (error) {
    console.log(error)
  }
}

/**************************************************************/

/* EXERCÍCIO 2A */

const updateteActorSalary = async (
  id: string,
  salary: number
): Promise<void> => {
  await connection
    .update({
      salary: salary
    })
    .where("id", id)
    .into("Actor");
};


/**************************************************************/

/* EXERCÍCIO 2B */

const deleteActor = async (
  id: string
): Promise<void> => {
  await connection
    .delete("*")
    .where("id", id)
    .into("Actor")
}

/**************************************************************/

/* EXERCÍCIO 2C */

const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  console.log(`R$${result[0].average}`);
};

/**************************************************************/

/* EXERCÍCIO 3 */

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});


/**************************************************************/

/* EXERCÍCIO 3C */

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors (req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (error){
    res.status(400).send({
      message: error.message,
    });
  }
});

/**************************************************************/

/* EXERCÍCIO 4A */

app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateteActorSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success!"
    })
  } catch(error) {
    res.status(400).send({
      message: error.message
    })
  }
});

/**************************************************************/

/* EXERCÍCIO 4B */

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
    res.status(200).send({
      message: "Success!"
    })
  } catch(error) {
    res.status(400).send({
      message: error.message
    })
  }
 })

 /**************************************************************/

/* EXERCÍCIO 5 */

const createMovie = async(
  id: string,
  title: string,
  synopsis: string,
  releaseDate: Date,
  playingLimitDate: Date
) => {
  await connection
    .insert({
      id: id,
      name: title,
      synopsis: synopsis,
      release_date: releaseDate,
      playing_limit_date: playingLimitDate
    })
    .into("Movie");
};

app.post("/movie", async (req: Request, res: Response) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      req.body.releaseDate,
      req.body.playingLimitDate
    )
    res.status(200).send({
      message: "Success!"
    })
  } catch(error) {
    res.status(400).send({
      message: error.message
    })
  }
})

 /**************************************************************/

/* EXERCÍCIO 6 */

app.get("/movie/all", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await connection.raw(`
      SELECT * FROM Movie LIMIT 15
    `)
    res.status(200).send(result)
  } catch(err) {
    res.status(400).send({
      message: err.message
    })
  }
})

 /**************************************************************/

/* EXERCÍCIO 7 */

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(req.query.query as string);

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

