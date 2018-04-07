const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new mongoose.Schema({  
  home: {
    team_id: {type: Schema.Types.ObjectId, ref: 'Team' },
    goals: Number
  },
  away: {
    team_id: { type: Schema.Types.ObjectId, ref: 'Team' },
    goals: Number
  },
  stadium: {
    name: String,
    city: String,
    capacity: Number
  },
  date: Date,
  round: {type: String, enum: ['Group', '1/8 Finals', '1/4 Finals', '1/2 Finals', 'Finals']}
});

module.exports = mongoose.model('Match', matchSchema);