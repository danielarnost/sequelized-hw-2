'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('burger', {
    id: {type: DataTypes.INTEGER, primaryKey: true},//hardcoded autoIncrement: true? 
    name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    createdAt: {type: DataTypes.DATE, allowNull: false},
    updatedAt: {type: DataTypes.DATE, allowNull: false}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burger;
};