"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_routes_1 = __importDefault(require("./main.routes"));
var login_routes_1 = __importDefault(require("./login.routes"));
var signup_routes_1 = __importDefault(require("./signup.routes"));
var index = { main: main_routes_1.default, login: login_routes_1.default, signup: signup_routes_1.default };
exports.default = index;
