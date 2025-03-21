const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware(['user', 'admin']), (req, res) => {
  res.json({ msg: 'Welcome to your profile', user: req.user });
});

module.exports = router;
