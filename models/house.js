const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema({
    owner: { type: String, required: true },
    address: { type: String, required: true },
    layout: String,
    created: { type: Date, default: Date.now },
    sensors: [
        {
            type: Schema.Types.ObjectId,
            ref: "Sensor"
        }
    ]
});

const House = mongoose.model("House", houseSchema);

module.exports = House;

