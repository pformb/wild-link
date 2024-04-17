const router = require("express").Router();


module.exports = () => { 
  router.get("/authenticate", async (req, res) => {
    if (req.session.userId) {
      res.json({
        isAuthenticated: true,
        userId: req.session.userId,
        name: req.session.name,
        role: req.session.role,
      });
    } else {
      res.json({ isAuthenticated: false });
    }
  });

  return router;

}