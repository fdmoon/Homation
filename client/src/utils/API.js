import axios from "axios";

export default {
// *** House ***
    // Gets all houses
    getHouses: function() {
        return axios.get("/api/houses");
    },
    // Gets the house with the given id
    getHouse: function(id) {
        return axios.get("/api/houses/" + id);
    },
    // Saves a house to the database
    saveHouse: function(houseData) {
        return axios.post("/api/houses", houseData);
    },
    // Updates the house with the given id
    updateHouse: function(id, updateData) {
        return axios.put("/api/houses/" + id, updateData);
    },    
    // Deletes the house with the given id
    deleteHouse: function(id) {
        return axios.delete("/api/houses/" + id);
    },

// *** Room ***
    // Gets all rooms
    getRooms: function() {
        return axios.get("/api/rooms");
    },
    // Gets the room with the given id
    getRoom: function(id) {
        return axios.get("/api/rooms/" + id);
    },
    // Saves a room to the database
    saveRoom: function(roomData) {
        return axios.post("/api/rooms", roomData);
    },
    // Updates the room with the given id
    updateRoom: function(id, updateData) {
        return axios.put("/api/rooms/" + id, updateData);
    },    
    // Deletes the room with the given id
    deleteRoom: function(id) {
        return axios.delete("/api/rooms/" + id);
    },

// *** Sensor ***
    // Gets all sensors
    getSensors: function() {
        return axios.get("/api/sensors");
    },
    // Gets the sensor with the given id
    getSensor: function(id) {
        return axios.get("/api/sensors/" + id);
    },
    // Saves a sensor to the database
    saveSensor: function(sensorData) {
        return axios.post("/api/sensors", sensorData);
    },
    // Updates the sensor with the given id
    updateSensor: function(id, updateData) {
        return axios.put("/api/sensors/" + id, updateData);
    },    
    // Deletes the sensor with the given id
    deleteSensor: function(id) {
        return axios.delete("/api/sensors/" + id);
    }    
};
