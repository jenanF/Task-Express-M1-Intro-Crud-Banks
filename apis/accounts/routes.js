const express = require("express");
const router = express.Router();
const { getAllAccounts, createNewAccount, deleteAccount, updateAccount, getAccountByName } = require('./controllers')

app.get('/', getAllAccounts)

app.post('/', createNewAccount)

app.delete('/:id', deleteAccount)

app.put('/:id', updateAccount)

app.get('/:name', getAccountByName)

module.exports = router;