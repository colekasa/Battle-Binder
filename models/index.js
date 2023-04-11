const User = require('./User');
const Card = require('./Card');
const Deck = require('./Deck');

User.belongsToMany(Card, {
  through: {
    model: Deck,
    unique: false,
  },
  as: 'cards',
});

Card.belongsToMany(User, {
  through: {
    model: Deck,
    unique: false,
  },
  as: 'users',
});

// Deck.belongsTo(User, {
//   foreignKey: 'user_id',
// });

// //may not use these relationships

// Card.belongsToMany(Deck, {
//   through: {
//     model: Cards,
//     unique: false,
//   },
//   as: 'decks',
// });

// User.hasMany(Card, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });

// Card.belongsTo(User, {
//   foreignKey: 'user_id',
// });

// Deck.belongsTo(User, {
//   foreignKey: 'user_id',
// });

// User.hasOne(Deck, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });

// Deck.hasMany(Card, {
//   foreignKey: 'deck_id',
//   onDelete: 'CASCADE',
// });

// Card.belongsTo(Deck, {
//   foreignKey: 'deck_id',
// });

module.exports = { Card, User, Deck };
