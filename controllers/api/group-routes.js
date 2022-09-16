const router = require("express").Router();
const { User } = require("../../models");
const Group = require("../../models/Group.js")

// GET group data on homepage for user
router.get("/", async (req, res) => {
  try {
    const groupData = await Group.findAll({
      include: [
        {
          model: Group,
          attributes: ["name"],
        },
      ],
    });
    const allGroups = groupData.map((groups) => groups.get({ plain: true }));
    res.render("map", {
      allGroups,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET group data by id, shared users from group
router.get("/:id", async (req, res) => {
  // Redirect the user to the login page if not logged in
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    // If the user is logged in, allow them to view groups by id
    try {
      console.log(Group);
      const groupsData = await Group.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ["id", "userName", "longitude", "latitude"],
          },
        ],
      });
      const group = groupsData.get({ plain: true });
      res.render("map", { group, loggedIn: req.session.loggedIn });
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
