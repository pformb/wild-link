// User routes

const router = require("express").Router();
const bcrypt = require("bcrypt");
const users = require("../models/users");
const { authToken } = require("../middleware/authToken");

const saltRounds = 10;

module.exports = (db) => {
  ///GET REQUESTS///

  //GET USER BY ID
  router.get("/users/:userId", authToken, async (req, res) => {
    const userId = req.params.userId;
    console.log('userId:', userId);
    const userData = await users.getUser(db, userId);
    console.log('userData:', userData);
    if (userData.length === 0) {
      return res.status(404).json({message: "User Not Found"});
    }
    console.log('userData:', userData);
    res.json(userData); //1st user obj not array of user objs
  });     

  ///POST REQUESTS///

  //CREATE USER
router.post("/register", async (req, res) => {
  const userData = req.body;
  if (!userData || !userData.password) {
    return res.status(400).json({message: "Invalid Request: Missing user password or data"});
  }
  const password = userData.password;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await users.registerUser(db, userData, hashedPassword);
    res.status(200).json({message:"User Created"});
  } catch {
    res.status(500).json({message: "Server Error: unable to create user"});
  }
});

  //Edit USER
  router.patch("/users/:userId", authToken, async (req, res) => {
    const userId = req.params.userId;
    let { userData } = req.body;
    let password = userData.password;
    try {
      // If Password is updated
      if (password) {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        userData.password = hashedPassword;
      }
      await users.updateUser(db, userId, userData);
      res.status(200).json({message: "User Updated"});
    } catch {
      res.status(500).json({message: "Server Error: unable to update user"});
    }
  });

  return router;
};