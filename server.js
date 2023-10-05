const config = require("./config");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the world of Containers on Azure Cloud!4");
});

app.listen(config.PORT, () => {
  console.log("Application started successfully on port: " + config.PORT);
});
