const router = require("express").Router();
const login = require("../models/login");

module.exports = db => { 
  router.post("/login", async (req, res) => {
    let account = await login.findByEmail(db, "users", req.body.email);
    if (!account) {
      account = await login.findByEmail(db, "organizations", req.body.email);
    }
    if (account) {
      res.json({ exists: true });
    } else {
      // Account not found
      res.status(404).json({ exists: false, message: "Account not found." });
    }
  });

  return router;
};