"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAllCoinNotActive = "select * from \nphapchung.infocoin\nwhere active = false;\n";
var getUserDetail = "\n  select * from\n  phapchung.user\n  where name = ? ;\n";
var querylogin = {
    getAllCoinNotActive: getAllCoinNotActive,
    getUserDetail: getUserDetail,
};
exports.default = querylogin;
