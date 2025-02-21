const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  options: [{
    optionText: {
      type: String,
      required: true,
      trim: true,
    },
    votes: {
      type: Number,
      default: 0,
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
  }
  
});

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;
