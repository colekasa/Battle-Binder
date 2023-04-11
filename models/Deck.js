const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
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
    card_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Card',
        key: 'id',
      },
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
