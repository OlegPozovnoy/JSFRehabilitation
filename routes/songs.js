// Our router module
const router = require("express").Router();
// Our controller
const SongsController = require("../controllers/songsController");
// Our routes
router.get(`/`, SongsController.index);
router.get(`/new`, SongsController.new);

router.get(`/band/:id`, SongsController.band);
router.get(`/album/:id`, SongsController.album);
router.get(`/year/:id`, SongsController.year);
router.get(`/genre/:id`, SongsController.genre);

router.get(`/:id/edit`, SongsController.edit);
router.get(`/:id`, SongsController.show);

router.post(`/`, SongsController.create);
router.post(`/update`, SongsController.update);
router.post(`/destroy`, SongsController.destroy);
// We have to export our changes
module.exports = router;
