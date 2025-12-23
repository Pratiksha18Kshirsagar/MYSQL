const express = require('express');
const router = express.Router();
const { getAllBuses, addNewBus , getAvailableBuses} = require('../controllers/busControllers');

router.get('/', getAllBuses);
router.get('/available/:seats', getAvailableBuses);
router.post('/add', addNewBus);

module.exports = router;