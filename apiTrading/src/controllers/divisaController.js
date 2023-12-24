const divisaService = require("../services/divisaService");

const getAllDivisas = (req, res) => {
    const allDivisas = divisaService.getAllDivisas();
    res.json(allDivisas);
};

module.exports = { getAllDivisas };