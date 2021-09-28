const express = require('express');
const courseController = require('../controllers/courseControllers');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router
  .route('/')
  .post(roleMiddleware(['Teacher', 'Admin']), courseController.createCourse);
router.route('/').get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getCourse);
router.route('/enroll').post(courseController.enrollCourse);

module.exports = router;
