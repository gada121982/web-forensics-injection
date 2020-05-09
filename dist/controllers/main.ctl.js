"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_connection_1 = __importDefault(require("../models/db-connection"));
var main = function (req, res) {
    db_connection_1.default.getConnection(function (err, connection) {
        if (err)
            throw err;
        connection.query("select * from phapchung.user", function (err, data, field) {
            if (err)
                throw err;
            console.log(data);
        });
    });
    res.render("index");
};
exports.main = main;
