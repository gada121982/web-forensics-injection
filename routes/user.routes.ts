import express, { Application } from "express";
import user from "../controllers/user.ctl";

const app: Application = express();

app.get("/", user.getIndex);

export default app;
