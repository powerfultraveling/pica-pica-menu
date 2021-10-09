const db = require("../models");
const Product = db.Product;
const Category = db.Category;

const productController = {
  index: (req, res) => {
    Product.findAll()
      .then((data) => {
        res.render("./homepage/homepage", {
          data: data,
        });
      })
      .catch((err) => {
        console.log(err.toString());
        return;
      });
  },
};

module.exports = productController;
