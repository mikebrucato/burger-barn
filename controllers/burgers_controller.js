// Dependencies
var express = require("express")

var router = express.Router()

var burger = require("../models/burger.js")

// Renders Index to DOM
router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = 
        { burgers: data}
        res.render("index", hbsObject)
    })
})

module.exports = router