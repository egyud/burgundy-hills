const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');

// POST /api/users/login
router.post('/login', userController.loginUser);

// POST /api/users/register
router.post('/register', userController.createUser);

module.exports = router;