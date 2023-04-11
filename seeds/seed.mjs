//const sequelize = require('../config/connection');
import sequelize from '../config/connection.js';
//const { Card, User, Favorite } = require('../models');
//import { Card, User, Favorite } from "../models/index.js";
import pkg from '../models/index.js';
const { Card, User, Deck } = pkg;

import fetch from 'node-fetch';

// API LINK
const API = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?staple=yes';

// API Fetch function
function getYugiohCards() {
  fetch(API)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (cardData) {
          // Map Card Data
          const cards = cardData.data.map((card) => {
            const {
              id,
              name,
              type,
              atk,
              def,
              level,
              attribute,
              archetype,
              card_images /* image_url */,
            } = card;
            return {
              id,
              name,
              type,
              atk,
              def,
              level,
              attribute,
              archetype,
              image_url: card_images[0].image_url,
              //image_url
            };
          });
          // SEED bulk of cards
          Card.bulkCreate(cards)
            .then(() => console.log('Cards seeded successfully'))
            .catch((err) => console.log('Error seeding cards: ', err));
          User.create({
            name: 'cole',
            email: 'email@email.com',
            password: 'passwordlength',
          }).then(function (user) {
            Deck.create({
              user_id: user.id,
              card_id: cards[0].id,
            });
          });
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (err) {
      console.log(err);
      alert('Unable to reach API');
    });
}
// SEED Database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  getYugiohCards();
};

seedDatabase();
