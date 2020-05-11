import express from "express";
import { main } from "../controllers/main.ctl";

const app: express.Application = express();

app.get("/", main);

export default app;
