const router = require("express").Router();

const { createGenericRoutes } = require("../helpers/genericRouteBuilder");

const genericRoutesToMake = ["getAll", "getById"];
const tableToQuery = "users";
createGenericRoutes(genericRoutesToMake, tableToQuery, router);

module.exports = router;
