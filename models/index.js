const User = require('./User');
const Card = require('./Card');
const Favorites = require('./Favorites');
const FavoriteList = require('./FavoriteList');

User.hasOne(FavoriteList, {
  foreignKey: 'user_id',
})

FavoriteList.belongsTo(User, {
  foreignKey: 'user_id',
})

FavoriteList.hasMany(Favorites, {
  foreignKey: 'favorites_id',
})

Favorites.belongsTo(FavoriteList, {
  foreignKey:'favorites_id',
  onDelete:'CASCADE',
})

Favorites.hasMany(Card, {
  foreignKey:'card_id'
})

Card.belongsTo(Favorites, {
  foreignKey:'card_id',
  onDelete:'CASCADE',
})

// User.hasMany(Card, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
//   });
  
//   Card.belongsTo(User, {
//     foreignKey: 'user_id'
//   });
  
//   Favorites.belongsTo(User, {
//     foreignKey: 'user_id'
//   });

//   User.hasMany(Favorites, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
//   });

//   Favorites.hasMany(Card, {
//     foreignKey: 'favorites_id',
//     onDelete: 'CASCADE'
//   });

//   Card.belongsTo(Favorites, {
//     foreignKey: 'favorites_id',
//   });


module.exports = { Card, User, Favorites, FavoriteList };
