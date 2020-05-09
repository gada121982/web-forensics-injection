import { poolGetConnection, query } from "../utils/convertAsyncAwait";
import { Request, Response, NextFunction } from "express";
import pool from "../models/db-connection";
import queryCoin from "../models/coin.query";

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

    res.status(200).render("admin-coin", {
      id: token,
      coinListNotActive,
    });
  } catch (e) {
    res.send({ e });
  }
};

let admin = {
  getAdmin,
};

export default admin;
