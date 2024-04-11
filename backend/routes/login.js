const router = require("express").Router();
const login = require("../models/login");
const { validatePassword } = require("../models/validatePassword");

module.exports = db => { 
  router.post("/login", async (req, res) => {
    let account = await login.findByEmail(db, "users", req.body.email);
    if (!account) {
      account = await login.findByEmail(db, "organizations", req.body.email);
    }
    const passwordCheck = await validatePassword(db, account.role, account.id, req.body.password) 
    if (account && passwordCheck) {
      req.session.userId = account.id;
      req.session.name = account.first_name;
      req.session.role = account.role;
      res.status(200).send("Login successful");
    } else {
      // Account not found
      res.status(400).send("Error 400: Email or Password does not match our records, please check the email and password.");
    }
  });
  
  router.post("/logout", async (req, res) => {
    req.session = null
    res.status(200).send("Logout successful");
  });
  return router;
};