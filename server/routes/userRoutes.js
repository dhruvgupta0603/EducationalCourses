const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Register
router.post('/register', registerUser);
// Login
router.post('/login', loginUser);
// Profile (protected)
router.get('/profile', authMiddleware, getUserProfile);

module.exports = router;