const {Router}= require('express');
const { createreport, allreports, allreportsbyuser } = require('../controller/Reports');

const ReportRouter=Router();

ReportRouter.post('/newreport', createreport
)
ReportRouter.get('/allreports',allreports
)

ReportRouter.get('/userreports', allreportsbyuser
)
module.exports=ReportRouter;