//routes for home page
const router = require("express").Router();
const { Group, User } = require("../models");
router.get("/", async (req, res) => {
  try {
    // This is where we determeine what page to render for the user.
    // If there is an session we will render map
    // req.session is the cookie session, and loggedIn/User in the session determines if we are logged in or not. 
    if (req.session && req.session.loggedIn) {

      let currentUserGroup; // This will hold the group if there is an groupId.
      if (req.session.user.groupId) {
        currentUserGroup = await Group.findOne({
          where: {
            id: req.session.user.groupId,
          },
        });
      }

      //getting all user groups
      let allUserGroups; // this will hold 
      let noGroup;
      if (req.session.user.groupId) {
        let allCurUserNGroup = await Group.findAll({
          where: {
            id: req.session.user.groupId,
          },
        });
        allUserGroups = allCurUserNGroup.map((group) =>
          group.get({ plain: true })
        );
        noGroup = false;
      }

      let allMems;
      let allGroups;
      if (req.session.user.groupId) {
        allGroups = await User.findAll({
          where: {
            groupId: req.session.user.groupId,
          },
        });
        allMems = allGroups.map((dish) => dish.get({ plain: true }));
      }

      //message stating the user has no groups
      let noGroupMessage;
      if (req.session.user.groupId === null) {
        noGroupMessage = "You currently have no groups.";
        noGroup = true;
      }


      // Here is the render that will use map.handlebars + main.handlebars to return an html.
      // Object is passed with various values that can be used in the handlebars
      // what is changed in this object must be changed in the handlebars.
      console.log('new render');
      res.render("map", {
        members: allMems ? allMems : null,
        groupName: currentUserGroup ? currentUserGroup.dataValues.name : null,
        "googleKey": process.env.GOOGLE_API,
        allUserGroups,
        noGroupMessage,
        noGroup,
        userInfo: req.session.user,
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
