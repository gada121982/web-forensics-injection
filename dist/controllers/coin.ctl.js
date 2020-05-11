"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var convertAsyncAwait_1 = require("../utils/convertAsyncAwait");
var dbConnection_1 = __importDefault(require("../models/dbConnection"));
var log_query_1 = __importDefault(require("../models/log.query"));
var coin_query_1 = __importDefault(require("../models/coin.query"));
/**
 * /coin/active/:idcoin
 */
var activeCoin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var connection, idcoin, token, ip, coinDetail, e_1, result, e_2, feild, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                idcoin = req.params.idcoin;
                token = req.signedCookies.access_token;
                ip = req.clientIp;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, convertAsyncAwait_1.poolGetConnection(dbConnection_1.default).catch(console.log)];
            case 2:
                connection = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                res.send("connect to dbs was failed");
                return [3 /*break*/, 4];
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, convertAsyncAwait_1.query(connection, coin_query_1.default.getCoinById, [idcoin])];
            case 5:
                result = _a.sent();
                coinDetail = result[0];
                return [3 /*break*/, 7];
            case 6:
                e_2 = _a.sent();
                res.send({ e: e_2 });
                return [3 /*break*/, 7];
            case 7:
                _a.trys.push([7, 10, , 11]);
                feild = [[ip, coinDetail.price, token, idcoin]];
                return [4 /*yield*/, convertAsyncAwait_1.query(connection, log_query_1.default.insertLogGetCoin, [feild])];
            case 8:
                _a.sent();
                return [4 /*yield*/, convertAsyncAwait_1.query(connection, coin_query_1.default.updateActiveCoin, [idcoin])];
            case 9:
                _a.sent();
                res.render("detail-coin", {
                    coinDetail: coinDetail,
                    id: token,
                });
                return [3 /*break*/, 11];
            case 10:
                error_1 = _a.sent();
                res.send(error_1);
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}); };
var coin = {
    activeCoin: activeCoin,
};
exports.default = coin;
