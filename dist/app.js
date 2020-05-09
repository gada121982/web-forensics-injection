"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var request_ip_1 = __importDefault(require("request-ip"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var morgan_1 = __importDefault(require("morgan"));
// routes
var index_routes_1 = __importDefault(require("./routes/index.routes"));
// config
var app = express_1.default();
dotenv_1.default.config();
app.use(express_1.default.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(morgan_1.default("combined"));
app.use(cookie_parser_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(request_ip_1.default.mw());
// routes
app.use("/", index_routes_1.default.main);
app.use("/login", index_routes_1.default.login);
app.use("/signup", index_routes_1.default.signup);
app.listen(process.env.PORT || 3000, function () {
    console.log("app running on port ", process.env.PORT || 300);
});
