"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var member_ctl_1 = __importDefault(require("../controllers/member.ctl"));
var app = express_1.default();
app.get("/", member_ctl_1.default.getMember);
exports.default = app;
