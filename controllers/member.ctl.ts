import { poolGetConnection, query } from "../utils/convertAsyncAwait";
import { Request, Response, NextFunction } from "express";
import userQuery from "../models/user.query";
import coinQuery from "../models/coin.query";
import pool from "../models/db-connection";
import queryCoin from "../models/coin.query";

/**
 * GET /user/member
 */
let getMember = async (req: Request, res: Response, next: NextFunction) => {
  let level;
  let connection;
  let coinListNotActive;
  let token = req.signedCookies.access_token;

  if (!token) {
    res.redirect("/login");
  }
};

let member = {
  getMember,
};

export default member;
