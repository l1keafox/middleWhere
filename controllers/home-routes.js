//routes for home page
const router = require("express").Router();
router.get("/", async (req, res) => {
    try {
      res.render("homepage");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
module.exports = router;
