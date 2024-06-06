"use strict";
/** @type {import('sequelize-cli').Migration} */
//   name: DataTypes.STRING,
// password: DataTypes.STRING,
// phone: DataTypes.STRING,
// zalo: DataTypes.STRING,
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Attributes", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      acreage: {
        type: Sequelize.STRING,
      },
      published: {
        type: Sequelize.STRING,
      },
      hashtag: {
        type: Sequelize.INTEGER,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Attributes");
  },
};
