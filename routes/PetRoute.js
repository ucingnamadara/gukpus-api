const PetController = require("../controllers/PetController");
const Router = require("express");
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const routes = new Router();

routes.post("/pet", AuthMiddleware, PetController.createPet);
routes.get("/pet", AuthMiddleware, PetController.getPets);
routes.get("/pet/:id", AuthMiddleware, PetController.getPetById);
routes.put("/pet/:id", AuthMiddleware, PetController.updatePet);
routes.delete("/pet/:id", AuthMiddleware, PetController.deletePet);

module.exports = routes;
