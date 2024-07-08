const express = require('express')
const app = express()

app.get('/pagetermination', function (req, res) {
    console.log('page termination')
    res.send('OK')
})

app.listen(3000)