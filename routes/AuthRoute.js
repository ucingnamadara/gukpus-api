const AuthController = require("../controllers/AuthController");
const Router = require("express");
const routes = new Router();

routes.post("/register", AuthController.register);
routes.post("/login", AuthController.login);

module.exports = routes;
