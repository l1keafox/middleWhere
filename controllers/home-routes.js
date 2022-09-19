//routes for home page
const router = require("express").Router();
const { Group, User } = require("../models");
router.get("/", async (req, res) => {
    try {
      // This is where we determeine what page to render for the user.
      // If there is an session we will render map 
      if(req.session && req.session.loggedIn){
        // Here we should make an api/group/id# request to grab info for the map.
        //

        
        let currentUserGroup;
        if(req.session.user.groupId){
          currentUserGroup = await Group.findOne({
            where: {
              id: req.session.user.groupId,
            },
          });
          }
        // let allGroups = await User.findAll({
        //   where:{
        //     groupId: req.session.user.groupId
        //   },
        // });
        // console.log(allGroups);
        res.render("map", {
//          allGroups,
          groupName:currentUserGroup? currentUserGroup.dataValues.name : null,
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
