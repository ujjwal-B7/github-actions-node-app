const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello from render.com");
});

app.get("/test", (req, res) => {
  res.status(200).send("Test running...");
});

module.exports = app;
