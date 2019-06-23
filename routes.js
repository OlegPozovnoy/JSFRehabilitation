const express = require("express");
const app = express.Router();

const pageRoutes = require("./routes/pages");
const songRoutes = require("./routes/songs");
//console.log("routes.js:");
//console.log(pageRoutes);
app.use("/", pageRoutes);
app.use("/songs", songRoutes);
module.exports = app;
