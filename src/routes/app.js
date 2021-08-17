const express = require("express");

const routes = {
  user: require("./users.routes"),
  note: require("./notes.routes"),
};

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use("/users", routes.user);
app.use("/notes", routes.note);

module.exports = { app };
