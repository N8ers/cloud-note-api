const router = require("express").Router();
// const knex = require("../../config/config");

const { createGenericRoutes } = require("../helpers/genericRouteBuilder");
const { postUser } = require("../controllers/users.controller");

const genericRoutesToMake = ["getAll", "getById"];
const tableToQuery = "users";
createGenericRoutes(genericRoutesToMake, tableToQuery, router);

router.post("/", async (req, res) => {
  const { result, status } = await postUser(req.body);
  res.status(status).send(result);
});

module.exports = router;
