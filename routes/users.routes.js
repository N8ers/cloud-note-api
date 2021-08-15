const router = require("express").Router();
const { development } = require("../knexFile");
const knex = require("knex")(development);

router.get("/", async (req, res) => {
  const result = await knex.raw("SELECT * FROM users;");
  const users = result.rows;
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const result = await knex.raw("SELECT * FROM users WHERE id = :id;", {
    id: req.params.id,
  });
  const user = result.rows;
  res.send(user);
});

module.exports = router;
