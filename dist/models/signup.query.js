"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkOverloadUserId = "\n    select count(name)\n    as count\n    from phapchung.user\n    where name = ?\n";
var saveUser = "\n    insert into phapchung.user (name, pwd, level)\n    value ?;\n";
var query = {
    saveUser: saveUser,
    checkOverloadUserId: checkOverloadUserId,
};
exports.default = query;
