const path = require('path');

module.exports = function(app) {

  app.use('/api/user', require('../api/users'));
  app.use('/api/leagues', require('../api/leagues'));
  app.use('/api/matches', require('../api/matches'));
  app.use('/api/teams', require('../api/teams'));
  // app.use('/api/userLeague', require('../api/userLeague'));
  // app.use('/api/userBet', require('../api/userBet'));

	// catch 404
  app.all('/*', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
  });
};
