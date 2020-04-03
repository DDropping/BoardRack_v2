//middleware to check if header contains a token >> then validates it

const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  //get token from header
  const token = req.header('x-auth-token');

  //check if token exists
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  //verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid ' });
  }
};
