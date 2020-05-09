let getAllCoinNotActive = `select * from 
phapchung.infocoin
where active = false;
`;

let getUserDetail = `
  select * from
  phapchung.user
  where name = ? ;
`;

let querylogin = {
  getAllCoinNotActive,
  getUserDetail,
};

export default querylogin;
