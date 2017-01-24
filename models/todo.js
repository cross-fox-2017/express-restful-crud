'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN,
    UserId: {
      type: DataTypes.INTEGER,
      references: {
      model: 'Users',
      key: 'id',
      }
    }
  },{
    classMethods: {
      associate: function(models) {
        Todo.belongsTo(models.User)
      }
    }
  });
  return Todo;
};
