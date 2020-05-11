import express from "express";
import signup from "../controllers/signup.ctl";

const app: express.Application = express();

app.get("/", signup.getSignup);
app.post("/", signup.postSignup);

export default app;
