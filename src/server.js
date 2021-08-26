const knex = require("../config/config");

const app = require("./routes/app");
const PORT = process.env.PORT || 4000;

async function init() {
  // check that we can query db
  const users = await knex.select(1).from("users").limit(1);

  if (users && users.length) {
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } else {
    console.log("connection to db failed, process exited");
    process.exit(1);
  }
}

init();
