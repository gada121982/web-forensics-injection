"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkOverloadUserId = "\n    SELECT COUNT(name)\n    AS count\n    FROM phapchung.user\n    WHERE name = ?\n";
var saveUser = "\n    INSERT INTO phapchung.user (name, pwd, level)\n    VALUES ?;\n";
var query = {
    saveUser: saveUser,
    checkOverloadUserId: checkOverloadUserId,
};
exports.default = query;
