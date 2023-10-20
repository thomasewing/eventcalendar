const mongoose = require("mongoose");

const EventCalendarSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Event Name is required"],
        min: [3, "Name must be 3 or more characters"]
    },
    address:{
        type: String,
        required: [true, "Address is required"],
        min: [6, "Address must be 6 or more characters"]
    },
    date:{
        type: Date,
        required: [true, "Date is required"]
    },
    category:{
        type: String,
        required: [true, "Category is required"],
        min: [3, "Category must be 3 or more characters"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Rating must be 1 or more characters"]
    },
    notes: {
        type: String,
        max: [50, "Notes cannot be over 50 characters"]
    }
}, {timestamps: true})

module.exports = mongoose.model("EventCalendar", EventCalendarSchema)