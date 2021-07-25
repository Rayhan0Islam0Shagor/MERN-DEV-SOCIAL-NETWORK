const express = require('express');

const router = express.Router();

// @route   GET api/posts/test
// @desc    tests post route
// @access  Public
router.get('/test', (req, res, next) => {
  res.json({ success: true, message: 'test' });
});

module.exports = router;
