const jwt = require('jsonwebtoken');
const fs = require('fs');

const SECRET_KEY = 'secret';
const usersData = JSON.parse(fs.readFileSync('users.json'));

// Login
async function login(req, res) {
    try {
      const { username, password } = req.body;
  
      const user = usersData.find(user => user.username === username && user.password === password);
  
      if (user) {
        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ 
            status: 200,
            token 
        });
      } else {
        res.status(401).json({ 
            status: 401,
            message: 'username/password salah' 
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: 'Internal Server Error' 
    });
    }
  }
  
  module.exports = {
    login
  };