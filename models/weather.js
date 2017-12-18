const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
    name: String,
    date: String,
    day: String,
    observationtime: String,
    temperature: String,
    skytext: String,
    humidity: String,
    winddisplay: String,
    imageUrl: String,
    forecast: Array
});

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;

