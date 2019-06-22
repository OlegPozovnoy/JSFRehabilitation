// Our imported libraries
const express = require("express");
// Assigning Express to an app constant
const app = express();
// Creating our first route which is looking for requests
app.get(`/`, (req, res) => {
  // res is the response object
  // Our response
  res.send(`Home`);
});
// Creating our first route which is looking for requests
app.get(`/greeting`, (req, res) => {
  // Our response
  res.send(`Hey 'dere world!`);
});
// Starting our server on port 4000
let port = process.env.port || 4000;
app.listen(port, () => console.log(`Listening on ${port}`));
