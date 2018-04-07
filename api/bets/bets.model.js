const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betSchema = new mongoose.Schema({  
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  league: { type: Schema.Types.ObjectId, ref: 'League' },
  match: { type: Schema.Types.ObjectId, ref: 'Match' },
  betHomeGoals: { type: Number },
  betAwayGoals: { type: Number },
  points: { type: Number },
});

module.exports = mongoose.model('Bet', betSchema);