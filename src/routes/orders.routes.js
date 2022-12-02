const { Router } = require('express');
const { getAllOrders, createOrders } = require('../controllers/orders.controllers');
const authenticate = require('../middlewares/auth.middleware');
const router = Router();

//Get all orders
/**
 * @openapi
 * /api/v1/orders:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: optiene todas las ordenes
 *     tags: [orders]
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
 * /api/v1/orders:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Agrega un nuevo producto
 *     tags: [orders]
 *     requestBody:
 *       description: To register a new user you need a totalPrice, userId, status
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/registerOrders"
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
 *                     $ref: "#/components/schemas/orders"
 *
 */


// optener todos los usuarios
router.get('/orders', authenticate, getAllOrders);

// crear usuarios
router.post('/orders', authenticate, createOrders);

module.exports = router;