const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  poll: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poll',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
    required: true
  },
  selectedOption: {
    type: Number,
    required: true
  },
  votedAt: {
    type: Date,
    default: Date.now
  }
});
const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
