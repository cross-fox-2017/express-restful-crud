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
    return queryInterface.bulkInsert('Todos',[{
      task: 'BELAJAR',
      UserId:1,
      is_completed:false,
      deleted_task:false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task: 'BANGUN',
      UserId:1,
      deleted_task:false,
      is_completed:false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task: 'MAKAN',
      UserId:1,
      deleted_task:false,
      is_completed:false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      task: 'MAIN GAME',
      UserId:1,
      deleted_task:false,
      is_completed:false,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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
