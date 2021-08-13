const router = require("express").Router();
const { development } = require("../knexFile");
const knex = require("knex")(development);

router.get("/", async (req, res) => {
  const users = await knex.select("*").from("users");
  res.send(users);
});

module.exports = router;
