const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controller/authController');

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;
