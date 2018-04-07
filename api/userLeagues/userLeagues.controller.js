mongoose = require('mongoose');
const UserLeagues = require('./userLeagues.model');
const Leagues = require('../leagues/leagues.model');

exports.saveUserLeague = function(req, res, next) {
  const league = req.body.leagueId;
  const user = req.user._id || 'dnsjklda321321';
  UserLeagues.find({league: league, user: user})
  .then(userLeague => {
    if (userLeague.length > 0) {
      res.status(400).json({'message': 'You are already in this league!'});
      return;
    }
    UserLeagues.find({league:league})
    .then(leagueParticipants => {
      Leagues.findOne({_id: league})
      .then(leagueInfo => {
        if(leagueParticipants.length == leagueInfo.maxParticipants) {
          res.status(400).json({'message': 'Sorry! The league is full!'});
          return;
        }
        const newUserLeague = new UserLeagues({ user, league })
          newUserLeague.save()
          .then(relation => {
            res.status(200).json(relation)
          })
        })
      })
    })
  .catch(error => {
    next(error)
  })
};

exports.removeUserLeague = function(req, res, next) {
  const league = req.body.leagueId;
  const user = req.user._id || 'dnsjklda321321';
  UserLeagues.remove({user: user, league: league})
  .then(message => {
    res.status(200).json({'message': 'You have been removed from this league!'})
  })
  .catch(error => {
    next(error)
  })
};

exports.getUserLeagues = function(req, res, next) {
  let user = req.params.id;
  UserLeagues.find({user})
  .populate('league')
  .then(leagues => {
    res.status(200).json(leagues)
  })
};

exports.getLeague = function(req, res, next) {
  let league = req.params.id;
  UserLeagues.find({league}, {_id: 0, rank: 0})
  .populate('user')
  .then(users => {
    res.status(200).json(users)
  })
};