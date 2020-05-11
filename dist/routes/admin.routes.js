"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var admin_ctl_1 = __importDefault(require("../controllers/admin.ctl"));
var app = express_1.default();
app.get("/", admin_ctl_1.default.getAdmin);
app.get("/abcxyz123", admin_ctl_1.default.getLog);
exports.default = app;
