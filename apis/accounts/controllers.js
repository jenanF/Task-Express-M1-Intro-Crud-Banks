
const accounts = require('../../accounts');

const createAccount = (newAccountData) => {
    const newId = accounts.length + 1;
    const newFunds = newAccountData.funds ? newAccountData.funds : 0
    const createdAccount = Object.assign({ id: newId }, newAccountData, { funds: newFunds })
    console.log('new account is: ', account);
    return createdAccount;

}


const updateAnAccount = (accountData, updatedData) => {
    const updateAccount = Object.assign(accountData, updatedData);
    return updateAccount;

}

exports.getAllAccounts = async (req, res) => {
    res.status(200).json(accounts)
}



exports.createNewAccount = async (req, res) => {
    const newAccount = createAccount(req.body);
    res.status(201).json(newAccount)
}


exports.updateAccount = async (req, res) => {
    const { id } = req.params
    const account = accounts.find((account) => account.id == id);
    console.log(account);

    if (account) {
        const updatedAccount = updateAnAccount(account, req.body);
        console.log(updatedAccount)
        res.status(200).json(updatedAccount)
    } else {
        res.status(404).json()
    }
}


exports.deleteAccount = async (req, res) => {
    const { id } = req.params
    const account = accounts.find((account) => account.id == id);
    console.log(account);

    if (account) {

        res.status(204).json()
    } else {
        res.status(404).json()
    }
}


exports.getAccountByName = async (req, res) => {
    const { name } = req.params
    const account = accounts.find((account) => account.username == name);
    console.log(account);

    if (account) {
        res.status(200).json(account)
    } else {
        res.status(404).json()
    }
}