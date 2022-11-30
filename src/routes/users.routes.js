const { Router } = require('express');
const { getAllUsers, createUsers } = require('../controllers/users.controllers');
const router = Router();

//Get all users
/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     summary: optiene todos los usuarios
 *     tags: [users]
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
 * /api/v1/users:
 *   post:
 *     summary: Agrega un nuevo usuario
 *     tags: [users]
 *     requestBody:
 *       description: To register a new user you need a userName, email, and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
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
 *                     $ref: "#/components/schemas/users"
 *
 */


// optener todos los usuarios
router.get('/users', getAllUsers);

// crear usuarios
router.post('/users', createUsers);

module.exports = router;