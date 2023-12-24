//const saveToDataBase = require("../bd/bd");
const db = require("../bd/divisas.json");
//const { v4: uuid } = require("uuid");

const getAllDivisas = () => {
    return db.divisas;
};

module.exports = { getAllDivisas };