"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_routes_1 = __importDefault(require("./main.routes"));
var login_routes_1 = __importDefault(require("./login.routes"));
var signup_routes_1 = __importDefault(require("./signup.routes"));
var member_routes_1 = __importDefault(require("./member.routes"));
var admin_routes_1 = __importDefault(require("./admin.routes"));
var usersetting_routes_1 = __importDefault(require("./usersetting.routes"));
var coin_routes_1 = __importDefault(require("./coin.routes"));
var index = { main: main_routes_1.default, login: login_routes_1.default, signup: signup_routes_1.default, member: member_routes_1.default, admin: admin_routes_1.default, usersetting: usersetting_routes_1.default, coin: coin_routes_1.default };
exports.default = index;
