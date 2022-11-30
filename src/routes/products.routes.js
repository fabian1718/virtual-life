const { Router } = require('express');
const { getAllProducts, createProduct } = require('../controllers/products.controllers');
const router = Router();

//Get all productos
/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     summary: optiene todos los productos
 *     tags: [products]
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

//POST user
/**
 * @openapi
 * /api/v1/products:
 *   post:
 *     summary: Agrega un nuevo producto
 *     tags: [products]
 *     requestBody:
 *       description: To register a new user you need a name, price, availableQty, status, userId
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/registerProducts"
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
 *                     $ref: "#/components/schemas/products"
 *
 */


// optener todos los usuarios
router.get('/products', getAllProducts);

// crear prodcuto
router.post('/products', createProduct);

module.exports = router;