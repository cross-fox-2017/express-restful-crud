'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Todos', [
      {
        title: "Query",
        is_complete: 0,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Coding",
        is_complete: 0,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Express",
        is_complete: 0,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
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
    return queryInterface.bulkDelete('Todos', null)
  }
};
