const AuthController = require("../controllers/AuthController");
const Router = require("express");
const routes = new Router();
const UserController = require("../controllers/UserController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

routes.put("/update", AuthMiddleware, UserController.update);

module.exports = routes;
