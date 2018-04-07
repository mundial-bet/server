const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../api/users/users.model');
const bcrypt        = require('bcrypt');

passport.use(new LocalStrategy({
  usernameField: 'email'
},
(email, password, next) => {
  User.findOne({ email }, (err, foundUser) => {
    if (err) {
      next(err);
      return;
    }

    if (!foundUser) {
      next(null, false, { message: 'Incorrect username' });
      return;
    }

    if (!bcrypt.compareSync(password, foundUser.password)) {
      next(null, false, { message: 'Incorrect password' });
      return;
    }

    next(null, foundUser);
  });
}));
