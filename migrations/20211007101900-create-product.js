"use strict";

const category = require("../models/category");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      chineseName: {
        type: Sequelize.STRING,
      },
      englishName: {
        type: Sequelize.STRING,
      },
      hotPrice: {
        type: Sequelize.INTEGER,
      },
      icePrice: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      categoryid: {
        type: Sequelize.INTEGER,
        reference: {
          model: category,
          key: "id,",
        },
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Products");
  },
};
