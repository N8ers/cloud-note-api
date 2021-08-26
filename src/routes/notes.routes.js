const router = require("express").Router();

// const { verifyPostBody } = require("../controllers/users.controller");

const { createGenericRoutes } = require("../helpers/genericRouteBuilder");

const genericRoutesToMake = ["getAll", "getById"];
const tableToQuery = "notes";
createGenericRoutes(genericRoutesToMake, tableToQuery, router);

module.exports = router;
