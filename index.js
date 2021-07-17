const express = require("express");

const { development } = require("./knexFile");
const knex = require("knex")(development);

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello Nathan!");
});

async function init() {
  // check that we can query db
  const users = await knex.select(1).from("users").limit(1);

  if (users && users.length) {
    app.listen(port, () => {
      console.log(
        `Hi Nathan! Server is running on http://localhost:${port} :)`
      );
    });
  } else {
    console.log("connection to db failed, process exited");
    process.exit(1);
  }
}

init();
