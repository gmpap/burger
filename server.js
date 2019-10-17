//Boiler plate for node server
let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let expresshbs = require('express-handlebars');

let app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', expresshbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

let routes = require('./controllers/routes.js');
app.use('/', routes);

let port = 3000;
app.listen(port);
