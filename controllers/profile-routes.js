const router = require("express").Router();
const User = require("../models/User");
const Group = require("../models/Group");

router.get("/", async (req, res) => {
  try {
      let allUserGroups;
      let noGroup;
      if (req.session.user.groupId) {
        let allCurUserNGroup = await Group.findAll ({
          where: {
            id: req.session.user.groupId,
          },
        });
        console.log(allCurUserNGroup)
        console.log(noGroup)
        allUserGroups = allCurUserNGroup.map((group) =>
          group.get({plain: true})
          );
          noGroup = false;
      };

      res.render("profile", {
        user: req.session.user, // pasing user data for handlebars profile
        loggedIn: req.session.loggedIn,
        allUserGroups,
        noGroup,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
module.exports = router;

