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


module.exports = { Card, User, Deck };
