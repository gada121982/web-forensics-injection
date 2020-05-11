import { Request, Response } from "express";
import pool from "../models/dbConnection";
import querySignup from "../models/signup.query";
import { poolGetConnection, query } from "../utils/convertAsyncAwait";

let respondMessage: Object = {
  addUserDone: Boolean,
  errorUserExist: Boolean,
};

/**
 * GET /signup
 * render signup page
 */
let getSignup = (req: Request, res: Response): void => {
  respondMessage = {
    addUserDone: false,
    errorUserExist: false,
  };
  res.render("signup", respondMessage);
};

/**
 * POST /signup
 * save user account into database, then redirect to login page
 */
let postSignup = async (req: Request, res: Response) => {
  let { username, password } = req.body;
  let connection = await poolGetConnection(pool).catch(console.log);
  let checkUserExist: any;

  //check if username exists.
  try {
    checkUserExist = await query(connection, querySignup.checkOverloadUserId, [
      username,
    ]);
  } catch (e) {
    if (e) {
      res.send(e);
    }
  }

  // check if that username not exist => save this user
  if (checkUserExist[0].count === 0) {
    const fields = [[username, password, false]];
    try {
      await query(connection, querySignup.saveUser, [fields]);

      respondMessage = {
        addUserDone: true,
        errorUserExist: false,
      };
      res.render("signup", respondMessage);
    } catch (e) {
      if (e) res.send(e);
    }
  } else {
    respondMessage = {
      addUserDone: false,
      errorUserExist: true,
    };
    res.render("signup", respondMessage);
  }
};

let login = {
  getSignup,
  postSignup,
};

export default login;
