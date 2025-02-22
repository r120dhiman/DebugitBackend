const Report = require('../models/Report');

async function createreport(req,res) {
    const {title, description,userid} =await req.body;

    const report= await Report.create({title,description,reportedby:userid});
    if (report) {
      return res.send("Reported submitted");
    }
    return res.send("Some error occured");
  
}

async function allreports(req,res ) {
    const allreports= await  Report.find({});
  return res.send(allreports);
}

async function allreportsbyuser(req,res) {
    const userid=req.query.userid;
  const userreports=await Report.find({reportedby:userid});
  return res.send(userreports);
}

module.exports={createreport,allreports,allreportsbyuser}