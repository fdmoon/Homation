const router = require("express").Router();
const sensorsController = require("../../controllers/sensorsController");

// Matches with "/api/sensors"
router.route("/")
    .get(sensorsController.findAll)
    .post(sensorsController.create);

// Matches with "/api/sensors/:id"
router
    .route("/:id")
    .get(sensorsController.findById)
    .put(sensorsController.update)
    .delete(sensorsController.remove);

module.exports = router;

