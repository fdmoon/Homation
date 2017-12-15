const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sensorSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    position: String,
    value: { type: Number, default: 0 },
    unit: String,
    watt: { type: Number, default: 60 },
    ontime: { type: Number, default: 0 },
    created: { type: Date, default: Date.now }
});

const Sensor = mongoose.model("Sensor", sensorSchema);

module.exports = Sensor;

