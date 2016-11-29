'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('burgers', {
      id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        autoIncrement: true,
        primaryKey: true
        
      },
      name: {
        type: Sequelize.STRING
      },
      devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue : 0
      },
      date: Sequelize.DATE
  

    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('burgers');
  }
};