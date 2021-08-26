const { development, test } = require("../knexFile");

let knex = require("knex")(development);

if (process.env.NODE_ENV === "test") {
  knex = require("knex")(test);
}

module.exports = knex;
