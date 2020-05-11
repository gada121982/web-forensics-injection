let getAllCoinNotActive = `
  select * from 
  phapchung.infocoin
  where active = false;
`;

let insertCoin = `insert into phapchung.infocoin (seri, keynumber, price, active) value ?;
`;

let getCoinById = `
  select * from phapchung.infocoin
  where id = ?
`;

let updateActiveCoin = `
  update phapchung.infocoin
  set active = true
  where id = ?
`;

let queryCoin = {
  getAllCoinNotActive,
  insertCoin,
  getCoinById,
  updateActiveCoin,
};

export default queryCoin;
