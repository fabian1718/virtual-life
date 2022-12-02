const { Router } = require('express');
const { getAllCarts, addProductsToCart } = require('../controllers/carts.controllers');
const router = Router();

//Get all users
/**
 * @openapi
 * /api/v1/carts:
 *   get:
 *     summary: optiene el carrito de compras
 *     tags: [carts]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 */




// optener todos los usuarios
router.get('/carts', getAllCarts);


module.exports = router;