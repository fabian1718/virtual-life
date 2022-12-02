const { Router } = require('express');
const { getAllCarts, addProductsToCart } = require('../controllers/carts.controllers');
const authenticate = require('../middlewares/auth.middleware');
const router = Router();

//Get all products
/**
 * @openapi
 * /api/v1/carts/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: optiene los productos que usuario tiene en el carrito
 *     tags: [carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         require: true
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
router.get('/carts/:id', authenticate, getAllCarts);


module.exports = router;