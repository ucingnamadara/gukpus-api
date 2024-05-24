const AuthController = require("../controllers/AuthController");
const Router = require("express");
const routes = new Router();
const UserController = require("../controllers/UserController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");


/** 
 * @openapi
 * tags:
 *   name: User API
 *   description: User Management
 * 
 * components:
 *   schemas:
 *     UpdateUserSchema:
 *       $ref: '#/definitions/schemas/UpdateUserSchema'
 *     IdOnlySchema:
 *       $ref: '#/definitions/schemas/IdOnlySchema'
 * 
 * definitions:
 *   schemas:
 *     UpdateUserSchema:
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
 *     IdOnlySchema:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *  
 */

/**
 * @openapi
 * /api/user/update:
 *   post:
 *     summary: Update User Info
 *     tags: [User API]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserSchema'
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IdOnlySchema'
 */
routes.put("/update", AuthMiddleware, UserController.update);

module.exports = routes;
