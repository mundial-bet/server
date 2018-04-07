const express = require('express');
const controller = require('./userLeagues.controller');

const router = express.Router();

router.post('/new', controller.saveUserLeague);
router.post('/remove', controller.removeUserLeague);
router.get('/user/:id', controller.getUserLeagues);
router.get('/league/:id', controller.getLeague);


module.exports = router;