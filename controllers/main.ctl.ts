import express, { Application, Request, Response } from "express";
import pool from "../models/db-connection";

let main = (req: Request | any, res: Response): void => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

    connection.query("select * from phapchung.user", (err, data, field) => {
      if (err) throw err;
      console.log(data);
    });
  });
  res.render("index");
};

export { main };
