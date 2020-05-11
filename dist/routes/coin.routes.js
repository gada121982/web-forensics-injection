"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var coin_ctl_1 = __importDefault(require("../controllers/coin.ctl"));
var app = express_1.default();
app.get("/active/:idcoin", coin_ctl_1.default.activeCoin);
exports.default = app;
