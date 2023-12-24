const indicesRoutes = require("express").Router();

const indicesController = require("../../controllers/indiceController")

indicesRoutes.get("/", indicesController.getAllIndices);

module.exports = indicesRoutes;