"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var signup_ctl_1 = __importDefault(require("../controllers/signup.ctl"));
var app = express_1.default();
app.get("/", signup_ctl_1.default.getSignup);
app.post("/", signup_ctl_1.default.postSignup);
exports.default = app;
