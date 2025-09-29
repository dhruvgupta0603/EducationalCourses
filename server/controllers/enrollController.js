const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');
const User = require('../models/User');

// Enroll in a course
exports.enrollInCourse = async (req, res) => {
  const userId = req.user.id;
  const courseId = req.params.courseId;
  try {
    // Prevent duplicate enrollment
    const alreadyEnrolled = await Enrollment.findOne({ user: userId, course: courseId });
    if (alreadyEnrolled) return res.status(400).json({ msg: 'Already enrolled' });

    const enrollment = new Enrollment({ user: userId, course: courseId });
    await enrollment.save();
    // Also track in user for easy lookup
    await User.findByIdAndUpdate(userId, { $addToSet: { enrolledCourses: courseId } });
    res.status(201).json({ msg: 'Enrolled successfully' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get user's enrolled courses
exports.getUserEnrollments = async (req, res) => {
  const userId = req.user.id;
  try {
    // Find enrollments
    const enrollments = await Enrollment.find({ user: userId }).populate('course');
    res.json(enrollments.map(e => e.course));
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};