const divisasRoutes = require("express").Router();

const divisasController = require("../../controllers/divisaController")

divisasRoutes.get("/", divisasController.getAllDivisas);

module.exports = divisasRoutes;