import express from "express";
import admin from "../controllers/admin.ctl";

const app: express.Application = express();

app.get("/", admin.getAdmin);

export default app;
