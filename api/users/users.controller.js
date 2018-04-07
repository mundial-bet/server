const mongoose     = require('mongoose');
const User         = require('./users.model');
const passport     = require('passport');
const bcrypt       = require('bcrypt');
const bcryptSalt   = 10;

exports.login = function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }

    if (!user) { return res.status(401).json(info); }

    req.login(user, function(err) {
      if (err) { return res.status(500).json({ message: 'Something went wrong' }); }
      res.status(200).json(req.user);
    });
  })(req, res, next);
};

exports.signup = function(req, res, next) {
	const { username, password, email } = req.body;
  if (username === "" || password === "" || email === "") {
    res.status(400).json({ message: "Please provide a username, email and password" });
  }
  User.findOne({ username })
  .then(user => {
    if (user !== null) {
      res.status(400).json({ message: "The username already exists" });
      return;
    }
    User.findOne({ email })
    .then(user => {
      if (user !== null) {
        res.status(400).json({ message: "The email is already in use" });
        return;
      }
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
      const newUser = new User({ username, email, password: hashPass });
      newUser.save((err) => {
        if (err) { res.status(400).json({ message: "Something went wrong" });
        } else {
          req.login(newUser, function(err) {
            if (err) { return res.status(500).json({ message: 'Something went wrong' }); }
            res.status(200).json(req.user);  
        });
      };
    });
  })
});
};

exports.isLoggedIn = function(req, res, next) {
	if (req.isAuthenticated()) return res.status(200).json(req.user);
  res.status(403).json({ message: 'Unauthorized' });
};

exports.logout = function(req, res, next) {
  req.logout();
  res.status(200).json({ message: 'Success' });
};

