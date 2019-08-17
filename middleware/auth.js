const jwt = require('jsonwebtoken');
const User = require('../model/User');

module.exports = async function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.json({
      success: false,
      message: 'No token, authorization denied'
    });
  }
  // Verify token
  try {
    const { id } = jwt.verify(token, process.env.SECRET_OR_KEY);
    const user = await User.findOne({ _id: id });
    if (!user)
      return res.json({ success: false, error: 'user token not valid' });
    user['status'] = 'on';
    req.user = user;
    next();
  } catch (err) {
    res.json({ success: false, message: 'Token is not valid' });
  }
};
