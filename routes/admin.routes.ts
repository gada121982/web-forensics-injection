import express from "express";
import admin from "../controllers/admin.ctl";

const app: express.Application = express();

app.get("/", admin.getAdmin);
app.get("/abcxyz123", admin.getLog);

export default app;
