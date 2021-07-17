////////////////////////////////////////////////////////
// destroy existing note table, repopulate note table //
////////////////////////////////////////////////////////

const { development } = require("../knexFile");
const knex = require("knex")(development);

async function seed() {
  await knex.schema.dropTableIfExists("notes");

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

seed()
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
