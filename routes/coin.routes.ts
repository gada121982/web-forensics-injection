import express from "express";
import coin from "../controllers/coin.ctl";

const app: express.Application = express();

app.get("/active/:idcoin", coin.activeCoin);

export default app;
