const { Router } = require('express');
const { voting } = require('../controller/Vote');



const VoteRouter = Router();

VoteRouter.post('/newvote', voting);

module.exports = VoteRouter;
