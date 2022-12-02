const { Router } = require("express");
const { userLogin } = require("../controllers/auth.controllers");

//lOGIN
/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: login
 *     tags: [Login]
 *     requestBody:
 *       description: To register a new user you need a userName, email, and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/registerLogin"
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
 *                     $ref: "#/components/schemas/login"
 *
 */


const router = Router();

router.post("/auth/login", userLogin);

module.exports = router;
