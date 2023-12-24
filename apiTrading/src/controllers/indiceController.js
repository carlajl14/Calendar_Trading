const indiceService = require("../services/indiceService");

const getAllIndices = (req, res) => {
    const allIndices = indiceService.getAllIndices();
    res.json(allIndices);
}

module.exports = { getAllIndices }