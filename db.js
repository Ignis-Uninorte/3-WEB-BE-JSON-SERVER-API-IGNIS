const promotional = require("./data/promotional");
const featured = require("./data/featured");
const productsList = require("./data/products");
const filters = require("./data/filters");
const { getClients } = require("./data/client"); // Import getClients from clients.js

module.exports = () => {
  return {
    promotional: promotional,
    featured: featured,
    productsList: productsList,
    filters: filters,
    clients: getClients() // Add clients to the data structure
  };
};
