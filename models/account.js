const fs = require('fs');
const path = require('path');
const accountsPath = path.join(__dirname, '..', 'data', 'accounts.json');
const uuid = require('uuid/v1');

const index = () => {
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  return accounts;
}

const show = (id) => {
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  const foundAccount = accounts.find( account => account.id === id );
  return foundAccount;
}

const create = ({accountHolder, bankName, description}) => {
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  const newUser = {
    id: uuid(),
    accountHolder: accountHolder,
    bankName: bankName,
    description: description
  };
  accounts.push(newUser);
  const addAccountJSON = JSON.stringify(accounts);
  fs.writeFileSync(accountsPath, addAccountJSON);
  return newUser;
}

const update = (id, upDatedAccount) => {
  let updateAccount;
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  const updatedAccounts = accounts.map( account => {
    if( id === account.id) {
      updateAccount = {...account, ...upDatedAccount}
      return updateAccount;
    } else {
      return account;
    }
  });
  fs.writeFileSync(accountsPath, JSON.stringify(updatedAccounts));
  return updateAccount;
}

const destroy = (id) => {
  let deletedAccount;
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  const remainingAccounts = accounts.filter( account => {
    if( id === account.id) {
      deletedAccount = account;
    } else {
      return account;
    }
  });
  fs.writeFileSync(accountsPath, JSON.stringify(remainingAccounts));
  return deletedAccount;
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
