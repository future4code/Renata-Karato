### Exercício 1

a) Sem o raw, o resultado seria o da query + outras informações. Como só queremos pegar as informações que desejamos, utilizamos o result[0], pois assim ele pega apenas a info da primeira posição do array,
E o resultado fica:
```
RowDataPacket {
  id: '001',
  name: 'Tony Ramos',
  salary: 400000,
  birth_date: 1948-08-25T03:00:00.000Z,
  gender: 'male',
  hometown: 'São Paulo'
}
```

b) 
```
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
```

c)
```
const countActors = async (gender: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `)

    console.log(result[0][0].count) 
  } catch (error) {
    console.log(error)
  }
}
```

### Exercício 2

a) 
```
const updateteActor = async (
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
```

b)
```
const deleteActor = async (
  id: string
): Promise<void> => {
  await connection
    .delete("*")
    .where("id", id)
    .into("Actor")
}
```

c)
```
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  console.log(result[0].average);
};
```

### Exercício 3

a) Porque o "req" é uma variável que possui as informações que chegam no backend através da requisição. Nesse caso, a requisição é o parâmetro id.

b)  O "res" é uma variável que permite definir o que será devolvido na respota. o "status()" define o código do status HTTP e o "send()" efine o que será enviado no body como resposta.

c) 
```
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
```

### Exercício 4

a)
```
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
```

b) 
```
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
```

### Exercício 5

```
const createMovie = async(
  id: string,
  title: string,
  synopsis: string,
  rating: number,
  releaseDate: Date,
  playingLimitDate: Date
) => {
  await connection
    .insert({
      id: id,
      name: title,
      synopsis: synopsis,
      rating: rating,
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
      req.body.rating,
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
```

### Exercício 6

```
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
```

### Exercício 7

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


