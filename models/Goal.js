const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Goal extends Model {}

Goal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    calorie_goal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1000,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'goal',
  }
);

module.exports = Goal;
