var PORT = 8000;
var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('it worked')

});
app.listen(process.env.PORT || PORT, function(){
console.log("24k magic happens on port " + PORT)

});