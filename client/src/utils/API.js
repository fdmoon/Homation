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

// *** Sensor ***
    // Gets all sensors
    getSensors: function() {
        return axios.get("/api/sensors");
    },
    // Gets the sensor with the given id
    getSensor: function(id) {
        return axios.get("/api/sensors/" + id);
    },
    // Gets the sensors with the given type
    getSensorsByType: function(type) {
        return axios.get("/api/sensors/type/" + type);
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
    },

// *** Weather ***
    // Gets weather data
    getWeather: function() {
        return axios.get("/api/others/weather");
    }
};

