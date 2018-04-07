mongoose = require('mongoose');
const Leagues = require('./leagues.model');

exports.createLeague = function(req, res, next) {
  const { name, maxParticipants, private } = req.body;
  const creator = req.user._id || 'dnsjklda321321';
  const newLeague = new Leagues({
    name, maxParticipants, private, creator
  })
  newLeague.save()
  .then(league => {
    res.status(200).json(league)
  })
  .catch(error => {
    next(error)
  })
};

exports.filterLeagues = function(req, res, next) {
  Leagues.find({})
  .then(leagues => {
    res.status(200).json(leagues)
  })
};

exports.getLeagues = function(req, res, next) {
  Leagues.find({})
  .then(leagues => {
    res.status(200).json(leagues)
  })
};