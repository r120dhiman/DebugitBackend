const express= require('express');
const cors=require('cors');
require('dotenv').config();

// Files Imported
const app=express();

const {  DB_Connection } = require('./connections/Connection');
const AuthRouter = require('./routes/User');
const cookieParser = require('cookie-parser');
// const { checkforcookie } = require('./Middleware/Checkforcookie');
const ReportRouter = require('./routes/Reports');
const PollRouter = require('./routes/Poll');
const VoteRouter = require('./routes/Vote');
//Env Variables
const port=process.env.PORT || 3001;
//Middlewares
app.use(cors( {
  origin: "*", 
  credentials: true
}));
app.use(cookieParser());

app.use(express.json()); 

const DB_URL= process.env.MONGO_URL2;

DB_Connection(DB_URL);
app.get('/', (req, res) => {
    return res.send("Welcome to the home page.");
});
app.use('/user', AuthRouter);
app.use('/reports',ReportRouter);

app.use('/poll',PollRouter);
app.use('/vote',VoteRouter);
app.listen(port, (error) => {
  console.log("the app is listening on http://localhost:"+port);
}
)