const router = require("express").Router();
const { Group, User } = require("../../models");
// const sequelize = require("../../config/connection");

// GET group data to show user all their groups
router.get("/", async (req, res) => {
  try {
    const groupData = await Group.findAll({
      attributes: ["name"],
    });
    console.log(groupData);
    const allGroups = groupData.map((groupData) =>
      groupData.get({ plain: true })
    );
    console.log(allGroups);
    res.status(200).json(allGroups);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
console.log(Group);

// GET group data by id, shared users from group
router.get("/:id", async (req, res) => {
  // Redirect the user to the login page if not logged in
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    // If the user is logged in, allow them to view groups by id
    try {
      //can successfully get the data - need to fix sequelize.literal error
      const groupsData = await Group.findByPk(req.params.id, {
        include: [{ model: User }],
        attributes: {
          include: [
            "id",
            "name",
            "longitude",
            "latitude",
            // [
            //   sequelize.literal(
            //     "(SELECT AVG(longitude) FROM user WHERE user.groupId = group.id)"
            //   ),
            //   "centerLongitude",
            // ],
            // [
            //   sequelize.literal(
            //     "(SELECT AVG(latitude) FROM user WHERE user.groupId = group.id)"
            //   ),
            //   "centerLatitude",
            // ],
          ],
        },
      });

      const group = groupsData.get({ plain: true });
      res.status(200).json(group);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// Logout Group
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
