mongoose = require('mongoose');
const Teams = require('./teams.model');

exports.getTeams = function(req, res, next) {
  Teams.find({})
  .then(teams => {
    res.status(200).json(teams)
  })
};