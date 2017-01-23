'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    is_complete: DataTypes.INTEGER,
    user_id: {
      type: DataTypes.INTEGER,
      references: 'User', // <<< Note, its table's name, not object name
      key: 'id' // <<< Note, its a column name
    }
  }, {
    classMethods: {
      associate: function(models) {
        Todo.belongsTo(models.User)
      }
    }
  });
  return Todo;
};
