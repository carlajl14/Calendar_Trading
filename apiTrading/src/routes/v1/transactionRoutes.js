const transactionRoutes = require("express").Router();

const transactionController = require("../../controllers/transactionController");

transactionRoutes.get("/", transactionController.getAllTransactions);
transactionRoutes.get("/divisa/:divisa", transactionController.getTransactionByDivisa);
transactionRoutes.get("/indice/:indice", transactionController.getTransactionByIndice);
transactionRoutes.get("/materias/:materia", transactionController.getTransactionByMateria);
transactionRoutes.get("/cryptos/:crypto", transactionController.getTransactionByCrypto);
transactionRoutes.post("/", transactionController.createTransaction);
transactionRoutes.delete("/:idtransaction", transactionController.deleteTransaction);

module.exports = transactionRoutes;