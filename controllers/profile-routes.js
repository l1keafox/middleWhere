const router = require("express").Router();
//const User = require("../../models/User.js");

router.get("/", async (req, res) => {
    try {
      console.log('get stuff?');
      res.render("profile", {
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
module.exports = router;
