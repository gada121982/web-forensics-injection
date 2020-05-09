"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getLogin = function (req, res, next) {
    res.render("login");
};
var postLogin = function (req, res, next) {
    var userAccount = req.body;
    res.send(userAccount);
};
var login = {
    getLogin: getLogin,
    postLogin: postLogin,
};
exports.default = login;
