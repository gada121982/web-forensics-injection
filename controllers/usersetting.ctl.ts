import { poolGetConnection, query } from "../utils/convertAsyncAwait";
import { Request, Response } from "express";
import pool from "../models/dbConnection";
import userQuery from "../models/user.query";
import coinQuery from "../models/coin.query";

/**
 * get /manage
 */

let getUserSetting = async (req: Request, res: Response) => {
  let connection;
  let token = req.signedCookies.access_token;
  let messageCoin = undefined;
  // get pool connection
  try {
    connection = await poolGetConnection(pool).catch(console.log);
  } catch (e) {
    res.send("connect to dbs was failed");
  }

  try {
    let result = await query(connection, userQuery.getUserDetail, [token]);
    let userDetail = result[0];
    res.render("manageUser", {
      id: token,
      userDetail,
      inform: {
        status: undefined,
        messagePwd: "",
        messageCoin,
      },
    });
  } catch (e) {
    res.send("error when query 1");
  }
};

/**
 * POST /manage/changepassword
 */
let changepassword = async (req: Request, res: Response) => {
  let { oldpassword, newpassword } = req.body;
  let token = req.signedCookies.access_token;
  let connection;
  let userPassword;
  let userDetail;
  let updateFor = [newpassword, token];

  try {
    connection = await poolGetConnection(pool).catch(console.log);
  } catch (e) {
    res.send("connect to dbs was failed");
  }

  try {
    let result = await query(connection, userQuery.getUserDetail, [token]);
    userPassword = result[0].pwd;
    userDetail = result[0];
    // check old password
    if (userPassword === oldpassword) {
      try {
        await query(connection, userQuery.updatePassword, updateFor);
        res.render("manageUser", {
          id: token,
          userDetail,
          inform: {
            status: true,
            messagePwd: "Change password succesful",
            result: true,
          },
        });
        return;
      } catch (e) {
        res.send("error when query at setting user");
        return;
      }
    }
    res.render("manageUser", {
      id: token,
      userDetail,
      inform: {
        status: true,
        message: "old password not valid",
        result: false,
      },
    });
  } catch (e) {
    res.send("error when query");
  }
};
/**
 * POST /manage/adcoin
 */
let addcoin = async (req: Request, res: Response) => {
  let connection;
  let updateCoinStatus;
  let rangePrice: Array<Number> = [200, 400, 1000];
  let token = req.signedCookies.access_token;
  let { price, seri, pin } = req.body;
  let priceNumberType = Number(price);

  if (rangePrice.includes(priceNumberType))
    if (seri.length === 8 && pin.length === 8) {
      try {
        connection = await poolGetConnection(pool).catch(console.log);
      } catch (error) {
        res.send("connect to dbs was failed");
      }

      try {
        let result = await query(connection, userQuery.addCoin, [price, token]);
        updateCoinStatus = result.affectedRows;

        if (updateCoinStatus) {
          const fields = [[seri, pin, priceNumberType, false]];
          try {
            await query(connection, coinQuery.insertCoin, [fields]);

            res.redirect("/manage");
            return;
          } catch (error) {
            res.send(error);
            return;
          }
        }
        res.send("update coin fail");
      } catch (error) {
        res.send(error);
        return;
      }

      return;
    }
  res.redirect("/manage");
};

let logout = async (req: Request, res: Response) => {
  res.clearCookie("access_token").redirect("/");
};

let usersetting = {
  getUserSetting,
  changepassword,
  addcoin,
  logout,
};

export default usersetting;
