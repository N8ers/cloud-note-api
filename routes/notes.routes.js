const router = require("express").Router();
const { development } = require("../knexFile");
const knex = require("knex")(development);

router.get("/", async (req, res) => {
  const result = await knex.raw("SELECT * FROM notes;");
  const notes = result.rows;
  res.send(notes);
});

module.exports = router;
