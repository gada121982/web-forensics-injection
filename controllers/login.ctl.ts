import { Request, Response, NextFunction } from "express";
import pool from "../models/db-connection";

let getLogin = (req: Request, res: Response, next: NextFunction): void => {
  res.render("login");
};
let postLogin = (req: Request, res: Response, next: NextFunction): void => {
  let userAccount = req.body;
  res.send(userAccount);
};

let login = {
  getLogin,
  postLogin,
};
export default login;
