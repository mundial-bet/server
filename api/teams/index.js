const express = require('express');
const controller = require('./teams.controller');

const router = express.Router();

router.get('/all', controller.getTeams);

module.exports = router;