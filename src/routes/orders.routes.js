const { Router } = require('express');
const { getAllOrders, createOrders } = require('../Controllers/orders.controllers');
const router = Router();

// optener todos los usuarios
router.get('/orders', getAllOrders);

// crear usuarios
router.post('/orders', createOrders);

module.exports = router;