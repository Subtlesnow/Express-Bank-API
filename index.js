const express = require('express');
const app = express();
const morgan = require('morgan')
const PORT = process.env.PORT || 3003;
const accountRoutes = require('./routes/accounts');
const transactionRoutes = require('./routes/transactions');

app.use(morgan('dev'))
app.use(express.json());

app.use('/', accountRoutes);
app.use('/', transactionRoutes);

app.get('/', (request, response) => {
  response.send("Right here homie!")
})

app.listen( PORT, () => {
  console.log(`Running on ${PORT}`)
})
