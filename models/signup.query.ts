let checkOverloadUserId = `
    select count(name)
    as count
    from phapchung.user
    where name = ?
`;
let saveUser = `
    insert into phapchung.user (name, pwd, level)
    value ?;
`;

let query = {
  saveUser,
  checkOverloadUserId,
};

export default query;
