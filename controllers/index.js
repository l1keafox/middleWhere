const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const profileRoutes = require("./profile-routes");

router.use("/profile", profileRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;