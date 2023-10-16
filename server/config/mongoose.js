const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/event_review", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log("A Connection is Made!"))
    .catch( (err) => console.log("Gotta Get Yourself Connected", err))