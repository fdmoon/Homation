const db = require("../models");

// Defining methods for the roomsController
module.exports = {
    findAll: function(req, res) {
        db.Room
            .find(req.query)
            .sort({ _id: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Room
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Room
            .create(req.body)
            .then(dbModel => db.House.findOneAndUpdate({ _id: req.params.id }, { $push: { rooms: dbModel._id } }, { new: true }))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Room
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Room
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => db.House.findOneAndUpdate({ _id: req.body.id }, { $pull: { notes: dbModel._id } }, { new: true }))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

