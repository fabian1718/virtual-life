const { Router } = require('express');
const { getAllCarts, createCarts } = require('../Controllers/carts.controllers');
const router = Router();

// optener todos los usuarios
router.get('/carts', getAllCarts);

// crear usuarios
router.post('/carts', createCarts);

module.exports = router;