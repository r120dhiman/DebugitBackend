const { Router } = require('express');
const Poll = require('../models/Poll');

const PollRouter = Router();

PollRouter.post('/create', async (req, res) => {
  const { question, options,  userid } = req.body;
  if (!question || !options || options.length === 0) {
    return res.status(400).json({ error: 'Question and at least one option are required.' });
  }

  try {
    const newPoll = new Poll({
      question,
      options: options.map(option => ({ optionText: option.optionText, votes: 0 })), 
      createdBy: userid, 
    });
    await newPoll.save();
    return res.status(201).json({ message: 'Poll created successfully', pollId: newPoll._id });
  } catch (error) {
    console.error('Error creating poll:', error);
    return res.status(500).json({ error: 'Server error while creating poll' });
  }
});
PollRouter.get('/userpolls',async(req,res ) => {
 const userid=req.query.userid
  const userpolls=await Poll.find({createdBy:userid});
  return res.send(userpolls)
}
)
PollRouter.get('/allpolls',async(req,res ) => {
  const allpolls=await Poll.find({});
  return res.send(allpolls);
}
)

module.exports = PollRouter;
