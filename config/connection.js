//all our mysql connection data
let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id: " + connection.threadId);
});
//exports connection
module.exports = connection;
