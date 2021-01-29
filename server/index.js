const express = require('express')
const app = express();
const mockProducts = require('./app/mocks/products')

app.get('/products', (req, res) => {
  return res.json(mockProducts)
})

module.exports = app;
