const { Router } = require('express');
const { addProductsToCart } = require('../controllers/productInCarts.controllers');
const router = Router();

//POST crear un nuevo producto
/**
 * @openapi
 * /api/v1/add:
 *   post:
 *     summary: Agrega un productos al carrito
 *     tags: [addProductsToCart]
 *     requestBody:
 *       description: To register a new user you need a cartId, productId, quantity and price
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/registerAdd"
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/add"
 *
 */

// adicionar productos al carrito
router.post('/add', addProductsToCart);

module.exports = router;