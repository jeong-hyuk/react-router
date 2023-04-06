const express = require('express');
const router = express.Router();

const { setDate } = require('../controllers/dataController');

router.post('/setdata', setDate);

module.exports = router;
