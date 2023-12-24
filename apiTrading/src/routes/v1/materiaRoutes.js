const materiasRoutes = require("express").Router();

const materiasController = require("../../controllers/materiaController")

materiasRoutes.get("/", materiasController.getAllMaterias);

module.exports = materiasRoutes;