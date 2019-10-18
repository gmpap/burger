//import our connection for orm
let connection = require("./connection.js");
//create orm object to apply various methods that applies to our data (db)
let orm = {
  //collects all data from the db
  all: function(tableInput, cb) {
    connection.query("SELECT * FROM " + tableInput + ";", function(
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },
  //update db method
  update: function(tableInput, condition, cb) {
    connection.query(
      "UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";",
      function(err, result) {
        cb(result);
      }
    );
  },
  //Create db object method
  create: function(tableInput, val, cb) {
    connection.query(
      "INSERT INTO " + tableInput + " (burger_name) VALUES ('" + val + "');",
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;
