const express = require('express');
const controller = require('./leagues.controller');

const router = express.Router();

router.post('/new', controller.createLeague);
router.get('/filter', controller.filterLeagues);
router.get('/all', controller.getLeagues);

module.exports = router;