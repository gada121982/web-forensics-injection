import express, { Application } from "express";
import usersetting from "../controllers/usersetting.ctl";

const app: Application = express();

app.get("/", usersetting.getUserSetting);
app.post("/changepassword", usersetting.changepassword);
app.post("/addcoin", usersetting.addcoin);

export default app;
