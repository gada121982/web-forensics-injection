// import { poolGetConnection, query } from "../utils/convertAsyncAwait";
// import { Request, Response, NextFunction } from "express";
// import userQuery from "../models/user.query";
// import pool from "../models/db-connection";

// let authAdmin = async (req: Request, res: Response, next: NextFunction) => {
//   let level;
//   let connection;
//   let token = req.signedCookies.access_token;

//   if (!token) {
//     res.redirect("/login");
//   }

//   // get connection
//   try {
//     connection = await poolGetConnection(pool).catch(console.log);
//   } catch (e) {
//     res.send("connect to dbs was failed");
//   }

//   try {
//     let userDetail = await query(connection, userQuery.getUserDetail, [token]);
//     level = userDetail[0].level;

//     if (level) {
//       next();
//     }
//   } catch (e) {
//     res.send("error when query");
//   }
// };

// export default authAdmin;
