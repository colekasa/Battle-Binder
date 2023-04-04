const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Model {}

Card.init (
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    atk: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    def:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    level:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    attribute:{
        type: DataTypes.STRING,
    },
    card_images:{
        type: DataTypes.STRING,
        allowNull:false,
    }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = Card;