const router = require('express').Router();
const userRoutes = require('./userRoutes');
const deckRoutes = require('./deckRoutes');
const cardRoutes = require('./cardRoutes');

router.use('/cards', cardRoutes);
router.use('/decks', deckRoutes);
router.use('/users', userRoutes);

module.exports = router;
