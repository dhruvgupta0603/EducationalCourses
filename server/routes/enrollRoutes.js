const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { enrollInCourse, getUserEnrollments } = require('../controllers/enrollController');

// Enroll in a course (protected)
router.post('/:courseId', authMiddleware, enrollInCourse);
// Get user's enrolled courses (protected)
router.get('/my', authMiddleware, getUserEnrollments);

module.exports = router;