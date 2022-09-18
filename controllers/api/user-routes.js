const router = require("express").Router();
const User = require("../../models/User.js");

// See ALL users
router.get("/", (req, res) => {
  // Get all books from the book table
  User.findAll().then((userData) => {
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

// TODO - create a router.get for /getCurrentGroupId or something like it.

// TODO - create a router.put to update user for current groupId.
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

// TODO - create a router.put to leave group? Or should this be combined with the top with an option of 0/Null?

router.get("/allGroups/:id", async (req, res) => {
  try {
    const groupData = await Group.findAll({
      where: { id: req.params.id },
      attributes: ["id", "name"],
    });
    const allGroups = groupData.get({ plain: true });
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
