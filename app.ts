import express, { Application } from "express";
import requestIp from "request-ip";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import morgan from "morgan";

//middlewares
import authAdmin from "./middlewares/authAdmin";
import authMember from "./middlewares/authMember";
// routes
import indexRoute from "./routes/index.routes";

// config
const app: Application = express();
dotenv.config();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(morgan("combined"));
app.use(cookieParser(process.env.keycookie));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(requestIp.mw());

// routes
app.use("/", indexRoute.main);
app.use("/login", indexRoute.login);
app.use("/signup", indexRoute.signup);
app.use("/user/admin", authAdmin, indexRoute.admin);
app.use("/user/member", authMember, indexRoute.member);
app.use("/manage", authMember, indexRoute.usersetting);

app.listen(process.env.PORT || 3000, (): void => {
  console.log("app running on port ", process.env.PORT || 300);
});
