const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Favorites extends Model{};

Favorites.init(
    {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
    },
    card_id: {
        type: DataTypes.INTEGER,
        references: {
        model: 'Card',
        key: 'id',
      }
    },
    title:{
        type:DataTypes.STRING,
    }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Favorites',
    },
);

module.exports = Favorites;