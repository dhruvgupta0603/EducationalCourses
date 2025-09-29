const express = require('express');
const router = express.Router();
const { getCourses, getCourseById, addCourse } = require('../controllers/courseController');

// List all courses
router.get('/', getCourses);
// Get one course by ID
router.get('/:id', getCourseById);
// (Optional) Add a new course (for admin use, you can secure this later)
router.post('/', addCourse);

module.exports = router;