const router = require("express").Router();
const houseRoutes = require("./houses");
const roomRoutes = require("./rooms");
const sensorRoutes = require("./sensors");

// routes
router.use("/houses", houseRoutes);
router.use("/rooms", roomRoutes);
router.use("/sensors", sensorRoutes);

module.exports = router;

