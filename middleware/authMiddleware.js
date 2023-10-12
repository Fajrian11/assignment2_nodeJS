const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secret'; 

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ 
        status: 401,
        message: 'Unauthorized' 
    });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ 
        status: 403,
        message: 'Forbidden'
    });
    }
    req.user = user;
    next();
  });
}

module.exports = {
  verifyToken
};