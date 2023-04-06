const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Model {}

Card.init (
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
       // autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,

    },
    type:{
        type: DataTypes.STRING,

    },
    desc:{
      type: DataTypes.STRING,

    },
    atk: {
        type: DataTypes.INTEGER,

    },
    def:{
        type: DataTypes.INTEGER,

    },
    level:{
        type: DataTypes.INTEGER,

    },
    attribute:{
        type: DataTypes.STRING,
    },
    card_images:{
        type: DataTypes.STRING,

    }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Card',
    }
);

module.exports = Card;