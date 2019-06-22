const express = require("express");
const app = express.Router();

const pageRoutes = require("./routes/pages.js");

app.use("/", pageRoutes);

module.exports = app;
