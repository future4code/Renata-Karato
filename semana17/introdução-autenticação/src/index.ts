import express, { Request, Response } from "express";
import dotenv from "dotenv";
import knex from "knex";
import { AddressInfo } from "net";

import createUser from "./data/createUser"
import getUserByEmail from "./data/getUserByEmail";
import login from "./data/login";

import idGenerator from "./services/idGenerator";

// console.log(idGenerator.execute())

dotenv.config();

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

export const userTableName = "User";

const app = express();

app.use(express.json());

app.post("/user/signup", createUser)
app.post("/user/login", login)
app.get("/user/:email", getUserByEmail)

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

