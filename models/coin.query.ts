let getAllCoinNotActive = `select * from 
phapchung.infocoin
where active = false;
`;

let queryCoin = {
  getAllCoinNotActive,
};

export default queryCoin;
