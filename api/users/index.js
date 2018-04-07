const express = require('express');
const controller = require('./users.controller');

const router = express.Router();

router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.get('/isloggedin', controller.isLoggedIn);
router.get('/logout', controller.login);

module.exports = router;