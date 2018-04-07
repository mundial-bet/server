const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new mongoose.Schema({  
  name: {
    type: String,
    require: true
  },
  flag: {
    type: String,
    require: true
  },
  players: Array,
});

module.exports = mongoose.model('Team', teamSchema);