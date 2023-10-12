const express = require('express');
const router = express.Router();
const fs = require('fs');
const { verifyToken } = require('../middleware/authMiddleware');

const teachersData = JSON.parse(fs.readFileSync('teachers.json'));

router.get('/', verifyToken, (req, res) => {
  res.json(teachersData);
});

module.exports = router;