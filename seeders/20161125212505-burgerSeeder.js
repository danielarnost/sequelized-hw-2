'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('burgers', [{
        name: "Pattymelt",
        devoured: false
      },
        {
            name: "Bacon Burger",
            devoured: false
        },
         {
            name: "Veggie Burger",
            devoured: false
        },
        {
            name: "Cheese Burger",
            devoured: false
        },
        {
            name: "Steak Burger",
            devoured: false
        }

      ], {});
    
  },

  down: function (queryInterface, Sequelize) {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('burgers', null, {});
    
  }
};
