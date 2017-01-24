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
    return queryInterface.bulkInsert('Users',[{
      first_name: 'Irsan',
      email:'irsansebastian@gmail.com',
      "createdAt": new Date(),
      "updatedAt": new Date()
    },{
      first_name: 'Iqbal',
      email:'iqbal@gmail.com',
      "createdAt": new Date(),
      "updatedAt": new Date()
    },{
      first_name: 'Izumi',
      email:'izumi@gmail.com',
      "createdAt": new Date(),
      "updatedAt": new Date()
    },{
      first_name: 'Irwin',
      email:'irwin@gmail.com',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }],{})
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
