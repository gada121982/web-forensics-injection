import { poolGetConnection, query } from "../utils/convertAsyncAwait";
import { Request, Response } from "express";
import pool from "../models/db-connection";
import userQuery from "../models/user.query";

/**
 * get /manage
 */

let getUserSetting = async (req: Request, res: Response) => {
  let connection;
  let token = req.signedCookies.access_token;

  // get pool connection
  try {
    connection = await poolGetConnection(pool).catch(console.log);
  } catch (e) {
    res.send("connect to dbs was failed");
  }

  try {
    let result = await query(connection, userQuery.getUserDetail, [token]);
    let userDetail = result[0];

    res.render("manageuser", {
      id: token,
      userDetail,
      inform: {
        status: undefined,
        message: "",
      },
    });
  } catch (e) {
    res.send("error when query");
  }
};

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

  // check old password
  try {
    let result = await query(connection, userQuery.getUserDetail, [token]);
    userPassword = result[0].pwd;
    userDetail = result[0];
    if (userPassword === oldpassword) {
      try {
        await query(connection, userQuery.updatePassword, updateFor);
        res.render("manageuser", {
          id: token,
          userDetail,
          inform: {
            status: true,
            message: "Change password succesful",
            result: true,
          },
        });
        return;
      } catch (e) {
        res.send("error when query at setting user");
        return;
      }
    }
    res.render("manageuser", {
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

let addcoin = async (req: Request, res: Response) => {
  res.send("addcoin");
};

let usersetting = {
  getUserSetting,
  changepassword,
  addcoin,
};

export default usersetting;
