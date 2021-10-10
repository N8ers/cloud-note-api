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
      title TEXT,
      user_id INT NOT NULL,
      FOREIGN KEY (user_id)
        REFERENCES users (id)
    );
  `);

  await knex.schema.raw(`
    INSERT INTO notes (note, title, user_id)
    VALUES
      ('take out trash', 'goon note 1', 1),
      ('consider apple', 'joe note 1', 2),
      ('forget all bad', 'cat note 1', 3),
      ('await sign fix', 'n8 note 1', 4)
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
