const express = require("express");
const bodyParser = require("body-parser");

const routes = {
  user: require("./users.routes"),
  note: require("./notes.routes"),
};

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use("/users", routes.user);
app.use("/notes", routes.note);

app.get("*", function (req, res) {
  res.status(404).send("route does not exist");
});

module.exports = app;
