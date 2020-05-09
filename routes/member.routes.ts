import express, { Application } from "express";
import member from "../controllers/member.ctl";

const app: express.Application = express();

app.get("/", member.getMember);

export default app;
