const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userLeagueSchema = new mongoose.Schema({  
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  league: { type: Schema.Types.ObjectId, ref: 'League' },
  rank: { type: Number, default: 1 },
  totalPoints: { type: Number, default: 0 },
});

module.exports = mongoose.model('UserLeague', userLeagueSchema);