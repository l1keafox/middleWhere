const router = require("express").Router();
const User = require("../models/User");
const Group = require("../models/Group");

router.get("/", async (req, res) => {
  try {
    let userGroup;
    let noGroup;
    if (req.session.user.groupId) {
      //get groups if there is an active groupId
      let groupData = await Group.findAll({
        where: {
          id: req.session.user.groupId,
        },
        attributes: ["name"],
      });
      userGroup = groupData.map((group) => group.name);
      noGroup = false;
    }

    //set no group to true to properly render the info on the profile page
    if (req.session.user.groupId === null) {
      noGroup = true;
    }

    res.render("profile", {
      user: req.session.user, // pasing user data for handlebars profile
      userGroup,
      noGroup,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
