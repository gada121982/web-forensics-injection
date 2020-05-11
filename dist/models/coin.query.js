"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAllCoinNotActive = "\n  select * from \n  phapchung.infocoin\n  where active = false;\n";
var insertCoin = "insert into phapchung.infocoin (seri, keynumber, price, active) value ?;\n";
var getCoinById = "\n  select * from phapchung.infocoin\n  where id = ?\n";
var updateActiveCoin = "\n  update phapchung.infocoin\n  set active = true\n  where id = ?\n";
var queryCoin = {
    getAllCoinNotActive: getAllCoinNotActive,
    insertCoin: insertCoin,
    getCoinById: getCoinById,
    updateActiveCoin: updateActiveCoin,
};
exports.default = queryCoin;
