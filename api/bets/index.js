const express = require('express');
const controller = require('./bets.controller');

const router = express.Router();

router.post('/new', controller.signup);
router.post('/edit', controller.login);
router.get('/updatePoints', controller.isLoggedIn);
router.get('/logout', controller.login);

module.exports = router;