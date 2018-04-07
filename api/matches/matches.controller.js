const _ = require('lodash');
mongoose = require('mongoose');
const Matches = require('./matches.model');
const Teams = require('../teams/teams.model');

exports.getTeams = function(req, res, next) {
  Matches.find({})
  .populate('home.team_id')
  .populate('away.team_id')
  .then(matches => {
    res.status(200).json(matches)
  })
};