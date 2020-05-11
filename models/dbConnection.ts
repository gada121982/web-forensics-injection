import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

let pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.host || "localhost",
  port: 3306,
  user: process.env.user || "root",
  password: process.env.pwd,
  database: process.env.database,
});

export default pool;
