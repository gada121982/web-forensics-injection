import express from "express";
import login from "../controllers/login.ctl";

const app: express.Application = express();

app.get("/", login.getLogin);
app.post("/", login.postLogin);

export default app;
