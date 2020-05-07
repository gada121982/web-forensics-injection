import express, { Application } from "express";
import signup from "../controllers/signup.ctl";

const app: Application = express();

app.get("/", signup.getSignup);
app.post("/", signup.postSignup);

export default app;
