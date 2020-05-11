import { poolGetConnection, query } from "../utils/convertAsyncAwait";
import { Request, Response } from "express";
import userQuery from "../models/user.query";
import pool from "../models/dbConnection";

/**
 * GET /user/member
 */
let getMember = async (req: Request, res: Response) => {
  let token = req.signedCookies.access_token;
  let connection;
  try {
    connection = await poolGetConnection(pool).catch(console.log);
  } catch (e) {
    res.send("connect to dbs was failed");
    return;
  }

  try {
    let result = await query(connection, userQuery.getUserDetail, [token]);
    let userDetail = result[0];

    res.render("doneLogin", {
      id: token,
      userDetail,
    });
    return;
  } catch (e) {
    res.send("error when query");
  }
};

let member = {
  getMember,
};

export default member;
