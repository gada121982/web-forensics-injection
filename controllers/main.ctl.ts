import { Request, Response } from "express";

/**
 * GET /
 */
let main = (req: Request | any, res: Response): void => {
  let token = req.signedCookies.access_token;
  if (token) {
    res.redirect("/user/member");
  }
  res.render("index");
};

export { main };
