const express = require('express');

const router = express.Router();

// @route   GET api/users/test
// @desc    tests users route
// @access  Public
router.get('/test', (req, res, next) => {
  res.json({ success: true, message: 'Users Works' });
});

module.exports = router;
