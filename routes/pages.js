const router = require("express").Router();

const PagesController = require("../controllers/PagesController.js");

router.get(`/`, PagesController.show);
router.get(`/about`, PagesController.show);
router.get(`/contact`, PagesController.show);

module.exports = router;
