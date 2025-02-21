const { Router } = require('express');
const User = require('../models/user');

const AuthRouter = Router();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }
  
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

AuthRouter.get('/login', (req, res) => {
  return res.status(200).send("Welcome to the Login Page");
});

AuthRouter.get('/verify-token', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ userdetails: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
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