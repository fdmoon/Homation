const axios = require("axios");
const weather = require('weather-js');
const db = require("../models");

require('dotenv').config();

// const OwmApiKey = process.env.OWM_API_KEY;

// module.exports = city => {
//     setInterval(() => 
//         axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${OwmApiKey}`)
//             .then(res => {
//                 console.log(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${OwmApiKey}`);
//                 console.log(res.data);
//             })
//             .catch(err => {
//                 console.log(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${OwmApiKey}`);
//                 // console.log(err)
//             }),
//         5000);
// }

const weatherController = {
    load: function() {
        db.House
            .find({})
            .sort({ _id: 1 })
            .then(dbModel => {
                if(dbModel.length > 0) {
                    weather.find({search: dbModel[0].address, degreeType: 'F'}, function(err, result) {
                        if(err) throw err;
                
                        let weatherData = {
                            name: result[0].location.name,
                            date: result[0].current.date,
                            day: result[0].current.day,
                            observationtime: result[0].current.observationtime,
                            temperature: result[0].current.temperature,
                            skytext: result[0].current.skytext,
                            humidity: result[0].current.humidity,
                            winddisplay: result[0].current.winddisplay,
                            imageUrl: result[0].current.imageUrl,
                            forecast: result[0].forecast
                        };
                
                        db.Weather
                            .remove({})
                            .then(() => db.Weather.create(weatherData))
                            .then(dbModel => console.log(dbModel))
                            .catch(err => console.log(err));
                    });
                }
                else {
                    console.log("House information empty.");
                }
            })
            .catch(err => console.log(err));
    },
    readDB: function(req, res) {
        db.Weather
            .find(req.query)
            .sort({ _id: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    readAPI: function(req, res) {
        weather.find({search: req.params.city, degreeType: 'F'}, function(err, result) {
            if(err) return res.status(500).json(err);
            
            res.json({
                name: result[0].location.name,
                date: result[0].current.date,
                day: Strresult[0].current.day,
                observationtime: result[0].current.observationtime,
                temperature: result[0].current.temperature,
                skytext: result[0].current.skytext,
                humidity: result[0].current.humidity,
                winddisplay: result[0].current.winddisplay,
                imageUrl: result[0].current.imageUrl,
                forecast: result[0].forecast
            });
        });
    }
};

var timerId = setInterval(() => weatherController.load(), 300*1000);	// cf. clearInterval(timerId);

module.exports = weatherController;

