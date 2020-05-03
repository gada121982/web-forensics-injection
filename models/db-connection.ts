import mysql from "mysql";

let pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.HOST,
  user: process.env.USER,
  port: 3306,
  database: process.env.DATABASE,
});

export default pool;
