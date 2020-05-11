import { poolGetConnection, query } from "../utils/convertAsyncAwait";
import { Request, Response, NextFunction } from "express";
import userQuery from "../models/user.query";
import pool from "../models/dbConnection";

let authMember = async (req: Request, res: Response, next: NextFunction) => {
  let connection;
  let token = req.signedCookies.access_token;

  if (!token) {
    res.redirect("/login");
  }

  // get connection
  try {
    connection = await poolGetConnection(pool).catch(console.log);
  } catch (e) {
    res.send("connect to dbs was failed");
  }

  try {
    let checkUser = await query(connection, userQuery.checkMemberExist, [
      token,
    ]);

    if (checkUser[0].userExist) {
      next();
      return;
    }
    res.redirect("/login");
  } catch (e) {
    res.send("error when query");
  }
};

export default authMember;
