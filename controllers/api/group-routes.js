const router = require("express").Router();
const { Group, User } = require("../../models");
const centerLocation = require("../../utils/center-location");

router.post("/", (req, res) => {
  console.log("Creating group",req.body.name,req.session.user.id, "is creator");
 
  Group.create({
    name: req.body.name,
  })
    .then((newGroup) => {

      console.log("created",newGroup.dataValues.id);
      User.update(
        {
          groupId: newGroup.dataValues.id,
        },
        {
          where: {
            id: req.session.user.id,
          },
        }
      ).then(()=>{
        res.json(newGroup);
      });

      
    })
    .catch((err) => {
      console.log("createdNOT",err);
      res.json(err);
    });
});

// GET group data to show all the users in the group
router.get("/allUsers/", async (req, res) => {
  try {
    const userData = await User.findAll({
      where: { groupId: req.session.user.groupId },
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    });
    const allUsers = userData.map((data) => data.get({ plain: true }));
    res.status(200).json(allUsers);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// getting group center location data
router.get("/", async (req, res) => {
  // Redirect the user to the login page if not logged in
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    //function that calculates center location
    console.log(req.session.user,"getting groupId",req.session.user.groupId === undefined);
    if(req.session.user.groupId === undefined){
      // TODO - need something better than this.
      console.log('return');
      res.status(200).json({});
      return;
    }
    console.log(req.session.user.groupId,"No group ID?");
    let results = await centerLocation(req.session.user.groupId);

    if (results === null) {
      res.status(500).json(err);
    } else {
      res.status(200).json(results);
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
