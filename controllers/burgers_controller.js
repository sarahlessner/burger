var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(resFromQuery) {
    var hbsObject = {
      burgers: resFromQuery
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne("name", req.body.name, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {

  burger.updateOne("devoured", 1, req.params.id, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;