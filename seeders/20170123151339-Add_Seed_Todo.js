'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Todos",[
      {
        title:"sample 1",
        is_complete:false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"sample 1",
        is_complete:false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:"sample 1",
        is_complete:false,
        createdAt:new Date(),
        updatedAt:new Date()
      }
  ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
