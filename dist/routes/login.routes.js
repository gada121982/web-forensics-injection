"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var login_ctl_1 = __importDefault(require("../controllers/login.ctl"));
var app = express_1.default();
app.get("/", login_ctl_1.default.getLogin);
app.post("/", login_ctl_1.default.postLogin);
exports.default = app;
