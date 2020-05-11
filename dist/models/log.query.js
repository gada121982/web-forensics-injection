"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var insertLogGetCoin = "insert into phapchung.log_getcoin\n(ip, price, id_user, id_coin)\nvalue ?";
var getAllLog = "select phapchung.user.name , phapchung.log_getcoin.id_coin, phapchung.log_getcoin.date,\nphapchung.log_getcoin.ip,  phapchung.log_getcoin.price\nfrom phapchung.user inner join phapchung.log_getcoin\non phapchung.user.id = phapchung.log_getcoin.id_user;";
var log = {
    insertLogGetCoin: insertLogGetCoin,
    getAllLog: getAllLog,
};
exports.default = log;
