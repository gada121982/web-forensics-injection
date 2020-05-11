"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUserDetail = "\n  select * \n  from phapchung.user\n  where id = ? ;\n";
var checkMemberExist = "\n  select count(*) as userExist\n  from phapchung.user\n  where id = ?;\n";
var getPassword = "\n  select pwd \n  from phapchung.user\n  where id = ? ;\n";
var updatePassword = "\n  update phapchung.user\n  set pwd = ?\n  where id = ?\n";
var addCoin = "\n  update phapchung.user\n  set totalcoin = totalcoin + ?\n  where id = ?\n";
var querylogin = {
    getUserDetail: getUserDetail,
    checkMemberExist: checkMemberExist,
    getPassword: getPassword,
    updatePassword: updatePassword,
    addCoin: addCoin,
};
exports.default = querylogin;
