const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Use withAuth middleware to prevent access to favorites route unless logged in
router.get('/favorites', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('favorites', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to the favorites page
  if (req.session.logged_in) {
    res.redirect('/favorites');
    return;
  }

  res.render('login');
});

router.get('/', async (req, res) => {
  const cards = await Card.findAll({ attributes: ['id'] });

  // Shuffle the IDs randomly
  const shuffledIds = shuffle(cards.map((card) => card.id));

  // Find a card by its ID using the shuffled index
  // Terminal is showing Random Cards but not displaying data in Insomnia
  const card = await Card.findOne({
    where: { id: shuffledIds[0] },
    attributes: ['id', 'name', 'type', 'desc', 'atk', 'def', 'level', 'attribute', 'image_url'],
  });
  var testCard = card.get({
    plain: true
  })
  res.render('homepage', {
    randomCard: testCard
  });
})

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
