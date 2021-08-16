const { development } = require("../knexFile");
const knex = require("knex")(development);

// available options: ['getAll', 'getById']

function createGenericRoutes(routes, table, router) {
  for (let route of routes) {
    if (route === "getAll") {
      router.get("/", async (req, res) => {
        const result = await knex().select("*").from(table);
        res.send(result);
      });
    }

    if (route === "getById") {
      router.get("/", async (req, res) => {
        const result = await knex
          .select("*")
          .from(table)
          .where({ id: req.params.id });
        res.send(result);
      });
    }
  }
}

module.exports = { createGenericRoutes };
