const { Cards} = require('../../models');
const withAuth = require('../../utils/auth');
const router = require('express').Router();

// create a new Favorites list 
router.post('/', withAuth, async (req, res) => {
  try {
    const newFavorites = await Cards.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFavorites);
  } catch (err) {
    res.status(400).json(err);
  }
});




module.exports = router;