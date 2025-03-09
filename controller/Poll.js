const Poll = require('../models/Poll')
async function createnewpoll(req,res){

  const { question, options,  createdBy } = req.body;
  if (!question || !options || options.length === 0) {
    return res.status(400).json({ error: 'Question and at least one option are required.' });
  }

  try {
    const newPoll = new Poll({
      question,
      options: options.map(option => ({ optionText: option.optionText, votes: 0 })), 
      createdBy: createdBy, 
    });
    await newPoll.save();
    return res.status(201).json({ message: 'Poll created successfully', pollId: newPoll._id });
  } catch (error) {
    console.error('Error creating poll:', error);
    return res.status(500).json({ error: 'Server error while creating poll' });
  }
}

async function allpollsbyuser(req,res) {
    const userid=req.query.userid
  const userpolls=await Poll.find({createdBy:userid});
  return res.send(userpolls);
}

async function allpolls(req,res) {
    const allpolls=await Poll.find({});
  return res.send(allpolls);
}

module.exports={createnewpoll,allpollsbyuser,allpolls}