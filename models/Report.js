const mongoose=require('mongoose');

const ReportSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    reportedby:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Report= new mongoose.model("Report", ReportSchema);

module.exports=Report;