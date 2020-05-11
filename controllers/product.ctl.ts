import { Request, Response } from "express";
import { poolGetConnection, query } from "../utils/convertAsyncAwait";
import pool from "../models/dbConnection";
import userQuery from "../models/user.query";

/**
 * POST /product/order
 * decrease 300 $ for each request to this api
 */
let getOrder = async (req: Request, res: Response) => {
  let connection;
  let token = req.signedCookies.access_token;
  let productPrice = 300;
  let currentTotalCoinUser;

  try {
    connection = await poolGetConnection(pool);
  } catch (error) {
    res.send("error query in product");
    return;
  }

  try {
    let result = await query(connection, userQuery.getUserDetail, [token]);
    currentTotalCoinUser = result[0].totalcoin;

    if (currentTotalCoinUser > productPrice) {
      try {
        await query(connection, userQuery.updateUserCoin, [
          productPrice,
          token,
        ]);
        res.redirect("/user/member");
        return;
      } catch (error) {
        res.send("error query in product 1.1");
        return;
      }
    }
  } catch (error) {
    res.send("error query in product 1");
    return;
  }
};

let givecoin = {
  getOrder,
};

export default givecoin;
