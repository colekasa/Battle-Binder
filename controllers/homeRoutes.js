const router = require('express').Router();
const { User, Deck, Card } = require('../models');
const withAuth = require('../utils/auth');

// Use withAuth middleware to prevent access to favorites route unless logged in
router.get('/deck', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Card,
          through: Deck,
          as: 'cards',
        },
      ],
    });
    // Serialize the data for handlebars to use
    const user = userData.get({ plain: true });
    console.log(user);
    // response renders the deck.handlebars file
    res.render('deck', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to the deck page
  if (req.session.logged_in) {
    res.redirect('/deck');
    return;
  }

  res.render('login');
});

router.get('/', async (req, res) => {
  const cards = await Card.findAll({ attributes: ['id'] });

  // Shuffle the IDs randomly
  const shuffledIds = shuffle(cards.map((card) => card.id));

  // Find a card by its ID using the shuffled index
  const card = await Card.findOne({
    where: { id: shuffledIds[0] },
    attributes: [
      'id',
      'name',
      'type',
      'desc',
      'atk',
      'def',
      'level',
      'attribute',
      'image_url',
    ],
  });

  // Helper function to shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

  var testCard = card.get({
    plain: true,
  });
  res.render('homepage', {
    randomCard: testCard,
  });
});

module.exports = router;

// router.get('/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const projectData = await Project.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const projects = projectData.map((project) => project.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', {
//       projects,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
