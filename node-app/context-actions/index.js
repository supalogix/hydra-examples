var express = require("express");
var app = express.Router();

var GetEvent = require("./get-event");
var GetEventCollection = require("./get-event-collection");

app.get("/hydra/event-api/contexts/Event.jsonld", GetEvent);
app.get("/hydra/event-api/contexts/EventCollection.jsonld", GetEventCollection);

module.exports = app