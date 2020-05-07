import express, { Application } from "express";
import login from "../controllers/login.ctl";

const app: Application = express();

app.get("/", login.getLogin);
app.post("/", login.postLogin);

export default app;
