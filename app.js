const express = require('express')
const app = express()
app.use(express.json());


const accounts = require('./accounts');

const createNewAccount = (newAccountData) => {
    const newId = accounts.length + 1;
    const newFunds = newAccountData.funds ? newAccountData.funds : 0
    const account = Object.assign({ id: newId }, newAccountData, { funds: newFunds })
    console.log('new account is: ', account);
    return account;

}

app.get('/accounts', (req, res) => {
    res.status(200).json(accounts)
})

app.post('/accounts', (req, res) => {
    const newAccount = createNewAccount(req.body);
    res.status(201).json(newAccount)
})

app.listen(8000, () => {

})