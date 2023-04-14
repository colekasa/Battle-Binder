const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const { Deck, Card, Cards, User } = require('./models');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: "SESSION_SECRET",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});




// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => {
//     User.findAll({
//       include: [
//         {
//           model: Card,
//           through: Deck,
//           as: 'cards',
//         },
//       ],
//     }).then(function (deck) {
//       // console.log(
//       //   deck[0].get({
//       //     plain: true,
//       //   })
//       // );
//     });
//     return console.log('Now listening');
//   });
// });
