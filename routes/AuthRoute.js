const AuthController = require("../controllers/AuthController");
const Router = require("express");
const routes = new Router();

routes.post("/auth/register", AuthController.register);
routes.post("/auth/login", AuthController.login);

module.exports = routes;
