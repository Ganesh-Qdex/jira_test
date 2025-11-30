const express = require('express');
const router = express.Router();
const {
  createUser,
} = require('../controllers/userController');

// POST create new user
router.post('/', createUser);

module.exports = router;

