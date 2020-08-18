import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

import signUp from "./endpoints/signUp";
import login from "./endpoints/login";
import getUserProfile from "./endpoints/getUserProfile";
import testEndpoint from "./endpoints/testEndpoint";
import deleteUser from "./endpoints/deleteUser";
import getUserById from "./endpoints/getUserById";

import HashManager from "./services/HashManager";

/******************************************************************/

dotenv.config();

/******************************************************************/

const app = express();
app.use(express.json());

app.get("/test", testEndpoint)

app.post("/user/signup", signUp)
app.post("/user/login", login)
app.get("/user/profile", getUserProfile)
app.delete("/user/:id", deleteUser)
app.get("/user/:id", getUserById)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// (async () => {
//   console.log(await new HashManager().hash("bananinha"));
// })();