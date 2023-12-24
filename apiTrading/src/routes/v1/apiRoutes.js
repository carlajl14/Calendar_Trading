const apiRoutes = require("express").Router();

const divisasrouter = require("./divisaRoutes");
const indicesrouter = require("./indiceRoutes");
const materiasrouter = require("./materiaRoutes");
const cryptorouter = require("./cryptoRoutes");

apiRoutes.use("/v1/divisas", divisasrouter);
apiRoutes.use("/v1/indices", indicesrouter);
apiRoutes.use("/v1/materias", materiasrouter);
apiRoutes.use("/v1/crypto", cryptorouter);

module.exports = apiRoutes;