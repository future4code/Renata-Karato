import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

import createTask from "./endpoints/createTask";
import editUser from "./endpoints/editUser";
import getTaskById from "./endpoints/getTaskById";
import getUserById from "./endpoints/getUserById";
import signUp from "./endpoints/signUp";
import testEndpoint from "./endpoints/testEndpoint";

/**************************************************************/

dotenv.config();

/**************************************************************/

export const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

export const userTableName = "ToDoListUser";
export const taskTableName = "ToDoListTask";

/**************************************************************/

const app = express();

app.use(express.json());

app.get("/test", testEndpoint)

app.put("/user", signUp);
app.get("/user/:id", getUserById);
app.post("/user/edit/:id", editUser);

app.put("/task", createTask);
app.get("/task/:id", getTaskById);

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});