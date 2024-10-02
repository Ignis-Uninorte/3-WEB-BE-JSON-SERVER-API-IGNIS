const promotional = require("./data/promotional");
const featured = require("./data/featured");
const productsList = require("./data/products");

module.exports = () => {
  return {
    promotional: promotional,
    featured: featured,
    productsList: productsList,
  };
};
