const express = require('express');
const router = express.Router();

const {
  setData,
  getData,
  getCounts,
  incCounts,
} = require('../controllers/dataController');

router.post('/setdata', setData);
router.get('/getdata', getData); // localhost:4000/data/getdata

router.get('/getcount', getCounts);
router.post('/inccount', incCounts);

module.exports = router;
