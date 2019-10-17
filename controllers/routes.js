//reference to express and to express.router
let express = require('express');
let router = express.Router();

//base route setup which renders index. which is used in the views folder
router.get('/', function(req, res) {
  res.render('index');
});
//links routes.js and server.js files together
module.exports = router;
