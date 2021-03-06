mongoose = require('mongoose');
const Leagues = require('./leagues.model');
const UserLeagues = require('../userLeagues/userLeagues.model');

exports.createLeague = function(req, res, next) {
  const { name, maxParticipants, private } = req.body;
  const creator = req.user._id || 'dnsjklda321321';
  const newLeague = new Leagues({
    name, maxParticipants, private, creator
  })
  newLeague.save()
  .then(league => {
    const newUserLeague = new UserLeagues({ user: creator, league: league._id })
    newUserLeague.save()
    .then(relation => {
      res.status(200).json(league)
    })
  })
  .catch(error => {
    next(error)
  })
};

exports.removeLeague = function(req, res, next) {
  let league = req.params.id;
  UserLeagues.remove({league})
  .then(message => {
    Leagues.remove({_id: league})
    .then(response => {
      res.status(200).json(response)
    })
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