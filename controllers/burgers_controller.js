// Dependencies
var express = require("express")

var router = express.Router()

var burger = require("../models/burger")


// redirect Index
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(data);
      res.render("index", hbsObject);
    });
  });


// Renders Index to DOM
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

// add new burger
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgers.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 1) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// devour burger
router.post("/api/burger/devour/:id", function(req, res) {
    burger.UpdateOne(req.params.id, function() {
        res.redirect("/index")
    })
})

module.exports = router