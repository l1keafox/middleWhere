//routes for home page
const router = require("express").Router();
router.get("/", async (req, res) => {
    try {
      // This is where we determeine what page to render for the user.
        
      // If there is an session we will render map 
      if(req.session && req.session.loggedIn){

        res.render("map", {
//          allGroups,
          loggedIn: req.session.loggedIn,
        });
      } else {
        // If there is no session we will render Login.
        res.render("login");
        }

      } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
//use /utils/auth.js (getAuth) for any page that needs user to be logged in to access

module.exports = router;
