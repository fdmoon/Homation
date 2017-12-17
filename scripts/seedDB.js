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
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e32197"),
        owner: "Felix and Neil",
        address: "Austin, TX",
        layout: "",
        created: new Date(Date.now()),
        sensors: [
            mongoose.Types.ObjectId("5a34000857456b3288e321a2"),
            mongoose.Types.ObjectId("5a34000857456b3288e321a4"),
            mongoose.Types.ObjectId("5a34000857456b3288e3219d"),
            mongoose.Types.ObjectId("5a34000857456b3288e3219e"),
            mongoose.Types.ObjectId("5a34000857456b3288e3219f"),
            mongoose.Types.ObjectId("5a34000857456b3288e321a0"),
            mongoose.Types.ObjectId("5a34000857456b3288e321a1"),
            mongoose.Types.ObjectId("5a34000857456b3288e321a5"),
            mongoose.Types.ObjectId("5a34000857456b3288e321a6"),
            mongoose.Types.ObjectId("5a34000857456b3288e321a7"),
            mongoose.Types.ObjectId("5a34000857456b3288e321a8"),
            mongoose.Types.ObjectId("5a34000857456b3288e321a9"),
            mongoose.Types.ObjectId("5a34000857456b3288e321aa"),
            mongoose.Types.ObjectId("5a34000857456b3288e321ab")
        ]
    }
];

const sensorSeed = [
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e3219d"),
        name: "room1-light-m",
        type: "light",
        description: "Room-1 Light (Main)",
        location: "In-House",
        value: 0,
        unit: "",
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e3219e"),
        name: "room1-light-s",
        type: "light",
        description: "Room-1 Light (Sub)",
        location: "In-House",
        value: 0,
        unit: "",
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e3219f"),
        name: "room2-light",
        type: "light",
        description: "Room-2 Light",
        location: "In-House",
        value: 0,
        unit: "",
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321a0"),
        name: "room3-light",
        type: "light",
        description: "Room-3 Light",
        location: "In-House",
        value: 0,
        unit: "",
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321a1"),
        name: "room4-light",
        type: "light",
        description: "Room-4 Light",
        location: "In-House",
        value: 0,
        unit: "",
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321a2"),
        name: "indoor-temp",
        type: "temperature",
        description: "Indoor Temperature",
        location: "In-House",
        value: 0,
        unit: "F",
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321a4"),
        name: "indoor-humid",
        type: "humidity",
        description: "Indoor Humidity",
        location: "In-House",
        value: 0,
        unit: "%",
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321a5"),
        name: "enterance",
        type: "door",
        description: "Main Enterance",
        location: "In-House",
        value: 0,
        unit: "",
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321a6"),
        name: "garage-door",
        type: "door",
        description: "Garage Door",
        location: "In-House",
        value: 0,
        unit: "",
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321a7"),
        name: "livingroom-window",
        type: "window",
        description: "Living-Room Window",
        location: "In-House",
        value: 0,
        unit: "",
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321a8"),
        name: "room1-window",
        type: "window",
        description: "Room-1 Window",
        location: "In-House",
        value: 0,
        unit: "",
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321a9"),
        name: "room2-window",
        type: "window",
        description: "Room-2 Window",
        location: "In-House",
        value: 0,
        unit: "",
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321aa"),
        name: "room3-window",
        type: "window",
        description: "Room-3 Window",
        location: "In-House",
        value: 0,
        unit: "",
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321ab"),
        name: "room4-window",
        type: "window",
        description: "Room-4 Window",
        location: "In-House",
        value: 0,
        unit: "",
        created: new Date(Date.now())
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

