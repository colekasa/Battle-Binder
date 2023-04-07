const User = require('./User');
const Card = require('./Card');
const Cards = require('./Cards');
const Deck = require('./Deck');

User.hasMany(Deck, {
  foreignKey: 'user_id',
});

Deck.belongsTo(User, {
  foreignKey: 'user_id',
});

//may not use these relationships
Deck.belongsToMany(Card, {
  through: {
    model: Cards,
    unique: false,
  },
  as: 'cards',
});

Card.belongsToMany(Deck, {
  through: {
    model: Cards,
    unique: false,
  },
  as: 'decks',
});

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

module.exports = { Card, User, Cards, Deck };
