const express = require('express');
const router = express.Router();
const { Card } = require('../../models');

router.get('/random-card', async (req, res) => {
  // Get all card IDs in the database
  const cards = await Card.findAll({ attributes: ['id'] });

  // Shuffle the IDs randomly
  const shuffledIds = shuffle(cards.map((card) => card.id));

  // Find a card by its ID using the shuffled index

  const card = await Card.findOne({
    where: { id: shuffledIds[0] },
    attributes: ['id', 'name', 'type', 'desc', 'atk', 'def', 'level', 'attribute', 'card_images'/*'image_url'*/],
  });
// ASK a TA about this error, when querying http://localhost:3001/api/cards/random-card  in insomnia
  /*  throw new Error(`WHERE parameter "${key}" has invalid "undefined" value`);
            ^

Error: WHERE parameter "id" has invalid "undefined" value*/
  console.log(card);
  console.log(id);
  res.json(card);
});

// Helper function to shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// GET a Card by Name
// Check and see what the error is with a TA
// Insomnia error msg: Cannot GET /api/cards/Accesscode%20Talker
router.get('/cards/:name', async (req, res) => {
  const name = req.params.name;
  const card = await Card.findOne({
    where: { name: name },
    attributes: ['id', 'name', 'type', 'desc', 'atk', 'def', 'level', 'attribute', 'card_images'],
  });
  console.log(card);
  res.json(card);
});

module.exports = router;