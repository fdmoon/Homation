const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the collection and inserts documents below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/homation_db",
    {
        useMongoClient: true
    }
);

const houseSeed = [
    {
        owner: "Felix and Neil",
        address: "UT at Austin",
        layout: "",
        date: new Date(Date.now()),
        rooms: []
    }
];

const roomSeed = [
    {
        name: "Living_Room",
        date: new Date(Date.now()),
        sensors: []
    },
    {
        name: "Room_1",
        date: new Date(Date.now()),
        sensors: []
    },
    {
        name: "Room_2",
        date: new Date(Date.now()),
        sensors: []
    },
    {
        name: "Room_3",
        date: new Date(Date.now()),
        sensors: []
    },
    {
        name: "Room_4",
        date: new Date(Date.now()),
        sensors: []
    }
];

const sensorSeed = [
    {
        name: "LR_lamp_1",
        type: "light",
        position: "",
        value: 0,
        unit: "",
        date: new Date(Date.now())
    },
    {
        name: "R1_lamp_1",
        type: "light",
        position: "",
        value: 0,
        unit: "",
        date: new Date(Date.now())
    },
    {
        name: "R2_lamp_1",
        type: "light",
        position: "",
        value: 0,
        unit: "",
        date: new Date(Date.now())
    },
    {
        name: "R3_lamp_1",
        type: "light",
        position: "",
        value: 0,
        unit: "",
        date: new Date(Date.now())
    },
    {
        name: "R4_lamp_1",
        type: "light",
        position: "",
        value: 0,
        unit: "",
        date: new Date(Date.now())
    }
];

db.House
    .remove({})
    .then(() => db.House.collection.insertMany(houseSeed))
    .then(data => {
        console.log("[House] " + data.insertedIds.length + " records inserted!");
        // process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Room
    .remove({})
    .then(() => db.Room.collection.insertMany(roomSeed))
    .then(data => {
        console.log("[Room] " + data.insertedIds.length + " records inserted!");
        // process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Sensor
    .remove({})
    .then(() => db.Sensor.collection.insertMany(sensorSeed))
    .then(data => {
        console.log("[Sensor] " + data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

