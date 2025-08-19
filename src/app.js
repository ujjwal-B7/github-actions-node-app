const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.status(200).send("Test running...");
});

module.exports = app;
