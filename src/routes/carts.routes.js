const { Router } = require('express');
const { getAllCarts, createCarts } = require('../controllers/carts.controllers');
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

//POST user
/**
 * @openapi
 * /api/v1/carts:
 *   post:
 *     summary: Agrega al carrito de compras
 *     tags: [carts]
 *     requestBody:
 *       description: To register a new user you need a userId and totalPrice
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/registerCarts"
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
 *                     $ref: "#/components/schemas/carts"
 *
 */


// optener todos los usuarios
router.get('/carts', getAllCarts);

// crear usuarios
router.post('/carts', createCarts);

module.exports = router;