const express = require('express')
const app = express()

app.get('/ping', (req, res) => {
  return res.send('pong')
})

app.listen(9000)
