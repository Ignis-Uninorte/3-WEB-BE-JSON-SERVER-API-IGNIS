const promotional = require("./data/promotional");
const featured = require("./data/featured");
const product = require("./data/product");

module.exports = () => {
  return {
    promotional: promotional,
    featured: featured,
    product: product,
  };
};
