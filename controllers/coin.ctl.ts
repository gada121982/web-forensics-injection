import { poolGetConnection, query } from "../utils/convertAsyncAwait";
import { Request, Response } from "express";
import pool from "../models/dbConnection";
import logQuery from "../models/log.query";
import queryCoin from "../models/coin.query";

/**
 * /coin/active/:idcoin
 */
let activeCoin = async (req: Request, res: Response) => {
  let connection;
  let idcoin = req.params.idcoin;
  let token = req.signedCookies.access_token; // id user
  let ip = req.clientIp;
  let coinDetail;

  try {
    connection = await poolGetConnection(pool).catch(console.log);
  } catch (e) {
    res.send("connect to dbs was failed");
  }

  try {
    let result = await query(connection, queryCoin.getCoinById, [idcoin]);
    coinDetail = result[0];
  } catch (e) {
    res.send({ e });
  }
  // insert log
  try {
    let feild = [[ip, coinDetail.price, token, idcoin]];
    await query(connection, logQuery.insertLogGetCoin, [feild]);
    await query(connection, queryCoin.updateActiveCoin, [idcoin]);
    res.render("detailCoin", {
      coinDetail,
      id: token,
    });
  } catch (error) {
    res.send(error);
  }
};

let coin = {
  activeCoin,
};

export default coin;
