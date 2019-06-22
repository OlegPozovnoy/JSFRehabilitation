const router = require("express").Router();

router.get(`/`, (req, res) => {
  // res is the response object
  // Our response
  res.send(`Home`);
});
// Creating our first route which is looking for requests
router.get(`/greeting`, (req, res) => {
  // Our response
  res.send(`Hey 'dere world!`);
});

module.exports = router;
