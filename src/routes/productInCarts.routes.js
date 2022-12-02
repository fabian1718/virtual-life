const { Router } = require('express');
const { addProductsToCart, getProductsToCart } = require('../controllers/productInCarts.controllers');
const authenticate = require('../middlewares/auth.middleware');
const router = Router();

//Get all productos
/**
 * @openapi
 * /api/v1/add/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Muestra todos los productos que tiene en el carrito
 *     tags: [productsToCart]
 *     parameters:
 *       - in: path
 *         name: id
 *         require: true
 *         schema: 
 *           type: integer
 *           minimum: 1
 *         description: este es el id del ususario
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


//POST crear un nuevo producto
/**
 * @openapi
 * /api/v1/add:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Agrega un productos al carrito
 *     tags: [productsToCart]
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
router.post('/add', authenticate, addProductsToCart);

//Optiene todos los productos que estan en el carrito
router.get('/add/:id', authenticate, getProductsToCart);

module.exports = router;