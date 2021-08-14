const router = require("express").Router();
const { development } = require("../knexFile");
const knex = require("knex")(development);

router.get("/", async (req, res) => {
  const result = await knex.raw("SELECT * FROM users;");
  const users = result.rows;
  res.send(users);
});

module.exports = router;
