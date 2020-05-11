"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var usersetting_ctl_1 = __importDefault(require("../controllers/usersetting.ctl"));
var app = express_1.default();
app.get("/", usersetting_ctl_1.default.getUserSetting);
app.post("/changepassword", usersetting_ctl_1.default.changepassword);
app.post("/addcoin", usersetting_ctl_1.default.addcoin);
app.post("/logout", usersetting_ctl_1.default.logout);
exports.default = app;
