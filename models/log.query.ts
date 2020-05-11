let insertLogGetCoin = `insert into phapchung.log_getcoin
(ip, price, id_user, id_coin)
value ?`;

let getAllLog = `select phapchung.user.name , phapchung.log_getcoin.id_coin, phapchung.log_getcoin.date,
phapchung.log_getcoin.ip,  phapchung.log_getcoin.price
from phapchung.user inner join phapchung.log_getcoin
on phapchung.user.id = phapchung.log_getcoin.id_user;`;

let log = {
  insertLogGetCoin,
  getAllLog,
};
export default log;
