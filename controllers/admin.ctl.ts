import { poolGetConnection, query } from "../utils/convertAsyncAwait";
import { Request, Response, NextFunction } from "express";
import userQuery from "../models/user.query";
import coinQuery from "../models/coin.query";
import pool from "../models/db-connection";
import queryCoin from "../models/coin.query";

/**
 * GET /user/admin
 */
let getAdmin = async (req: Request, res: Response, next: NextFunction) => {
  let level;
  let connection;
  let coinListNotActive;
  let token = req.signedCookies.access_token;

  if (!token) {
    res.redirect("/login");
  }
  // get pool connection
  try {
    connection = await poolGetConnection(pool).catch(console.log);
  } catch (e) {
    res.send("connect to dbs was failed");
  }

  // check privilege user
  try {
    let userDetail = await query(connection, userQuery.getUserDetail, [token]);
    level = userDetail[0].level;

    if (level) {
      // get all coin
      try {
        coinListNotActive = await query(
          connection,
          queryCoin.getAllCoinNotActive
        );

        res.status(200).render("admin-coin", {
          idUser: token,
          coinListNotActive,
        });
      } catch (e) {
        res.send({ e });
      }
      return;
    }
    res.send("user");
  } catch (e) {
    res.send("error when query");
  }
};

let admin = {
  getAdmin,
};

export default admin;
