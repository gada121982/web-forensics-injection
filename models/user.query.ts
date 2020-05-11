let getUserDetail = `
  select * 
  from phapchung.user
  where id = ? ;
`;

let checkMemberExist = `
  select count(*) as userExist
  from phapchung.user
  where id = ?;
`;
let getPassword = `
  select pwd 
  from phapchung.user
  where id = ? ;
`;

let updatePassword = `
  update phapchung.user
  set pwd = ?
  where id = ?
`;

let addCoin = `
  update phapchung.user
  set totalcoin = totalcoin + ?
  where id = ?
`;

let querylogin = {
  getUserDetail,
  checkMemberExist,
  getPassword,
  updatePassword,
  addCoin,
};

export default querylogin;
