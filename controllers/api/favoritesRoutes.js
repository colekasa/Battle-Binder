const {Favorites} = require('../../models');
const withAuth = require('../../utils/auth');
const router = require('express').Router();

// create a new Favorites list 
router.post('/', withAuth, async (req, res) => {
  try {
    const newFavorites = await Favorites.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFavorites);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete a favorites list if we are able to implement in time
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const favoritesData = await Favorites.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.card_id,
      },
    });

    if (!favoritesData) {
      res.status(404).json({ message: 'No favorite list found with this id!' });
      return;
    }

    res.status(200).json(favoritesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;