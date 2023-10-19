const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/eventCalendar", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log("A Connection is Made!"))
    .catch( (err) => console.log("Gotta Get Yourself Connected", err))