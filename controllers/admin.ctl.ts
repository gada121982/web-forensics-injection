import { poolGetConnection, query } from "../utils/convertAsyncAwait";
import { Request, Response, NextFunction } from "express";
import pool from "../models/dbConnection";
import queryCoin from "../models/coin.query";
import userQuery from "../models/user.query";
import logQuery from "../models/log.query";

/**
 * GET /user/admin
 */
let getAdmin = async (req: Request, res: Response, next: NextFunction) => {
  let connection;
  let coinListNotActive;
  let token = req.signedCookies.access_token;

  // get pool connection
  try {
    connection = await poolGetConnection(pool).catch(console.log);
  } catch (e) {
    res.send("connect to dbs was failed");
  }
  // get all coin
  try {
    coinListNotActive = await query(connection, queryCoin.getAllCoinNotActive);

    res.status(200).render("adminCoin", {
      id: token,
      coinListNotActive,
    });
  } catch (e) {
    res.send({ e });
  }
};

/**
 * GET /user/admin/abcxyz123
 */
let getLog = async (req: Request, res: Response, next: NextFunction) => {
  let connection;
  let token = req.signedCookies.access_token;
  let userDetail;

  try {
    connection = await poolGetConnection(pool).catch(console.log);
  } catch (e) {
    res.send("connect to dbs was failed");
  }

  try {
    let result = await query(connection, userQuery.getUserDetail, [token]);
    userDetail = result[0];
  } catch (error) {
    res.send({ error });
  }

  try {
    let allLog = await query(connection, logQuery.getAllLog);
    res.render("adminLog", {
      allLog,
    });
  } catch (error) {
    res.send({ error });
  }
};

let admin = {
  getAdmin,
  getLog,
};

export default admin;
