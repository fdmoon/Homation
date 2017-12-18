const router = require("express").Router();
const weatherController = require("../../controllers/weatherController");

// Matches routes starting with "/api/others"

router.route("/weather")
    .get(weatherController.readDB);

router.route("/graph").get(function(req, res) {
    const data = [];

    for (let x = 0; x <= 30; x++) {
        const random = Math.random();
        const temp = data.length > 0 ? data[data.length-1].y : 50;
        const y = random >= .45 ? temp + Math.floor(random * 20) : temp - Math.floor(random * 20);
        data.push({x,y})
    }
    
    res.json(data);
});

module.exports = router;

