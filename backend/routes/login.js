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
      req.session.role = account.role;
      console.log("Cookie set successfully");
      res.json({ message: "Login successful" });
    } else {
      // Account not found
      res.status(400).send("Error 400: Email or Password does not match our records, please check the email and password.");
    }
  });

  return router;
};