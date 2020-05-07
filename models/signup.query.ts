let checkOverloadUserId = `
    SELECT COUNT(name)
    AS count
    FROM phapchung.user
    WHERE name = ?
`;
let saveUser = `
    INSERT INTO phapchung.user (name, pwd, level)
    VALUES ?;
`;

let query = {
  saveUser,
  checkOverloadUserId,
};

export default query;
