// Import the ORM file to create functions that will interact with the burgers database
var orm = require("../config/orm.js");

var burger = {
    // selectAll function
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
        })
    },
    // insertOne function
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, function(res) {
            cb(res)
        })
    },
    // updateOne function
    UpdateOne: function(burger_id, cb) {
        orm.updateOne(burger_id, function(res) {
            cb(res)
        })
    },

}

//Export database functions for the burger controller js
module.exports = burger