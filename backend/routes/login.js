const router = require("express").Router();
const bcrypt = require("bcrypt");
const login = require("../models/login");

module.exports = db => { 
  router.post("/login", async (req, res) => {
    let account = await login.findByEmail(db, "users", req.body.email);
    if (!account) {
      account = await login.findByEmail(db, "organizations", req.body.email);
    }
    if (account && (await bcrypt.compare(req.body.password, account.password))) {
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