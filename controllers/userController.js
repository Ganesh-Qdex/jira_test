const User = require('../models/User');

// @desc    Create new user
// @route   POST /api/users
// @access  Public
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: 'Email already exists',
      });
    }
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
};

