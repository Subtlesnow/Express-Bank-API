const accountModel = require('../models/account');

const index = (request, response) => {
  const accounts = accountModel.index();
  response.send(accounts);
}

const show = (request, response) => {
  const accounts = accountModel.show(request.params.id);
  response.send(accounts);
}

const create = (request, response) => {
  const newAccount = accountModel.create(request.body);
  response.send(newAccount);
}

const update = (request, response) => {
  const updateAccount = accountModel.update(request.params.id, request.body);
  response.send(updateAccount);
}

const destroy = (request, response) => {
  const deleteAccount = accountModel.destroy(request.params.id);
  response.send(destroy);
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
