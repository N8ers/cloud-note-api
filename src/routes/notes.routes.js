const router = require("express").Router();

const { createGenericRoutes } = require("../helpers/genericRouteBuilder");
const { postNote } = require("../controllers/notes.controller");

const genericRoutesToMake = ["getAll", "getById"];
const tableToQuery = "notes";
createGenericRoutes(genericRoutesToMake, tableToQuery, router);

router.post("/", async (req, res) => {
  const { result, status } = await postNote(req.body);
  res.status(status).send(result);
});

module.exports = router;
