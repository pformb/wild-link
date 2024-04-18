const router = require("express").Router();
const jwt = require("jsonwebtoken");
const login = require("../models/login");
const { validatePassword } = require("../models/validatePassword");

module.exports = db => { 
     router.post("/login", async (req, res) => {
      let account = await login.findByEmail(db, "users", req.body.email);
      if (!account) {
        account = await login.findByEmail(db, "organizations", req.body.email);
      }
      if (account) {
        const passwordCheck = await validatePassword(db, account.role, account.id, req.body.password);
        if (passwordCheck) {
          const token = jwt.sign(
            {
              userId: account.id,
              role: account.role,
              first_name: account.first_name,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "24h" }
          );
          res.cookie('token', token, { httpOnly: true, secure: false, maxAge: 86400000 });
          return res.status(200).json({
            success: true,
            message: "Login successful",
            token: token,
            first_name: account.first_name,
          });
        }
      }
      // Account not found or password incorrect
      res.status(400).json("Error 400: Email or Password does not match our records, please check the email and password.");
    });
  
  router.post("/logout", async (req, res) => {
    res.cookie("token", "", { expires: new Date(0) });
    res.status(200).json({success: true, message: "Logout successful"});
  });
  return router;
 };