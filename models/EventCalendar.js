const mongoose = require("mongoose");

const EventCalendarSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Artist is required"]
    },
    address:{
        type: String,
        required: [true, "Venue is required"]
    },
    date:{
        type: Date,
        required: [true, "Date is required"]
    },
    category:{
        type: String,
        required: [true, "Genre is required"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"]
    },
    notes: {
        type: String,
        maxLength: [50, "Notes cannot be over 50 characters"]
    }
}, {timestamps: true})

module.exports = mongoose.model("EventCalendar", EventCalendarSchema)