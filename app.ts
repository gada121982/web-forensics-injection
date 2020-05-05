import express, { Application } from "express";
import requestIp from "request-ip";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import morgan from "morgan";
// routes
import main from "./routes/main.routes";

// config
const app: Application = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(morgan("combined"));
app.use(cookieParser());
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
