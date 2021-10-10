const router = require("express").Router();

const { createGenericRoutes } = require("../helpers/genericRouteBuilder");
const {
  postNote,
  getNotesByUserId,
} = require("../controllers/notes.controller");

router.get("/getUserNotes", async (req, res) => {
  const { result, status } = await getNotesByUserId(req.body);
  res.status(status).send(result);
});

router.post("/", async (req, res) => {
  const { result, status } = await postNote(req.body);
  res.status(status).send(result);
});

const genericRoutesToMake = ["getAll", "getById"];
const tableToQuery = "notes";
createGenericRoutes(genericRoutesToMake, tableToQuery, router);

module.exports = router;
