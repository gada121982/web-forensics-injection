import mysql from "mysql";

let pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.host || "localhost",
  port: 3306,
  user: process.env.user || "root",
  database: process.env.database || "phapchung",
});

export default pool;
