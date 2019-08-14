const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const gravatar = require('gravatar');

// User Model
const User = require('../model/User');

// helpers Function
function tokenForUser(user) {
  let timestamp = new Date().getTime();
  return jwt.encode(
    { sub: user.id, iat: timestamp },
    process.env.SECRET_OR_KEY
  );
}

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.json({
      success: false,
      message: 'Please enter all fields'
    });
  }

  // Check for existing user
  User.findOne({ email }).then(user => {
    if (user)
      return res.json({
        success: false,
        message: 'User already exists'
      });

    const avatar = gravatar.url(email, {
      s: '200',
      r: 'r',
      d: 'mm'
    });

    clearance = ['not_certified'];

    const newUser = new User({
      name,
      email,
      password,
      clearance,
      status: 'off',
      avatar
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          res.json({
            token: tokenForUser(user)
          });
        });
      });
    });
  });
});

module.exports = router;
