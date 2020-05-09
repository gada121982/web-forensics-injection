let getUserDetail = `
  select * from
  phapchung.user
  where id = ? ;
`;

let querylogin = {
  getUserDetail,
};

export default querylogin;
