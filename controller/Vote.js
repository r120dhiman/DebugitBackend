const Vote = require('../models/Vote');
const Poll = require('../models/Poll');

async function voting(req,res) {
    const { pollId, userId, selectedOption } = req.body;

  if (!pollId || !userId || selectedOption === undefined) {
    return res.status(400).json({ error: 'Poll ID, user ID, and selected option are required.' });
  }

  try {
    const poll = await Poll.findById(pollId);
    if (!poll) {
      return res.status(404).json({ error: 'Poll not found.' });
    }
    const existingVote = await Vote.findOne({ poll: pollId, user: userId });
    if (existingVote) {
      return res.status(400).json({ error: 'You have already voted on this poll.' });
    }
    const vote = new Vote({
      poll: pollId,
      user: userId,
      selectedOption
    });
    await vote.save();
    poll.options[selectedOption].votes += 1;
    await poll.save();
    const count=poll.options[selectedOption].votes;
    return res.status(201).json({ message: 'Vote registered successfully.',count });
  } catch (error) {
    console.error('Error registering vote:', error);
    return res.status(500).json({ error: 'Error registering vote.' });
  }
}

module.exports={voting}