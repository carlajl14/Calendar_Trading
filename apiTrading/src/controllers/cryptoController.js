const cryptoService = require("../services/cryptoService")

const getAllCrypto = (req,res) => { 
  const allCrypto = cryptoService.getAllCryptos();
  res.json(allCrypto) 
}


module.exports = { getAllCrypto }