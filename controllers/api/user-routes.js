const router = require("express").Router();
const User = require("../../models/User.js");
const Group = require("../../models/Group");

// See ALL users
router.get("/", (req, res) => {
  // User.findAll().then((userData) => {
  //   res.json(userData);
  // }); 
  console.log(req.session.user.id);
  User.findOne({
    where: {
      id: req.session.user.id,
    },
  }).then((userData) => {
    res.json(userData);
  });


});

// See ONE user
router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((userData) => {
    res.json(userData);
  });
});

// CREATE New User
router.post("/", async (req, res) => {
  try {
    const createUser = await User.create({
      userName: req.body.username,
      password: req.body.password,
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      //      groupId: groupID,
    });
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(createUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login User
router.post("/login", async (req, res) => {
  try {
    const loginUser = await User.findOne({
      where: {
        userName: req.body.userName,
      },
    });
    if (!loginUser) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = loginUser.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Invalid login credentials. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: loginUser, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET current group id --> do we need any other info besides the group id?
router.get("/currentGroup/:id", async (req, res) => {
  try {
    const currentGroupData = await User.findAll({
      where: { id: req.params.id },
      attributes: ["group_id"],
    });
    const currentGroup = currentGroupData.map((data) =>
      data.get({ plain: true })
    );
    res.status(200).json(currentGroup);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//update user for current groupId.
router.put("/:id", (req, res) => {
  User.update(
    {
      groupId: req.body.groupId,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedUser) => {
      // Sends the updated user as a json response
      res.json(updatedUser);
    })
    .catch((err) => res.json(err));
});

//user LEAVING group -- req.body.groupId needs to be null
router.put("/leaveGroup/:id", async (req, res) => {
  try {
    const deleteGroupData = User.update(
      { groupId: req.body.groupId },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    //this should return empty if groupId is set to null
    res.json(deleteGroupData);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.get("/allGroups/:id", async (req, res) => {
  try {
    const groupData = await Group.findAll({
      where: { id: req.params.id },
      attributes: ["id", "name"],
    });
    const allGroups = groupData.map((data) => data.get({ plain: true }));
    res.status(200).json(allGroups);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout User
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
