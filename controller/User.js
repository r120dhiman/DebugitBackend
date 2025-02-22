const User = require('../models/user');

async function userlogingetrequest(req,res) {
    return res.status(200).send("Welcome to the Login Page");
}

async function userloginpostrequest(req,res) {
    const { email,password } = req.body;
  try {
    const {token, userdetails}=await User.matchpassword(email, password);
    return res.send({token,userdetails});
  } catch (error) {
    console.error(error);
    return res.status(500).send('No user found');
  }
}

async function usersignupget(req,res) {
    return res.send("Welcome to Signup Page");
}

async function usersignuppostrequest(req,res) {
    const { email, first_name, last_name, password } = req.body;
  console.log(email, password);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(400).json({ message: "Email already in use" });
    } else {
      const user = await User.create({ email, first_name, last_name, password });
      
      return res.status(201).send("New user created");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports={userlogingetrequest,userloginpostrequest,usersignupget,usersignuppostrequest}