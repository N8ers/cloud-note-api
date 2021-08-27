const { development } = require("../knexFile");

let knex = require("knex")(development);

module.exports = knex;
