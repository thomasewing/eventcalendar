const eventCalendarController = require("../controllers/calendar");

module.exports = app => {
    app.get("/eventcalendar", eventCalendarController.findAll);
    app.post("/eventcalendar", eventCalendarController.create);
    app.get("/eventcalendar/:id", eventCalendarController.findOne);
    app.patch("/eventcalendar/:id", eventCalendarController.update);
    app.delete("/eventcalendar/:id", eventCalendarController.delete)
}