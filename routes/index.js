const express = require("express");
const http = require("http");

const routes = {
  users: require("./users.routes"),
};

const app = express();
const server = http.createServer(app);

app.use("/users", routes.users);

module.exports = { server };
