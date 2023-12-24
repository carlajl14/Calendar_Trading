const cryptoRoutes = require("express").Router();

const cryptoController = require("../../controllers/cryptoController")

cryptoRoutes.get("/", cryptoController.getAllCrypto);

module.exports = cryptoRoutes;