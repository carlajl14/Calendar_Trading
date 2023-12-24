const db = require("../bd/indices.json");

const getAllIndices = () => {
    return db.indices;
};

module.exports = { getAllIndices };