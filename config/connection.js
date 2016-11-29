var Sequelize = require("sequelize");
var mysql = require ('mysql');

var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "Kyanit@55",
        database: "sequelizeburger_db"
    },

    jawsDB: {
        port: 3306,
        host     : 'sulnwdk5uwjw1r2k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user     : 'f00g84qj991sikex',  
        password : 'siolu1ee0008i9dl',
        database : 'z7wsta7uj9uk6r4n'
    }
}

var jawsCred = source.jawsDB;
var sequelize = new Sequelize(jawsCred.database, jawsCred.user, jawsCred.password, {
  host: jawsCred.host,

});


module.exports = sequelize;

   
// var connection = mysql.createConnection(source.JawsDB);
// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });

// module.exports = connection;
//mysql://OLDUSER:OLDPASS@OLDHOST/OLDDATABASE?…
//mysql://fub3wd9m72no4sjt:jplnsjqpbp3ia5ux@sulnwdk5uwjw1r2k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/i40nt0lf0ib2pjoy
//for second attempt  ancient reaches


// first attempt:
// host     : 'sulnwdk5uwjw1r2k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//         user     : 'fub3wd9m72no4sjt',  
//         password : 'jplnsjqpbp3ia5ux',
//         database : 'i40nt0lf0ib2pjoy'