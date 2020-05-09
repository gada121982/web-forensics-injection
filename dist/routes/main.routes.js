"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var main_ctl_1 = require("../controllers/main.ctl");
var app = express_1.default();
app.get("/", main_ctl_1.main);
exports.default = app;
