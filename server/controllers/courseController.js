const Course = require('../models/Course');

// List all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get single course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ msg: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// (Optional) Add a new course
exports.addCourse = async (req, res) => {
  const { title, description } = req.body;
  try {
    const course = new Course({ title, description });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};