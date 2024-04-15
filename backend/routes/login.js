const router = require("express").Router();
const login = require("../models/login");
const { validatePassword } = require("../models/validatePassword");

module.exports = db => { 
     router.post("/login", async (req, res) => {
      let account = await login.findByEmail(db, "users", req.body.email);
      let userType = 'user';
      if (!account) {
        account = await login.findByEmail(db, "organizations", req.body.email);
        userType = 'organization';
      }
      if (account) {
        const passwordCheck = await validatePassword(db, account.role, account.id, req.body.password);
        if (passwordCheck) {
          req.session.userId = account.id;
          req.session.name = account.first_name;
          req.session.role = account.role;
          return res.status(200).json({ success: true, message: "login successful", first_name: account.first_name, userType: userType})
        }
      }
      // Account not found or password incorrect
      res.status(400).json("Error 400: Email or Password does not match our records, please check the email and password.");
    });
  
  router.post("/logout", async (req, res) => {
    req.session = null
    res.status(200).json({success: true, message: "Logout successful"});
  });
  return router;
 };