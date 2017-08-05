var express = require("express");
var bodyParser = require("body-parser");
var path = require("method-override");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./controllers/burgers_controller.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});