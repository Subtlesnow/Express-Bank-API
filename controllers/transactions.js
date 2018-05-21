const transactionModel = require('../models/transaction');

const index = (request, response) => {
  const accountTransactions = transactionModel.index(request.params.account_id);
  response.send(accountTransactions);
}

const show = (request, response) => {
  const transaction = transactionModel.show(request.params.title);
  response.send(transaction);
}

const create = (request, response) => {}

const update = (request, response) => {}

const destroy = (request, response) => {}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
