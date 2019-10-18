let orm = require("../config/orm.js");

let burger = {
  all: function(cb) {
    //calling orm.all, and inserting burgers as our table, then running the function(res)
    //as our call back function, sent to our routes.js file??
    orm.all(burgers, function(res) {
      cb(res);
    });
  },

  update: function(id, cb) {
    orm.update("burgers", id, cb);
  },

  create: function(name, cb) {
    orm.create("burgers", name, cb);
  }
};

module.export = burger;
