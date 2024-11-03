let clients = [];

function addClient(client) {
  clients.push(client);
}

function getClients() {
  return clients;
}

module.exports = {
  addClient,
  getClients
};
