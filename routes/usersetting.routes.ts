import express from "express";
import usersetting from "../controllers/usersetting.ctl";

const app: express.Application = express();

app.get("/", usersetting.getUserSetting);
app.post("/changepassword", usersetting.changepassword);
app.post("/addcoin", usersetting.addcoin);
app.post("/logout", usersetting.logout);

export default app;
