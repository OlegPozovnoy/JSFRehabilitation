const express = require("express");
const app = express.Router();

const pageRoutes = require("./routes/pages.js");
const blogRoutes = require("./routes/blogs");
//console.log("routes.js:");
//console.log(pageRoutes);
app.use("/", pageRoutes);
app.use("/blogs", pageRoutes);
module.exports = app;
