const knex = require("../../config/config");

// available options: ['getAll', 'getById', 'deleteById']

function createGenericRoutes(routes, table, router) {
  for (let route of routes) {
    if (route === "getAll") {
      router.get("/getAll", async (req, res) => {
        const result = await knex().select("*").from(table);
        res.status(200).send(result);
      });
    }

    if (route === "getAllSlow") {
      router.get("/slow", async (req, res) => {
        const result = await knex().select("*").from(table);
        setTimeout(() => res.status(200).send(result), 1500);
      });
    }

    if (route === "getById") {
      router.get("/note/:id", async (req, res) => {
        const result = await knex
          .select("*")
          .from(table)
          .where({ id: req.params.id });
        res.status(200).send(result);
      });
    }

    // if (route === "deleteById") {
    //   router.delete("/", async (req, res) => {
    //     const result = await knex
    //       .where({ id: req.params.id })
    //       .del()
    //       .returning("*");
    //     res.status(200).send(result);
    //   });
    // }
  }
}

module.exports = { createGenericRoutes };
