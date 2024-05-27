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
 *     DetailUserSchema:
 *       $ref: '#/definitions/schemas/DetailUserSchema'
 *     UpdateUserSchema:
 *       $ref: '#/definitions/schemas/UpdateUserSchema'
 *     IdOnlySchema:
 *       $ref: '#/definitions/schemas/IdOnlySchema'
 *     UploadProfilePictureSchema:
 *       $ref: '#/definitions/schemas/UploadProfilePictureSchema'
 *     UploadCoverPictureSchema:
 *       $ref: '#/definitions/schemas/UploadCoverPictureSchema'
 * 
 * definitions:
 *   schemas:
 *     DetailUserSchema:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         fullName: 
 *           type: string
 *         email:
 *           type: string
 *         phoneNumber:
 *           type: string
 *         profilePicture:
 *           type: string
 *         coverPhoto:
 *           type: string
 *         bio:
 *           type: string
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
 *     UploadProfilePictureSchema:
 *       type: object
 *       properties:
 *         profilePicture:
 *           id:
 *             type: string
 *     UploadCoverPictureSchema:
 *       type: object
 *       properties:
 *         coverPhoto:
 *           type: string
 *  
 */

/**
 * @openapi
 * /api/users/detail:
 *   get:
 *     summary: Get Detaul User Info
 *     tags: [User API]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetailUserSchema'
 */
routes.get("/detail", AuthMiddleware, UserController.getById);

/**
 * @openapi
 * /api/users/update:
 *   put:
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

/**
 * @openapi
 * /api/users/upload/profile-picture:
 *   patch:
 *     summary: Change Profile Picture
 *     tags: [User API]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UploadProfilePictureSchema'
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IdOnlySchema'
 */
routes.patch("/upload/profile-picture", AuthMiddleware, UserController.uploadProfilePicture);

/**
 * @openapi
 * /api/users/upload/cover-picture:
 *   patch:
 *     summary: Change Cover Picture
 *     tags: [User API]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UploadCoverPictureSchema'
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IdOnlySchema'
 */
routes.patch("/upload/cover-photo", AuthMiddleware, UserController.uploadCoverPicture);

/**
 * @openapi
 * /api/users/upload/profile-picture:
 *   delete:
 *     summary: Delete Profile Picture
 *     tags: [User API]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IdOnlySchema'
 */
routes.delete("/upload/profile-picture", AuthMiddleware, UserController.deleteProfilePicture);

/**
 * @openapi
 * /api/users/upload/cover-picture:
 *   delete:
 *     summary: Delete Cover Picture
 *     tags: [User API]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IdOnlySchema'
 */
routes.delete("/upload/cover-picture", AuthMiddleware, UserController.deleteCoverPicture);

module.exports = routes;
