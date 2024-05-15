const PetController = require("../controllers/PetController");
const Router = require("express");
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const routes = new Router();

routes.post("", AuthMiddleware, PetController.createPet);
routes.get("", AuthMiddleware, PetController.getPets);
routes.get("/:id", AuthMiddleware, PetController.getPetById);
routes.put("/:id", AuthMiddleware, PetController.updatePet);
routes.delete("/:id", AuthMiddleware, PetController.deletePet);

routes.post("/upload", AuthMiddleware, PetController.uploadPetImage);
routes.get("/:id/image", AuthMiddleware, PetController.getPetImage);


module.exports = routes;
