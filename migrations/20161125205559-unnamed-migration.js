'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.createTable('burgers', 
        { 
          id: 
              {type:Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
          name: Sequelize.STRING,
          devoured: Sequelize.BOOLEAN 
        });
    
  },

  down: function (queryInterface, Sequelize) {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.dropTable('burgers');
    
  }
};
