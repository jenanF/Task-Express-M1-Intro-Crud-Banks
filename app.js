const express = require('express')
const app = express()

const accounts = require('./accounts');

app.get('/accounts', (req, res) => {
    res.status(200).json(accounts)
})

app.listen(8000, () => {

})