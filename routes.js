const express = require("express");
const app = express.Router();

const pageRoutes = require("./routes/pages.js");
//console.log("routes.js:");
//console.log(pageRoutes);
app.use("/", pageRoutes);

module.exports = app;
