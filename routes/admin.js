const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();


router.get('/', authMiddleware(['admin']), (req, res) => {
  res.json({ msg: 'Admin dashboard', user: req.user });
});

module.exports = router;
