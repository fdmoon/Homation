const router = require("express").Router();
const houseRoutes = require("./houses");
const sensorRoutes = require("./sensors");
const randomRoutes = require("./randoms");

// routes to access database
router.use("/houses", houseRoutes);
router.use("/sensors", sensorRoutes);

// routes to create random values
router.use("/randoms", randomRoutes);

module.exports = router;

