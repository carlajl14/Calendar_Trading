const db = require("../bd/cryptos.json");

const getAllCryptos = () => {
    return db.cryptos;
};

module.exports = { getAllCryptos };