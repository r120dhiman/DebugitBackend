const { Router } = require('express');
const { userlogingetrequest, userloginpostrequest, usersignupget, usersignuppostrequest } = require('../controller/User');


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

AuthRouter.get('/login', userlogingetrequest);
AuthRouter.post('/login', userloginpostrequest);

AuthRouter.get('/signup',usersignupget);

AuthRouter.post('/signup', usersignuppostrequest);
module.exports = AuthRouter;