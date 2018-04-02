var express = require("express");
var app = express.Router()

var GetEvent = require("./get-event");
var GetEvents = require("./get-events");
var GetVocab = require("./get-vocab");

app.get("/hydra/event-api/events/:id", GetEvent);
app.get("/hydra/event-api/events", GetEvents);
app.get("/hydra/event-api/vocab", GetVocab);

module.exports = app