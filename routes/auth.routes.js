const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// User Model
const User = require('../model/User');

const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// @route   POST api/auth
// @desc    Auth user
// @access  Public
router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.json({
      success: false,
      error: 'Please enter all fields'
    });
  }

  // Check for existing user
  User.findOne({ email }).then(user => {
    if (!user)
      return res.json({
        success: false,
        error: 'User Does not exist'
      });

    // Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch)
        return res.json({
          success: false,
          error: 'Invalid credentials'
        });
      jwt.sign({ user: user }, 'kk', (err, token) => {
        res.json({
          success: true,
          message: 'auth',
          token,
          user
        });
      });
    });
  });
});

// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get('/user', auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id });
    if (!user)
      return res.json({ success: false, error: 'user token not valid' });
    res.json({
      success: true,
      message: 'auth',
      user: req.user
    });
  } catch (error) {
    res.json({ success: false, error });
  }
});

// @route   GET api/auth/logout
// @desc    logout
// @access  Private
router.get('/logout', auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id });
    if (!user)
      return res.json({ success: false, error: 'user token not valid' });
    res.json({
      success: true,
      message: 'logout'
    });
  } catch (error) {
    res.json({ success: false, error });
  }
});

module.exports = router;
