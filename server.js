var express = require('express');
var exphbs = require('express-handlebars');//handlebars
var methodOverride = require('method-override');
var path = require('path');
var bodyParser = require('body-parser');


var PORT = process.env.PORT || 8000 ;
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var models = require('./models');

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());


require('./controllers/burger_controller.js')(app); 
require('./controllers/burger_routes.js')(app);

app.listen(process.env.PORT || PORT, function(){
	console.log("24K Magic Happens on PORT: " + PORT);
});