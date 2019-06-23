// Our imported libraries
const express = require("express");
// Assigning Express to an app constant
const app = express();
// Creating our first route which is looking for requests

const path = require("path");

// Body parser which will make reading request bodies MUCH easier
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/css", express.static("assets/stylesheets"));
app.use("/js", express.static("assets/javascripts"));
app.use("/images", express.static("assets/images"));
//console.log("app.js:");
//console.log(app);
require("dotenv").config();
// Connecting to MongoDB cluster with Mongoose
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI, {
    auth: {
      user: process.env.USERNAME,
      password: process.env.PASSWORD
    },
    useNewUrlParser: true
  })
  .catch(err => console.error(`ERROR: ${err}`));

//console.log(process.env.DB_USERNAME);
//console.log(process.env.DB_PASSWORD);
//console.log(process.env.DB_URI);

const routes = require("./routes.js");
app.use("/", routes);

// Starting our server on port 4000
let port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on ${port}`));
