const promotional = require("./data/promotional"); 
const featured = require("./data/featured");
const productsList = require("./data/products");
const filters = require("./data/filters");
const { getClients } = require("./data/clients"); // Import getClients from clients.js
const { getOpportunities } = require("./data/opportunities"); // Import opportunity methods
const { getActivities } = require("./data/activities"); // Import activity methods

module.exports = () => ({
  promotional: promotional,
  featured: featured,
  productsList: productsList,
  filters: filters,
  clients: getClients(), // Add clients to the data structure
  opportunities: getOpportunities(), // Add opportunities to the data structure
  activities: getActivities(), // Asegúrate de que devuelve un arreglo
});
