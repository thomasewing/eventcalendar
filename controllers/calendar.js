const EventCalendar = require("../models/EventCalendar");

module.exports = {
    findAll: (req, res)=>{
        EventCalendar.find()
            .then(allEvents=> res.json(allEvents))
            .catch( err => res.status(400).json(err))
    },

    findOne: (req, res)=>{
        EventCalendar.findById(req.params.id)
            .then( oneEvent => res.json(oneEvent))
            .catch(err=>res.status(400).json(err))
    },

    create: (req,res)=>{
        EventCalendar.create(req.body)
            .then (newEvent =>res.json(newEvent))
            .catch(err=>res.status(400).json(err))
    },

    update: (req,res)=>{
        EventCalendar.findByIdAndUpdate(req.params.id, req.body, {new:true})
            .then( updatedEvent=>res.json(updatedEvent))
            .catch(err=>res.status(400).json(err))
    },

    delete: (req,res)=>{
        EventCalendar.findByIdAndDelete(req.params.id)
        .then(deletedEvent =>res.json(deletedEvent))
        .catch(err=>res.status(400).json(err))
    }
}