'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    task: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    is_completed: DataTypes.INTEGER,
    deleted_task: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Todo.belongsTo(models.User)
      }
    }
  });
  return Todo;
};
