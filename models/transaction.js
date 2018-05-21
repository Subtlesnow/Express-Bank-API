const fs = require('fs');
const path = require('path');
const transactionsPath = path.join(__dirname, '..', 'data', 'transactions.json');

const index = (account_id) => {
  const transactionsJSON = fs.readFileSync(transactionsPath, 'utf-8');
  const allTransactions = JSON.parse(transactionsJSON);
  const accountTransactions = allTransactions.filter( transaction => transaction.account_id === account_id );
  return accountTransactions;
}

const show = (account_id) => {
  const transactionsJSON = fs.readFileSync(transactionsPath, 'utf-8');
  const allTransactions = JSON.parse(transactionsJSON);
  const foundTransaction = allTransactions.find( transaction => transaction.account_id === id);
  return foundTransaction;
}

const create = () => {}

const update = () => {}

const destroy = () => {}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
