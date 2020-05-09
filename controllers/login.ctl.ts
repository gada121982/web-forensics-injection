import { Request, Response, NextFunction } from "express";
import { poolGetConnection, query } from "../utils/convertAsyncAwait";
import queryLogin from "../models/login.query";
import pool from "../models/db-connection";

let respondMessage = {
  message: "",
};

let findUser: String = `select count(*) as checkvalid from phapchung.user where name=`;
// select id,level,totalcoin from phapchung.user where name='a' or 1=1 ; --
// a' or 1=1 ; --
// res.cookie()
// admin admin123

/**
 * GET /login
 */
let getLogin = (req: Request, res: Response, next: NextFunction): void => {
  res.render("login", { respondMessage });
};

/**
 * POST /login
 */
let postLogin = async (req: Request, res: Response, next: NextFunction) => {
  let userAccount = req.body;
  let connection = await poolGetConnection(pool).catch(console.log);
  let checkvalid;
  let dataUser: Array<any>;
  let lastestQuery =
    findUser +
    `'${userAccount.username}' and ` +
    `pwd='${userAccount.password}';`;

  try {
    checkvalid = await query(connection, lastestQuery);

    if (checkvalid[0].checkvalid !== 0) {
      try {
        dataUser = await query(connection, queryLogin.getUserDetail, [
          userAccount.username,
        ]);
        // format dataUser = [{level : 1}];
        // check level of user whether has admin privilege
        let level = dataUser[0].level;
        if (level) {
          res
            .cookie("access_token", dataUser[0].id, {
              signed: true,
              expires: new Date(Date.now() + 2 * 3600000),
            })
            .redirect("/user/admin");

          return;
        }
        // render normal user
        res
          .cookie("access_token", dataUser[0].id, {
            signed: true,
            expires: new Date(Date.now() + 2 * 3600000),
          })
          .redirect("/user/member");
      } catch (e) {
        res.send(e);
      }
    } else {
      respondMessage.message = "User account not valid, try again";
      res.render("login", {
        respondMessage,
      });
    }
  } catch (e) {
    if (e) {
      res.send(e);
    }
  }
};

let login = {
  getLogin,
  postLogin,
};
export default login;
