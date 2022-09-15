//routes for home page
const router = require("express").Router();
const { User, Group } = require("../../models");

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

    res.render("homepage", {
      allGroups,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
