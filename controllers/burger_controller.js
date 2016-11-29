var path = require('path');
var modelConn = require("../models/burger.js");

module.exports = function(app){

    app.post('/add', function(req,res) {
        if(req.body.name){
            modelConn.create({name: req.body.name})
            .then(function(){
                    res.redirect('/');
                });
        }else{
            res.redirect('/');
            return;
        }
    });
    
    app.put('/devour', function(req,res){
        modelConn.update(           
            {
                devoured : 1
            },           
            {   where : {
                id: req.body.burgerid
                }
            }
                ).then(function(){
                    res.redirect('/');
                })
    });
}