'use strict';
const faker = require('faker')

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
      {title: faker.random.words(), isComplete: false, userId: 3, createdAt: new Date(), updatedAt: new Date()},
      {title: faker.random.words(), isComplete: false, userId: 3, createdAt: new Date(), updatedAt: new Date()},
      {title: faker.random.words(), isComplete: false, userId: 3, createdAt: new Date(), updatedAt: new Date()},
      {title: faker.random.words(), isComplete: false, userId: 3, createdAt: new Date(), updatedAt: new Date()},
      {title: faker.random.words(), isComplete: false, userId: 3, createdAt: new Date(), updatedAt: new Date()},
      {title: faker.random.words(), isComplete: false, userId: 3, createdAt: new Date(), updatedAt: new Date()},
      {title: faker.random.words(), isComplete: false, userId: 3, createdAt: new Date(), updatedAt: new Date()},
      {title: faker.random.words(), isComplete: false, userId: 3, createdAt: new Date(), updatedAt: new Date()},
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Todos', null, {});

  }
};
