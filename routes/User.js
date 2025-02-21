const { Router } = require('express');
const User = require('../models/user');

const AuthRouter = Router();

AuthRouter.get('/login', (req, res) => {
  return res.status(200).send("Welcome to the Login Page");
});

AuthRouter.post('/login', async (req, res) => {
  const { email,password } = req.body;
  try {
    const {token, userdetails}=await User.matchpassword(email, password);
    // console.log(token);
    return res.send({token,userdetails});
  } catch (error) {
    console.error(error);
    return res.status(500).send('No user found');
  }
});

AuthRouter.get('/signup', (req, res) => {
  return res.send("Welcome to Signup Page");
});

AuthRouter.post('/signup', async (req, res) => {
  const { email, first_name, last_name, password } = req.body;
  console.log(email, password);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(400).json({ message: "Email already in use" });
    } else {
      const user = await User.create({ email, first_name, last_name, password });

      return res.status(201).send("New user crested");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = AuthRouter;