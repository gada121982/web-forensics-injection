"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var pool = mysql_1.default.createPool({
    connectionLimit: 100,
    host: process.env.host || "localhost",
    port: 3306,
    user: process.env.user || "root",
    password: process.env.pwd,
    database: process.env.database,
});
exports.default = pool;
