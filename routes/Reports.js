const {Router}= require('express');
const Report = require('../models/Report');
const ReportRouter=Router();

ReportRouter.post('/newreport', async(req,res) => {
  const {title, description,userid} =await req.body;

  const report= await Report.create({title,description,reportedby:userid});
  if (report) {
    return res.send("Reported submitted");
  }
  return res.send("Some error occured");
}
)
ReportRouter.get('/allreports',async(req,res) => {
  const allreports= await  Report.find({});
  return res.send(allreports);
}
)

ReportRouter.get('/userreports', async(req,res ) => {
  console.log(req.userid)
  const userreports=await Report.find({reportedby:req.userid});
  return res.send(userreports);
}
)
module.exports=ReportRouter;