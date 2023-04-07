const express = require('express');
const router = express.Router();
const { Card } = require('../../models');

router.get('/random-card', async (req, res) => {
  // Get all card IDs in the database
  const cards = await Card.findAll({ attributes: ['id'] });

  // Shuffle the IDs randomly
  const shuffledIds = shuffle(cards.map((card) => card.id));

  // Find a card by its ID using the shuffled index
  // Terminal is showing Random Cards but not displaying data in Insomnia
  const card = await Card.findOne({
    where: { id: shuffledIds[0] },
    attributes: ['id', 'name', 'type', 'desc', 'atk', 'def', 'level', 'attribute', 'image_url'],
  });

  console.log(card);
  res.json(card.get({
    plain: true
  }));
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
// Insomnia error msg: Cannot GET /api/cards/Accesscode%20Talker
router.get('/:name', async (req, res) => {
  const name = req.params.name;
  const card = await Card.findOne({
    where: { name: name },
    attributes: ['id', 'name', 'type', 'desc', 'atk', 'def', 'level', 'attribute', 'image_url'],
  });
  console.log(card);
  res.json(card);
});

module.exports = router;