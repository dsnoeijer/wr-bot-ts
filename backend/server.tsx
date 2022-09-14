// const cors = require('cors');
// const Router = require("./Routes/routes")
// const app = express();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { validateEnv } from "../shared/utils/validateEnv";
import { connectDatabase } from "../database/connectDatabase";
// import {Router} from "./Routes/Routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

await connectDatabase();

// app.use(Router);

app.listen(3005, () => {
    console.log("Server running at port 3005");
})