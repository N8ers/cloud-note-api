////////////////////////////////////////////////////////
// destroy existing note table, repopulate note table //
////////////////////////////////////////////////////////

const knex = require("../../config/config");

async function seed() {
  await knex.schema.raw(`
    DROP TABLE IF EXISTS notes;
  `);

  // NATHAN: don't forget to add cascade later
  await knex.schema.raw(`
    CREATE TABLE notes (
      id serial PRIMARY KEY,
      note TEXT,
      user_id INT NOT NULL,
      FOREIGN KEY (user_id)
        REFERENCES users (id)
    );
  `);

  await knex.schema.raw(`
    INSERT INTO notes (note, user_id)
    VALUES
      ('take out trash', 1),
      ('consider apple', 2),
      ('forget all bad', 3),
      ('await sign fix', 4)
  `);

  const { rows } = await knex.schema.raw(`
      SELECT * FROM notes;
  `);

  console.log("result: ", rows);
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
