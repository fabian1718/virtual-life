const { Router } = require('express');
const { getAllProducts, createProduct } = require('../Controllers/products.controllers');
const router = Router();

// optener todos los usuarios
router.get('/products', getAllProducts);

// crear prodcuto
router.post('/products', createProduct);

module.exports = router;