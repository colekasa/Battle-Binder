const User = require('./User');
const Card = require('./Card');
const Favorites = require('./Favorites');

User.hasMany(Card, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Card.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Favorites.belongsTo(User, {
    foreignKey: 'user_id'
  });

  User.hasMany(Favorites, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

//   Card.belongsTo(Favorites, {
//     foreignKey: 'favorites_id',
//   });

  Favorites.hasMany(Card, {
    foreignKey: 'favorites_id',
    onDelete: 'CASCADE'
  });

  Favorites.belongsTo(Card, {
    foreignKey: 'card_id',
  })

module.exports = { Card, User, Favorites };
