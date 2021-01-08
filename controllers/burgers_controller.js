// Dependencies
var express = require("express")

var router = express.Router()

var burger = require("../models/burger.js")


// redirect Index
router.get(",", function (req, res) {
    res.redirect("/index")
})

// Renders Index to DOM
router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = 
        { burgers: data}
        res.render("index", hbsObject)
    })
})

// add new burger



// devour burger

module.exports = router