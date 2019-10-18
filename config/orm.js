//import our connection for orm
let connection = require ('./connection.js');
//create orm object to apply various methods that applies to our data (db)
let orm = {
    //collects all data from the db
    all: function(tableInput, cb){
        connection.query('SELECT * FROM ' + tableInput +';', function(err, res){
            if(err) throw err;
            cb(res)
            
        })
    }
}

module.exports = orm;