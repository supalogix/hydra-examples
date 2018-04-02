var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var eventApiActions = require("./event-api-actions");
var contextActions = require("./context-actions");

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(eventApiActions);
app.use(contextActions);


app.listen("8080", function(error) {
    if(error)
        console.log("error: ", error);
    else
        console.log("started on port 8080");
})