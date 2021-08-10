const express = require("express");
const http = require("http");

const routes = {
  user: require("./users.routes"),
  note: require("./notes.routes"),
};

const app = express();
const server = http.createServer(app);

app.use("/users", routes.user);
app.use("/notes", routes.note);

module.exports = { server };
