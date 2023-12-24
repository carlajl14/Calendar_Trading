const materiaService = require("../services/materiaService")

const getAllMaterias = (req, res) => { 
  const allMaterias = materiaService.getAllMaterias();
  res.json(allMaterias) 
}


module.exports = { getAllMaterias }