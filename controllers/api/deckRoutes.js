const { Deck, Card, User } = require('../../models');
const withAuth = require('../../utils/auth');
const router = require('express').Router();

//CRUD

//Add Card to Deck for Logged in User
// JSON body post to add card to Deck
//  {
// 	"card_id":65741786
// }
router.post('/', withAuth, async (req, res) => {
  try {
    //to test input the card_id
    const listData = await Deck.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(listData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// get all the Cards from the Deck for the logged in user
router.get('/', withAuth, async (req, res) => {
  try {
    const deck = await Deck.findall({
      where: {
        user_id: req.session.user_id,
      },
    });

    res.status(200).json(deck);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update the deck
router.put('/:id', async (req, res) => {
  try {
    const deckData = await Deck.update(req.body, {
      where: {
        user_id: req.session.user_id,
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

module.exports = router;
