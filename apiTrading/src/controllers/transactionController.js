const transactionService = require("../services/transactionService");

const getAllTransactions = (req, res) => {
    const allTransaction = transactionService.getAllTransactions();
    res.json(allTransaction);
};

const getTransactionByDivisa = (req, res) => {
    const transactionByDivisa = transactionService.transactionByDivisa(req.params.divisa);
    res.json(transactionByDivisa);
};

const getTransactionByIndice = (req, res) => {
    const transactionByIndice = transactionService.transactionByIndice(req.params.indice);
    res.json(transactionByIndice);
};

const getTransactionByMateria = (req, res) => {
    const transactionByMateria = transactionService.transactionByMateria(req.params.materia);
    res.json(transactionByMateria);
};

const getTransactionByCrypto = (req, res) => {
    const transactionByCrypto = transactionService.transactionByCrypto(req.params.crypto);
    res.json(transactionByCrypto);
};

const createTransaction = (req, res) => { 
    const createdTransaction = transactionService.createTransaction(req.body);
    res.status(200).json(createdTransaction);
};
  
const deleteTransaction = (req,res) => { 
    const deletedTransaction = transactionService.deleteTransaction(req.params.idtransaction);
    res.status(200).json(deletedTransaction) ;
}

module.exports = { getAllTransactions, getTransactionByDivisa, getTransactionByIndice, getTransactionByMateria, getTransactionByCrypto, createTransaction, deleteTransaction}