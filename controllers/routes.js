//reference to express and to express.router
let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");

//base route setup which renders index. which is used in the views folder
router.get("/", function(req, res) {
  burger.all(function(burger_data) {
    console.log(burger_data);
    res.render("index");
  });
});
//links routes.js and server.js files together
module.exports = router;
