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
        address: "UT at Austin",
        layout: "",
        created: new Date(Date.now()),
        rooms: [
            mongoose.Types.ObjectId("5a34000857456b3288e32198"), 
            mongoose.Types.ObjectId("5a34000857456b3288e32199"), 
            mongoose.Types.ObjectId("5a34000857456b3288e3219a"), 
            mongoose.Types.ObjectId("5a34000857456b3288e3219b"), 
            mongoose.Types.ObjectId("5a34000857456b3288e3219c")
        ]
    }
];

const roomSeed = [
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e32198"),
        name: "Overview",
        created: new Date(Date.now()),
        sensors: [
            mongoose.Types.ObjectId("5a34000857456b3288e321a2"),
            mongoose.Types.ObjectId("5a34000857456b3288e321a3"),
            mongoose.Types.ObjectId("5a34000857456b3288e321a4")
        ]
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e32199"),
        name: "Room-1",
        created: new Date(Date.now()),
        sensors: [
            mongoose.Types.ObjectId("5a34000857456b3288e3219d"),
            mongoose.Types.ObjectId("5a34000857456b3288e3219e")
        ]
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e3219a"),
        name: "Room-2",
        created: new Date(Date.now()),
        sensors: [
            mongoose.Types.ObjectId("5a34000857456b3288e3219f")
        ]
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e3219b"),
        name: "Room-3",
        created: new Date(Date.now()),
        sensors: [
            mongoose.Types.ObjectId("5a34000857456b3288e321a0")
        ]
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e3219c"),
        name: "Room-4",
        created: new Date(Date.now()),
        sensors: [
            mongoose.Types.ObjectId("5a34000857456b3288e321a1")
        ]
    }
];

const sensorSeed = [
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e3219d"),
        name: "room1-light-m",
        type: "light",
        description: "Room-1 Light (Main)",
        value: 0,
        unit: "ea",
        watt: 60,
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e3219e"),
        name: "room1-light-s",
        type: "light",
        description: "Room-1 Light (Sub)",
        value: 0,
        unit: "ea",
        watt: 60,
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e3219f"),
        name: "room2-light",
        type: "light",
        description: "Room-2 Light",
        value: 0,
        unit: "ea",
        watt: 60,
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321a0"),
        name: "room3-light",
        type: "light",
        description: "Room-3 Light",
        value: 0,
        unit: "ea",
        watt: 60,
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321a1"),
        name: "room4-light",
        type: "light",
        description: "Room-4 Light",
        value: 0,
        unit: "ea",
        watt: 60,
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321a2"),
        name: "indoor-temp",
        type: "temperature",
        description: "Indoor Temperature",
        value: 0,
        unit: "F",
        watt: 0,
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321a3"),
        name: "outdoor-temp",
        type: "temperature",
        description: "Outdoor Temperature",
        value: 0,
        unit: "F",
        watt: 0,
        created: new Date(Date.now())
    },
    {
        "_id" : mongoose.Types.ObjectId("5a34000857456b3288e321a4"),
        name: "indoor-humid",
        type: "humidity",
        description: "Indoor Humidity",
        value: 0,
        unit: "%",
        watt: 0,
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

