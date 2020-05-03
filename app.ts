import express, { Application, Request, Response } from "express";
import requestIp from "request-ip";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// routes
import main from "./routes/main.routes";

// config
const app: Application = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookieParser());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
dotenv.config();
app.use(requestIp.mw());

// routes
app.use("/", main);

app.listen(process.env.PORT || 3000, (): void => {
  console.log("app running on port ", process.env.PORT || 3000);
});
