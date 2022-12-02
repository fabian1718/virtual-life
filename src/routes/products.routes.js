const { Router } = require('express');
const { getByIdProducts, createProduct } = require('../controllers/products.controllers');
const authenticate = require('../middlewares/auth.middleware');
const router = Router();

//Get all productos
/**
 * @openapi
 * /api/v1/products/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Muestra todos los productos que vende el usuario
 *     tags: [products]
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
 * /api/v1/products:
 *   post:
 *     summary: Agrega un nuevo producto para vender
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
router.get('/products/:id', authenticate, getByIdProducts);

// crear prodcuto
router.post('/products', createProduct);

module.exports = router;