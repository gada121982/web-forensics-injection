import express from "express";
import product from "../controllers/product.ctl";

let app: express.Application = express();

app.post("/order", product.getOrder);

export default app;
