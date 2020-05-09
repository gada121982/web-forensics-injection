/**
 * TIP
 * Convert callback to promise .
 * All explain here
 * https://anonystick.com/blog-developer/mysql-nodejs-convert-callback-to-asyncawait-2020040361737963
 */
import { MysqlError, PoolConnection, Pool } from "mysql";

/**
 *
 * @param pool pool connection
 */
let poolGetConnection = async (pool: Pool): Promise<any> =>
  new Promise((resolve, reject) => {
    pool.getConnection((error: MysqlError, connection: PoolConnection) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(connection);
    });
  });

/**
 *
 * @param conn a connection was returned from pool.getConnection method
 * @param q query string
 * @param params params for query string
 */
let query = (conn: PoolConnection, q: any, params?: Array<any>): Promise<any> =>
  new Promise((resolve, reject) => {
    const handler = (error: any, result: any) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    };
    conn.query(q, params, handler);
  });

export { poolGetConnection, query };
