import express, { Application } from "express";
import member from "../controllers/member.ctl";

const app: express.Application = express();

app.get("/member", member.getMember);

export default app;
