///////////////////////////////////////////////////////
// destroy all existing tables and replant all seeds //
///////////////////////////////////////////////////////

const knex = require("../../config/config");

async function plantAllSeeds() {
  console.log("drop all tables");
  await knex.schema.dropTableIfExists("notes");
  await knex.schema.dropTableIfExists("users");

  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("user_name").notNullable();
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
    table.string("title");
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
      { note: "take out trash", title: "goon note 1", user_id: 1 },
      { note: "consider apple", title: "joe note 1", user_id: 2 },
      { note: "forget all bad", title: "cat note 1", user_id: 3 },
      { note: "await sign fix", title: "note 1", user_id: 4 },
      { note: "empty turtle shells", title: "another note", user_id: 4 },
      { note: "create lists", title: "to do", user_id: 4 },
      { note: "nothing", title: "cleaning list", user_id: 4 },
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
