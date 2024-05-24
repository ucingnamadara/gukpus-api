const AuthController = require("../controllers/AuthController");
const Router = require("express").Router;
const router = new Router();

/**
 * @openapi
 * tags:
 *   name: Auth API
 *   description: Authentication Management
 *
 * components:
 *   schemas:
 *     RegisterUserRequest:
 *       $ref: '#/definitions/schemas/RegisterUserRequest'
 *     UserAuthResponse:
 *       $ref: '#/definitions/schemas/UserAuthResponse'
 *
 * definitions:
 *   schemas:
 *     RegisterUserRequest:
 *       type: object
 *       properties:
 *         fullName:
 *           type: string
 *         email:
 *           type: string
 *         phoneNumber:
 *           type: string
 *         bio:
 *           type: string
 *         password:
 *           type: string
 *         confirmPassword:
 *           type: string
 *         otp:
 *           type: string
 *         address:
 *           type: string
 *
 *     UserAuthResponse:
 *       type: object
 *       properties:
 *         user:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             fullName:
 *               type: string
 *             email:
 *               type: string
 *             phoneNumber:
 *               type: string
 *         token:
 *           type: object
 *           properties:
 *             accessToken:
 *               type: string
 *             refreshToken:
 *               type: string
 */

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags: [Auth API]
 *     summary: Register new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterUserRequest'
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserAuthResponse'
 */
router.post("/register", AuthController.register);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags: [Auth API]
 *     summary: Login with existing user
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserAuthResponse'
 */
router.post("/login", AuthController.login);

module.exports = router;
