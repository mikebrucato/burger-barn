var connection = require("../config/connection.js")


var orm = {
// selectAll() query function
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(res) {
            if (err) throw err
            cb(res)
        })
    },

// insertOne() query function
    insertOne: function(burger_name, cb) {
        connection.query("INSERT INTO burgers SET ?", { burger_name: burger_name, devoured: false } , function(res) {
            if (err) throw err
            cb(res)
        })
    },


// updateOne() query function
    updateOne: function(burger_id, cb) {
        connection.query("UPDATE burgers SET ?? WHERE ?", [{ devoured: true }, {id: burger_id}], function (res) {
            if (err) throw err
            cb(res)
        })
    }
}

module.exports = orm