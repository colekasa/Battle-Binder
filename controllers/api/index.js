const router = require('express').Router();
const userRoutes = require('./userRoutes');
const deckRoutes = require('./deckRoutes');

router.use('/decks', deckRoutes);
router.use('/users', userRoutes);

module.exports = router;
