const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const passport = require('passport');
// User Model
const User = require('../model/User');
const requireAuth = require('../middleware/services/passport');

function tokenForUser(user) {
  let timestamp = new Date().getTime();
  return jwt.encode(
    { sub: user.id, iat: timestamp },
    process.env.SECRET_OR_KEY
  );
}

// @route   POST api/auth
// @desc    Auth user
// @access  Public
router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.json({
      success: false,
      message: 'Please enter all fields'
    });
  }

  // Check for existing user
  User.findOne({ email }).then(user => {
    if (!user)
      return res.json({
        success: false,
        message: 'User Does not exist'
      });

    // Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch)
        return res.json({
          success: false,
          message: 'Invalid credentials'
        });
      res.json({
        success: true,
        message: 'auth',
        token: tokenForUser(user),
        user
      });
    });
  });
});

// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get('/user', requireAuth, (req, res) => {
  res.json({
    success: true,
    message: 'auth',
    user: req.user
  });
});

module.exports = router;
