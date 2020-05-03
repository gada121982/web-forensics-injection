import express, { Application, Request, Response } from "express";
import { main } from "../controllers/main.ctl";

const app: Application = express();

app.use("/", main);

export default app;
