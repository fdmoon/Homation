const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: { type: String, required: true },
    created: { type: Date, default: Date.now },
    sensors: [
        {
            type: Schema.Types.ObjectId,
            ref: "Sensor"
        }
    ]
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;

