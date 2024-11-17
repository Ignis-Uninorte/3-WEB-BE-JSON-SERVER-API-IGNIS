const promotional = require("./data/promotional");
const featured = require("./data/featured");
const productsList = require("./data/products");
const filters = require("./data/filters");
const { getClients } = require("./data/clients"); // Import getClients from clients.js
const { getOpportunities, addOpportunity } = require("./data/opportunities"); // Import opportunity methods
const { getActivities, addActivity } = require("./data/activities"); // Import activity methods

module.exports = () => ({
  promotional: promotional,
  featured: featured,
  productsList: productsList,
  filters: filters,
  clients: getClients(), // Add clients to the data structure
  opportunities: getOpportunities(), // Add opportunities to the data structure
  activities: getActivities(), // Add activities to the data structure
  addActivity: addActivity, // Add the method to add an activity
});
