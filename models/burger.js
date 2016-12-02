'use strict';
var Sequelize = require('sequelize');
var configConn = require("../config/connection.js");


  var sequelizeBurger = configConn.define("burgersTable", {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},//hardcoded autoIncrement: true? 
    name: {type: Sequelize.STRING},
    devoured: {type: Sequelize.BOOLEAN, defaultValue : 0},
    date: {type: Sequelize.DATE},
       
  });


  sequelizeBurger.sync();
module.exports = sequelizeBurger;