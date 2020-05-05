import express, { Application, Request, Response } from "express";
import pool from "../models/db-connection";

let main = (req: Request | any, res: Response): void => {
  console.log("user request");
  res.render("index");
};

export { main };
