"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GET /
 */
var main = function (req, res) {
    var token = req.signedCookies.access_token;
    if (token) {
        res.redirect("/user/member");
    }
    res.render("index");
};
exports.main = main;
