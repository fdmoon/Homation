const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema({
    owner: { type: String, required: true },
    address: { type: String, required: true },
    layout: String,
    date: { type: Date, default: Date.now },
    rooms: [
        {
            type: Schema.Types.ObjectId,
            ref: "Room"
        }
    ]
});

const House = mongoose.model("House", houseSchema);

module.exports = House;

