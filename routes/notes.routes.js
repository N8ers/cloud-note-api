const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("notes route test");
});

module.exports = router;
