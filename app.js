// Our imported libraries
const express = require("express");
// Assigning Express to an app constant
const app = express();
// Creating our first route which is looking for requests

const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/css", express.static("assets/stylesheets"));
app.use("/js", express.static("assets/javascripts"));
app.use("/images", express.static("assets/images"));
//console.log("app.js:");
//console.log(app);

const routes = require("./routes.js");
app.use("/", routes);

// Starting our server on port 4000
let port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on ${port}`));
