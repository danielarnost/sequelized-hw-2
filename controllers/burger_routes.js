var path = require('path');
var modelConn = require("../models/burger.js");

module.exports = function(app){

app.get('/', function(req, res){
	modelConn.findAll({})
	.then(function(burger){
		
			res.render('index',{burger})
		})
	});

}