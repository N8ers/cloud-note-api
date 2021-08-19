///////////////////////////////////////////////////////
// destroy all existing tables and replant all seeds //
///////////////////////////////////////////////////////

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

  const users = await knex("users")
    .insert([
      { user_name: "Goon" },
      { user_name: "Joe" },
      { user_name: "Tsuki" },
      { user_name: "N8" },
    ])
    .returning("*");
  console.log("users ", users);

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

  const notes = await knex("notes")
    .insert([
      { note: "take out trash", user_id: 1 },
      { note: "consider apple", user_id: 2 },
      { note: "forget all bad", user_id: 3 },
      { note: "await sign fix", user_id: 4 },
    ])
    .returning("*");
  console.log("notes ", notes);
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
