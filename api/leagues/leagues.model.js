const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueSchema = new mongoose.Schema({  
  name: {
    type: String,
    require: true
  },
  maxParticipants: {
    type: Number,
    require: true
  },
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  private: {
    type: Boolean,
    require: true,
    default: true
  },
  inscription: {
    type: Number,
    default: 0
  },
  participants: Number
});

module.exports = mongoose.model('League', leagueSchema);