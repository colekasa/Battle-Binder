const { Deck, Card, Cards, User } = require('../../models');
const withAuth = require('../../utils/auth');
const router = require('express').Router();

//CRUD

//create a Deck
router.post('/', withAuth, async (req, res) => {
  try {
    const listData = await Deck.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(listData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//get all the Cards from the Deck for the logged in user
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const deck = await Deck.findall({
//       include: [
//         {
//           model: Card,
//           through: Cards,
//           as: 'cards',
//         },
//       ],
//     });

//     res.status(200).json(deck);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

//update the deck
router.put('/:id', async (req, res) => {
  try {
    const deckData = await Deck.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (deckData > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

//get one deck
router.get('/:id', async (req, res) => {
  try {
    const deckData = await Deck.findByPk(req.params.id, {
      includes: [
        {
          model: User,
          foreignKey: 'user_id',
        },
        {
          model: Card,
          through: Cards,
          as: 'cards',
        },
      ],
    });

    res.status(200).json(deckData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete the deck
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deckData = await Deck.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.card_id,
      },
    });

    if (!deckData) {
      res.status(404).json({ message: 'No deck found with this id!' });
      return;
    }

    res.status(200).json(deckData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
