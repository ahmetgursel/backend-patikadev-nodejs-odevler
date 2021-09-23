const express = require('express');
const authController = require('../controllers/authControllers');

const router = express.Router();

router.route('/signup').post(authController.createUser);
router.route('/login').post(authController.loginUser);

module.exports = router;