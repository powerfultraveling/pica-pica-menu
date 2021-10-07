"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category);
    }
  }
  Product.init(
    {
      chineseName: DataTypes.STRING,
      englishName: DataTypes.STRING,
      hotPrice: DataTypes.INTEGER,
      icePrice: DataTypes.INTEGER,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      categoryid: DataTypes.INTEGER,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
