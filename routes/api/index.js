const router = require("express").Router();
const houseRoutes = require("./houses");
const sensorRoutes = require("./sensors");
const otherRoutes = require("./others");

// routes to access data
router.use("/houses", houseRoutes);
router.use("/sensors", sensorRoutes);
router.use("/others", otherRoutes);

module.exports = router;

