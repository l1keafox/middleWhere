//routes for home page
const router = require("express").Router();
const { Group, User } = require("../models");
router.get("/", async (req, res) => {
  try {
    // This is where we determeine what page to render for the user.
    // If there is an session we will render map
    if (req.session && req.session.loggedIn) {

      let currentUserGroup;
      if (req.session.user.groupId) {
        currentUserGroup = await Group.findOne({
          where: {
            id: req.session.user.groupId,
          },
        });
      }

      //getting all user groups
      let allUserGroups;
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

      res.render("map", {
        members: allMems ? allMems : null,
        groupName: currentUserGroup ? currentUserGroup.dataValues.name : null,
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
