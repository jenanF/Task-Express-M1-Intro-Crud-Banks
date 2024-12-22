const express = require('express')
const app = express()
app.use(express.json());


const accounts = require('./accounts');
const accountsRoute = require("./apis/accounts/routes");

app.use('/accounts', accountsRoute);



// const createNewAccount = (newAccountData) => {
//     const newId = accounts.length + 1;
//     const newFunds = newAccountData.funds ? newAccountData.funds : 0
//     const createdAccount = Object.assign({ id: newId }, newAccountData, { funds: newFunds })
//     console.log('new account is: ', account);
//     return createdAccount;

// }


// const updateAccount = (accountData, updatedData) => {
//     const updateAccount = Object.assign(accountData, updatedData);
//     return updateAccount;

// }

// app.get('/accounts', (req, res) => {
//     res.status(200).json(accounts)
// })

// app.post('/accounts', (req, res) => {
//     const newAccount = createNewAccount(req.body);
//     res.status(201).json(newAccount)
// })

// app.delete('/accounts/:id', (req, res) => {
//     const { id } = req.params
//     const account = accounts.find((account) => account.id == id);
//     console.log(account);

//     if (account) {

//         res.status(204).json()
//     } else {
//         res.status(404).json()
//     }
// })

// app.put('/accounts/:id', (req, res) => {
//     const { id } = req.params
//     const account = accounts.find((account) => account.id == id);
//     console.log(account);

//     if (account) {
//         const updatedAccount = updateAccount(account, req.body);
//         console.log(updatedAccount)
//         res.status(200).json(updatedAccount)
//     } else {
//         res.status(404).json()
//     }

// })

// app.get('/accounts/:name', (req, res) => {
//     const { name } = req.params
//     const account = accounts.find((account) => account.username == name);
//     console.log(account);

//     if (account) {
//         res.status(200).json(account)
//     } else {
//         res.status(404).json()
//     }
// })




app.listen(8000, () => {

})