const saveToDataBase = require("../bd/bd");
const db = require("../bd/transactions.json");
const { v4: uuid } = require("uuid");

const getAllTransactions = () => {
    return db.transactions;
};

const transactionByDivisa = (divisa) => {
    const transaction = db.transactions;
    const transactionbydivisa = transaction.filter((transaction) => transaction.activo == divisa);
    return transactionbydivisa;
};

const transactionByIndice = (indice) => {
    const transaction = db.transactions;
    const transactionbyindice = transaction.filter((transaction) => transaction.activo == indice);
    return transactionbyindice;
};

const transactionByMateria = (materia) => {
    const transaction = db.transactions;
    const transactionbymateria = transaction.filter((transaction) => transaction.activo == materia);
    return transactionbymateria;
};

const transactionByCrypto = (crypto) => {
    const transaction = db.transactions;
    const transactionbycrypto = transaction.filter((transaction) => transaction.activo == crypto);
    return transactionbycrypto;
};

const createTransaction = (transaction) => {
    transaction = {id: uuid(), ...transaction};
    const transactions = db.transactions;
    transactions.unshift(transaction);
    saveToDataBase({ transactions: transactions });
    return transaction;
};

const deleteTransaction = (idtransaction) => {
    const transactions = db.transactions;
    const newtransaction = transactions.filter((transaction) => transaction.id != idtransaction);
    const deletetransaction = transactions.filter((transaction) => transaction.id == idtransaction);
    saveToDataBase({ transactions: newtransaction });
    return deletetransaction[0];
};

module.exports = { getAllTransactions, transactionByDivisa, transactionByIndice, transactionByMateria, transactionByCrypto, createTransaction, deleteTransaction}