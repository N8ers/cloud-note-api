/////////////////////////////////////////////////////
// a migration to destroy/rebuild tables for tests //
/////////////////////////////////////////////////////

const { development } = require("../../knexFile");
const knex = require("knex")(development);

async function plantAllSeeds() {
  console.log("drop all tables");
  await knex.schema.dropTableIfExists("notes");
  await knex.schema.dropTableIfExists("users");

  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("user_name");
  });

  await knex.schema.createTable("notes", (table) => {
    table.increments("id");
    table.string("note");
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
  });
}

plantAllSeeds()
  .then(() => {
    console.log("seeding done");
    knex.destroy();
    process.exit();
  })
  .catch((error) => {
    console.log("error ", error);
    knex.destroy();
    process.exit();
  });
