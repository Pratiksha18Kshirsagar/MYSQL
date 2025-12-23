const express = require('express');
const router = express.Router();
const { fetchUsers, createUser } = require('../controllers/userControllers');

// Get all users    
router.get('/', fetchUsers);

router.post('/add', createUser);

module.exports = router;