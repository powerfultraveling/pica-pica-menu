const db = require("..models");
const Product = db.Product;
const Category = db.Category;

const productController = {
  index: (req, res) => {
    Product.findAll()
      .then((res) => {
        res.render("./homepage/homepage", {
          res: res,
        });
      })
      .catch((err) => {
        console.log(err.toString());
        return;
      });
  },
};
