// TODO: add a table that you can add multiple Favorites to by linking a foreign key
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Deck extends Model {}

Deck.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      referemces: {
        model: 'User',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Deck',
  }
);

module.exports = Deck;
