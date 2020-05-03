import express, { Application, Request, Response } from "express";
import pool from "../models/index";

let main = (req: Request | any, res: Response): void => {
  pool.query("select * from phapchung.Persons", (error, result, feilds) => {
    if (error) throw error;

    console.log(result);
  });
  res.render("index");
};

export { main };
