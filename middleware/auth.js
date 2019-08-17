const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
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
    const decoded = jwt.verify(token, process.env.SECRET_OR_KEY);
    req.id = decoded.id;
    next();
  } catch (err) {
    res.json({ success: false, message: 'Token is not valid' });
  }
};
