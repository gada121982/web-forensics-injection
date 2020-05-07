import { Request, Response, NextFunction } from "express";
import pool from "../models/db-connection";
import querySignup from "../models/signup.query";
import { poolGetConnection, query } from "../utils/convertAsyncAwait";
import { PoolConnection, Pool } from "mysql";
/**
 * GET /signup
 * render signup page
 */
let getSignup = (req: Request, res: Response, next: NextFunction): void => {
  res.render("signup");
};

/**
 * POST /signup
 * save user account into database, and redirect to login page
 *
 * table: phapchung.user
 * value: (name, pwd, level)
 */
let postSignup = async (req: Request, res: Response, next: NextFunction) => {
  let { username, password } = req.body;
  let connection = await poolGetConnection(pool).catch(console.log);

  //check if username exists.
  let checkUserExist = await query(
    connection,
    querySignup.checkOverloadUserId,
    [username]
  ).catch(console.log);

  // check if that username not exist => save this user
  if (checkUserExist[0].count === 0) {
    const fields = [[username, password, false]];
    try {
      let saveuser = await query(connection, querySignup.saveUser, [fields]);
      res.send(saveuser);
    } catch (e) {
      if (e) throw e;
    }
  } else {
    res.send("user exist");
  }
};
let login = {
  getSignup,
  postSignup,
};

export default login;
