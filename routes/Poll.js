const { Router } = require('express');
const {createnewpoll, allpollsbyuser, allpolls}=require('../controller/Poll')

const PollRouter = Router();

PollRouter.post('/create',createnewpoll
);
PollRouter.get('/userpolls',allpollsbyuser
)
PollRouter.get('/allpolls',allpolls
)

module.exports = PollRouter;
