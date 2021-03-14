// Import the ORM file to create functions that will interact with the burgers database
var orm = require("../config/orm.js");

var burger = {
    // selectAll function
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
            console.log(res)
        })
    },
    // insertOne function
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res)
        })
    },
    // updateOne function
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res)
        })
    },

}

//Export database functions for the burger controller js
module.exports = burger