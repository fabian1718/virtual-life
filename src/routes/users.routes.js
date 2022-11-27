const { Router } = require('express');
const { getAllUsers, createUsers } = require('../Controllers/users.controllers');
const router = Router();

// optener todos los usuarios
router.get('/users', getAllUsers);

// crear usuarios
router.post('/users', createUsers);

module.exports = router;