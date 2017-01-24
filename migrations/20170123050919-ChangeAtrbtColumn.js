'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        return [queryInterface.changeColumn('users', 'createdAt', {
                type: Sequelize.String
            }),
            queryInterface.changeColumn('users', 'updatedAt', {
                type: Sequelize.String
            }),
            queryInterface.changeColumn('todos', 'createdAt', {
                type: Sequelize.String
            }),
            queryInterface.changeColumn('todos', 'updatedAt', {
                type: Sequelize.String
            })
        ]
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
        return [queryInterface.changeColumn('users', 'createdAt', {
                type: Sequelize.DATE
            }),
            queryInterface.changeColumn('users', 'updatedAt', {
                type: Sequelize.DATE
            }),
            queryInterface.changeColumn('todos', 'createdAt', {
                type: Sequelize.DATE
            }),
            queryInterface.changeColumn('todos', 'updatedAt', {
                type: Sequelize.DATE
            })
        ]
    }
};
