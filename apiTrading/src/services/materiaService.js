const db = require("../bd/materias.json");

const getAllMaterias = () => {
    return db.materias;
};

module.exports = { getAllMaterias };