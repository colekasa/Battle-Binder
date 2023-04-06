// TODO: add a table that you can add multiple Favorites to by linking a foreign key
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FavoriteList extends Model{};

FavoriteList.init(
    {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    favorites_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'Favorites',
            key:'id'
        }
    }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'FavoriteList',
    },
);

module.exports = FavoriteList;